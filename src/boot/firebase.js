import { boot } from 'quasar/wrappers';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

//파일 업로드를 위한 스토리지 구성
import { getStorage } from 'firebase/storage';

// 구글에서 받아온 유저 정보를 pinia에 넘겨주기 위한 import
import { useAuthStore } from 'src/stores/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD6VC8NjSdpxbzb7uZ4JhmGz9bysacJtl8',
  authDomain: 'ihj-vue3-firebase-app-5e087.firebaseapp.com',
  projectId: 'ihj-vue3-firebase-app-5e087',
  storageBucket: 'ihj-vue3-firebase-app-5e087.appspot.com',
  messagingSenderId: '1060099979864',
  appId: '1:1060099979864:web:7d287ccf2cad674fe8282d',
  measurementId: 'G-C0EXM69NTQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  // pinia에 저장하기 위한 변수
  const authStore = useAuthStore();
  // firebase에서 user를 관리할수 있는 API , 사용자가 재 세팅이 이루어 진다
  onAuthStateChanged(auth, user => {
    console.log('###user : ', user);
    authStore.setUser(user);
  });
});

//firebase의 데이터 저장 단위는 문서 ->ex) 1명의 정보를 담는 기본단위
