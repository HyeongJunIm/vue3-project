import { db } from 'src/boot/firebase';

import {
  addDoc,
  collection,
  deleteDoc,
  orderBy,
  doc,
  query,
  serverTimestamp,
  getDocs,
} from 'firebase/firestore';

//댓글 저장
export async function addComment(postId, data) {
  const docRef = await addDoc(collection(db, 'posts', postId, 'comments'), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

//댓글 리스트 불러오기

export async function getComment(postId) {
  const q = query(
    collection(db, 'posts', postId, 'comments'),
    orderBy('createdAt', 'desc'),
  );

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(docu => {
    const data = docu.data();
    return {
      id: docu.id,
      ...data,
      createdAt: data.createdAt.toDate(),
    };
  });
}

//댓글 삭제
export async function deleteComment(postId, commentId) {
  await deleteDoc(doc(db, 'posts', postId, 'comments', commentId));
}
