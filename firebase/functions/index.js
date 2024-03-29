// firebase의 함수를 실행시켜주기 위한 js 작성 위치
const functions = require('firebase-functions');
// const { logger } = require('firebase-functions');

const {
  onDocumentCreated,
  onDocumentDeleted,
  onDocumentUpdated,
} = require('firebase-functions/v2/firestore');

// The Firebase Admin SDK to access Firestore.
const { initializeApp, cert } = require('firebase-admin/app');
const {
  getFirestore,
  FieldValue,
  Timestamp,
} = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');
const { logger } = functions;

const app = initializeApp({
  credential: cert(serviceAccount),
});
const db = getFirestore(app);
// 파이어 베이스 배포를 위한 코드
const region = 'asia-northeast3';

//북마크 카운트 증가
exports.onCreateBookmark = onDocumentCreated(
  {
    // firebase 베포 장소를 같이 넣어준다
    region,
    // 내가 참조한 곳의 위치를 넣어준다
    document: 'users/{uid}/bookmarks/{postId}',
  },
  //콜백함수로 내가 실행할 함수를 작성한다
  event => {
    const postId = event.params.postId;
    // 해당 doc에 접근 가능 (북마크 수는 posts 에서 관리하고 있음 )
    db.doc(`posts/${postId}`).update({
      bookmarkCount: FieldValue.increment(1),
    });
  },
);

//북마크 감소
exports.onDeleteBookmark = onDocumentDeleted(
  {
    // firebase 베포 장소를 같이 넣어준다
    region,
    // 내가 참조한 곳의 위치를 넣어준다
    document: 'users/{uid}/bookmarks/{postId}',
  },
  event => {
    const postId = event.params.postId;
    // 해당 doc에 접근 가능 (북마크 수는 posts 에서 관리하고 있음 )
    db.doc(`posts/${postId}`).update({
      bookmarkCount: FieldValue.increment(-1),
    });
  },
);

//댓글수 증가
exports.onCreateComment = onDocumentCreated(
  {
    // firebase 베포 장소를 같이 넣어준다
    region,
    // 내가 참조한 곳의 위치를 넣어준다
    document: 'posts/{postId}/comments/{commentId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      commentCount: FieldValue.increment(1),
    });
  },
);

//댓글수 감소
exports.onDeleteComment = onDocumentDeleted(
  {
    // firebase 베포 장소를 같이 넣어준다
    region,
    // 내가 참조한 곳의 위치를 넣어준다
    document: 'posts/{postId}/comments/{commentId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      commentCount: FieldValue.increment(-1),
    });
  },
);

exports.onCreateLike = onDocumentCreated(
  {
    // firebase 베포 장소를 같이 넣어준다
    region,
    // 내가 참조한 곳의 위치를 넣어준다
    document: 'post_likes/{id}',
  },
  event => {
    // 좋아요 데이터는 현재 post_like에서 각 문서별 좋아요를 클릭한 post의 id를 필드로 가지고 있음, 따라서 정확한 postId를 가져오기 위해서는 데이터로 접근해서 가져오는것이 좋음
    const snapshot = event.data; // event에는 data 객체가 있음
    const data = snapshot.data();
    logger.log('data : ', data);
    db.doc(`posts/${data.postId}`).update({
      likeCount: FieldValue.increment(1),
    });
  },
);

// 좋아요 감소
exports.onDeleteLike = onDocumentDeleted(
  {
    // firebase 베포 장소를 같이 넣어준다
    region,
    // 내가 참조한 곳의 위치를 넣어준다
    document: 'post_likes/{id}',
  },
  event => {
    // 좋아요 데이터는 현재 post_like에서 각 문서별 좋아요를 클릭한 post의 id를 필드로 가지고 있음, 따라서 정확한 postId를 가져오기 위해서는 데이터로 접근해서 가져오는것이 좋음
    const snapshot = event.data; // event에는 data 객체가 있음
    const data = snapshot.data();
    logger.log('data : ', data);
    db.doc(`posts/${data.postId}`).update({
      likeCount: FieldValue.increment(-1),
    });
  },
);

// 사용자 관리 함수
exports.onCreateUser = functions
  .region(region)
  .auth.user()
  .onCreate(user => {
    logger.log(user);
    // users/save , 회원가입 하는 user에세는 providerData가 생성되며 이 배열안에 여러 정보가 존재한다. 이걸 활용하여 해결한다
    const isPasswordProvider = user.providerData.some(
      userInfo => userInfo.providerId === 'password',
    );
    const defaultPhotoURL = `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${user.uid}`;
    const displayName = isPasswordProvider
      ? user.email.split('@')[0]
      : user.displayName;

    const photoURL = isPasswordProvider ? defaultPhotoURL : user.photoURL;

    db.doc(`users/${user.uid}`).set({
      email: user.email,
      displayName,
      photoURL,
      createdAt: Timestamp.fromDate(new Date(user.metadata.creationTime)),
    });
  });

exports.onDeleteUser = functions
  .region(region)
  .auth.user()
  .onDelete(user => {
    logger.log(user);
    //users/ remove
    db.doc(`users/${user.uid}`).delete();
  });

//테그 데이터 컬렉션 , 테그가 post가 등록이 될때 생성되기 때문에 먼저 post 등로 함수를 만든다
exports.onCreatePost = onDocumentCreated(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const data = event.data.data();
    if (data.tags) {
      updateTags(data.tags);
    }
  },
);

exports.onDeletePost = onDocumentDeleted(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const data = event.data.data();

    if (data.tags) {
      updateTags(data.tags, -1);
    }
  },
);

// 게시글 수정시 태그 변경
exports.onUpdatePost = onDocumentUpdated(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const prevData = event.data.before.data();
    const data = event.data.after.data();

    const tagsToRemove = differenceTags(prevData.tags, data.tags);
    const tagsToAdd = differenceTags(data.tags, prevData.tags);
    logger.log('tagsToRemove : ', tagsToRemove);
    logger.log('tagsToAdd : ', tagsToAdd);

    if (tagsToRemove) {
      updateTags(tagsToRemove, -1);
    }

    if (tagsToAdd) {
      updateTags(tagsToAdd);
    }
  },
);
function differenceTags(arr1, arr2) {
  if (!arr1 || !arr2) {
    return arr1;
  }

  return arr1.filter(value => arr2.includes(value) === false);
}
//태그 차집합 함수

function updateTags(tags = [], incrementValue = 1) {
  tags?.forEach(tag => {
    db.doc(`tags/${tag.toLowerCase()}`).set(
      { name: tag, count: FieldValue.increment(incrementValue) },
      { merge: true },
    );
  });
}
