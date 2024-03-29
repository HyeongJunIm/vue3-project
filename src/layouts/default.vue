<!--quasar layout style 방법
 quasar 공식홈페이지 사용할수 있는 툴들이 있다.

 router를 사용할깨 링크는 to="" , 외부 링크로 이동시 href=""

 layout 속성중 hHh 에서 가운데를 대문자로 하면 해더가 픽스가 됨 단, 소문자로 하면 픽스가 되지않음

 앞에 h로 할경우 사이드 바가 헤더에 적용되지 않지만 l로 할경우 헤더에도 적용

 layout 스타일 적용
 -->
<template>
  <q-layout view="lHh Lpr lff" class="bg-grey-2">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>
            코딩 클럽
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <!-- 단락 사이를 띄워준다.-->
        <q-btn stretch flat label="Home" to="/home" />
        <q-btn
          stretch
          flat
          label="수강하기"
          href="https://google.com"
          target="_blanck"
        />
        <q-btn
          stretch
          flat
          label="온라인 강의"
          href="https://google.com"
          target="_blanck"
        />
        <q-btn
          stretch
          flat
          label="유투브"
          href="https://youtube.com/"
          target="_blanck"
        />

        <q-separator class="q-my-md q=mr-md" vertical />

        <q-btn
          v-if="!authStore.isAuthenticated"
          unelevated
          rounded
          color="primary"
          label="로그인/ 회원가입"
          @click="openAuthDialog"
        />
        <q-btn v-if="authStore.isAuthenticated" round flat>
          <q-avatar>
            <img
              :src="
                authStore.user.photoURL ||
                generateDefaultPhotoURL(authStore.user.uid)
              "
            />
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item
                v-if="authStore.user.emailVerified"
                clickable
                v-close-popup
                to="/mypage/profile"
              >
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item v-else clickable v-close-popup @click="verifyEmail">
                <q-item-section class="text-red"
                  >이메일을 인증해주세요.</q-item-section
                >
              </q-item>
              <q-item clickable v-close-popup @click="handlelogout">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>
    <AuthDialog v-model="authDialog" />
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import {
  logout,
  generateDefaultPhotoURL,
  sendVrificationEmail,
} from 'src/services';
import { useQuasar } from 'quasar';
import AuthDialog from 'src/components/auth/AuthDialog.vue';
const route = useRoute();
const $q = useQuasar();
//breack Point 설정
// console.dir(route);
// 패아자 스타일도 route의 매타정보(자식 컴포넌트의 값)를 활용하여 페이지별 구분할수 있다.
const pageContainerStyles = computed(() => ({
  maxWidth: route.meta.width || '1080px',
  margin: '0 auto',
}));

const authDialog = ref(false);
const openAuthDialog = () => {
  authDialog.value = true;
};

const authStore = useAuthStore();

console.log('authStore : ', authStore);

const handlelogout = async () => {
  await logout();
  $q.notify('로그아웃 되었습니다.');
};

const verifyEmail = async () => {
  await sendVrificationEmail();
  $q.notify('이메일을 확인해주세요~!');
};
</script>
