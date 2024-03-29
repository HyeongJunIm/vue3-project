// Pinia는 Vue.js 애플리케이션의 상태 관리 라이브러리입니다. auth를 관리하며 유저의 상태를 쉽게 관리한다

import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

// 구글 이메일 로그인을 사용하는 방법
export const useAuthStore = defineStore('auth', () => {
  // firebase에서 관리하기 때문에 새로고침시 데이터를 다시받아오면서 화면에 로그인/회원가입 이미지가 보인다
  //이것을 해결하기 위해 로컬스토리지에서 user를 관리한다(Vueuse를 사용)
  //vueuse 라이브러리는 vue.js에서 사용할수 있는 여러 유틸리티 라이브러리를 가지고 있다.
  //npm i @vueuse/core를 사용하여 설치한다

  // const user = ref(null);
  //useLocalStorage(key,초기값,옵션)
  // auth/user 라는 키로 저장이 되지만 초기값은 obj로 저장이 되기때문에 형변환에 어려움이 있다.
  //이떄, option을 활용한다 , serializer 입출력시 자동으로 형변환이 되게해준다 . 반응형으로 동기화 처리가 된다
  const user = useLocalStorage('auth/user', null, {
    serializer: StorageSerializers.object,
  });
  //computed를 활용하여 user로그인 상태 확인
  const isAuthenticated = computed(() => !!user.value);
  // user의 id를 사용하기 위해 선언한다
  const uid = computed(() => user.value?.uid || null);
  const setUser = userData => {
    console.log('userDate: ', userData);

    user.value = userData;
    // 구글 로그인에서 가져온 user 정보를 pinia에 저장
    if (userData) {
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData.displayName,
        email: userData.email,
        emailVerified: userData.emailVerified,
      };
    } else {
      user.value = null;
    }
  };

  // 로그린 여부에 따른 버튼 보여주기
  const hasOwnContent = commentUid => {
    if (!isAuthenticated.value) {
      return false;
    }
    return uid.value === commentUid;
  };

  return {
    user,
    isAuthenticated,
    setUser,
    uid,
    hasOwnContent,
  };
});
