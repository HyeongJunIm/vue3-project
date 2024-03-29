import { db } from 'boot/firebase';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  getDocs,
  query,
  where,
  orderBy,
  getDoc,
  updateDoc,
  deleteDoc,
  startAt,
  startAfter,
  limit,
  increment,
} from 'firebase/firestore';
import { getUserById } from './user';

export async function createPost(data) {
  // 참조할수있는 위치를 먼저 생성 한다.
  //CollectionReference : 데이터를 찾아갈수 있는 참조 객체 생성
  const docRef = await addDoc(collection(db, 'posts'), {
    ...data,
    readCount: 0,
    likeCount: 0,
    commentCount: 0,
    bookmarkCount: 0,
    createdAt: serverTimestamp(),
  });
  return docRef.id; // 현재는 posts라는 컬렉션 참조값으로 들어가 그게 고유 id 번호를 받아 특정게시글에 진입한다.
}

//setDoc와 addDoc 의 차이 :  setDoc을 사용하면 id를 자동, 수동으로 생성할수 있고 return이 없다, 또한 없는 데이터를 추가하게 되면 기존 데이터가 사라지고 덮어씌워지기 때문에
// setDoc를 활용하여 수정하기를 원한다면 {mrege : ture} 를 반드시 사용해야 한다.
// , addDoc는 자동으로만 생성이 가능하다.

export async function getPost(params) {
  console.log('params : ', params);

  //2) 컬렉션에 있는 문서를 쿼리해서 조회
  const conditions = [];

  if (params?.category) {
    conditions.push(where('category', '==', params?.category));
  }
  if (params?.tags && params?.tags.length > 0) {
    conditions.push(where('tags', 'array-contains-any', params?.tags));
  }

  // 정렬하여 조회(최신순, 조회순, 좋아요순 )
  if (params?.sort) {
    conditions.push(orderBy(params.sort, 'desc'));
  }

  if (params?.start) {
    conditions.push(startAfter(params.start));
  }

  if (params?.limit) {
    conditions.push(limit(params.limit));
  }

  const q = query(collection(db, 'posts'), ...conditions);
  const querySnapshot = await getDocs(q);

  const posts = querySnapshot.docs.map(docs => {
    const data = docs.data();
    return {
      ...data,
      id: docs.id,
      createdAt: data.createdAt?.toDate(),
    };
  });
  // 문서 스냅샷을 통해 '더보기' 클릭스 추가적인 리스트를 가지고 온다
  const latestDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
  return {
    items: posts,
    lastItem: latestDoc,
  };
}

//데이터 한번 가져오기 (상세보기)
export async function getPosts(id) {
  const docSnap = await getDoc(doc(db, 'posts', id));

  if (!docSnap.exists()) {
    throw new Error('no such document!');
  }

  const data = docSnap.data();

  return {
    id: docSnap.id,
    ...data,
    createdAt: data.createdAt?.toDate(),
  };
}

//조회수 증가
async function incrementReacCount(id) {
  await updateDoc(doc(db, 'posts', id), { readCount: increment(1) });
}

export async function getPostDetails(id) {
  incrementReacCount(id);
  const post = await getPosts(id);
  const postUser = await getUserById(post.uid);
  return {
    post,
    postUser,
  };
}

// 게시판 수정하기
export async function updatePost(id, data) {
  await updateDoc(doc(db, 'posts', id), {
    ...data,
    updatedat: serverTimestamp(),
  });
}

//게시판 삭제하기
export async function deletePost(id) {
  await deleteDoc(doc(db, 'posts', id));
}
/**
 * 1)게시글 좋아요
 * 2) 게시글 좋아요 취소
 * 3) 게시글 좋아요 조회
 */
export async function addLike(uid, postId) {
  console.log('uid : ', uid, 'postId : ', postId);
  await setDoc(doc(db, 'post_likes', `${uid}_${postId}`), {
    uid,
    postId,
    createdAt: serverTimestamp(),
  });
}

export async function removeLike(uid, postId) {
  await deleteDoc(doc(db, 'post_likes', `${uid}_${postId}`));
}

// 존재여부만 확인
export async function hasLike(uid, postId) {
  const docSnap = await getDoc(doc(db, 'post_likes', `${uid}_${postId}`));
  return docSnap.exists();
}

//북마크 추가 , 삭제 ,
export async function addBookmark(uid, postId) {
  await setDoc(doc(db, 'users', uid, 'bookmarks', postId), {
    createdAt: serverTimestamp(),
  });
}

// 북마크 삭제
export async function removeBookmark(uid, postId) {
  await deleteDoc(doc(db, 'users', uid, 'bookmarks', postId));
}

// 북마크 체크 여부 확인
export async function hasBookmark(uid, postId) {
  const docSnap = await getDoc(doc(db, 'users', uid, 'bookmarks', postId));
  return docSnap.exists();
}

//마이페이지 북마크에 북마크 내용 조회
export async function getUserBookmarks(uid) {
  const q = query(
    collection(db, 'users', uid, 'bookmarks'),
    orderBy('createdAt', 'desc'),
    limit(6),
  );
  const querySnapshot = await getDocs(q);

  // getPosts(bookmarkDoc.id) 이 함수는 리턴이 Promise로 되기 때문에 배열로 받게되면 [ "[object Promise]" ]  반환된다, 이때 Promise.all을 사용하면 값이 병렬구조를 풀고 반환하게된다
  return Promise.all(
    querySnapshot.docs.map(bookmarkDoc => getPosts(bookmarkDoc.id)),
  );
}

export async function getTags() {
  const q = query(
    collection(db, 'tags'),
    where('count', '>', 0),
    orderBy('count', 'desc'),
  );

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(docu => docu.data());
}
