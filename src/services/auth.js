// //로그인 구글
// firebase 스펙 변경으로 이메일 열거 보호가 발생하게 된다
// 사용자의 이메일 주소가 무단으로 수집되느 ㄴ것을 방지하기 위한 보안정책
// 해당 정책 비활성화를 하는 방법
// 콘솔로 들어가서 프로젝트 authtication 에서 설정->사용자관리에서 체크를 해제한다
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification,
  updateEmail,
} from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { auth } from 'src/boot/firebase';
import { db } from 'src/boot/firebase';

const DEFAULT_PHOTO_URL =
  'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=';

// 구글 이메일 로그인을 하기위한 API
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);

  console.log('user', result.user);
}

//로그아웃
export async function logout() {
  //signout 메소드에 auth 로그인 내용을 넣어준다
  await signOut(auth);
}

//회원가입
export async function signUpWithEmail({ email, password }) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, {
    displayname: email.split('@')[0],
    photoURL: generateDefaultPhotoURL(user.uid),
  });
  sendVrificationEmail();
}
// 로그인 디폴디 썸네이 이미지
export function generateDefaultPhotoURL(uid) {
  return `${DEFAULT_PHOTO_URL}${uid}`;
}

// eamil 로그인
export async function signInWithEmail({ email, password }) {
  //이메일 로그인 메소드
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

//비밀번호 찾기 이후 가입한 이메일로 비밀번호 재설정 메일 보내기
export async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

// 사용자 비밀번호 변경
export async function updateUserPassword(newPassword) {
  await updatePassword(auth.currentUser, newPassword);
}

// 이메일 인증하기
export async function sendVrificationEmail() {
  await sendEmailVerification(auth.currentUser);
}

//사용자 프로필 수정
export async function updateUserProfile(displayName) {
  await updateProfile(auth.currentUser, {
    displayName,
  });

  // 현재는 Authrntication의 정보는 수정이 되지만 데이터를 관리하는 users컬렉션은 변동되지 않는다.
  await updateDoc(doc(db, 'users', auth.currentUser.uid), { displayName });
}

// 사용자 이메일 주소 수정
export async function updateUserEmail(email) {
  await updateEmail(auth.currentUser, email);
  await updateDoc(doc(db, 'users', auth.currentUser.uid), { email });
}
