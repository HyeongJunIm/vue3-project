<template>
  <div class="q-gutter-y-md">
    <BaseCard>
      <q-form @submit.prevent="handleSubmitProfile">
        <q-card-section class="q-gutter-md">
          <div class="text-h6">프로필 변경</div>
          <q-input
            v-model="displayName"
            outlined
            dense
            label="닉네임"
            :loading="isLoadingProfile"
          />
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <q-space />
          <q-btn
            type="submmit"
            label="저장하기"
            flat
            color="primary"
            :loading="isLoadingEmail"
          />
        </q-card-actions>
      </q-form>
    </BaseCard>

    <BaseCard>
      <q-form @submit.prevent="handleSubmitEmail">
        <q-card-section class="q-gutter-md">
          <div class="text-h6">이메일 변경</div>
          <q-input v-model="email" outlined dense label="이메일" />
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <q-space />
          <q-btn type="submmit" label="저장하기" flat color="primary" />
        </q-card-actions>
      </q-form>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from 'src/components/base/BaseCard.vue';
import { updateUserProfile, updateUserEmail } from 'src/services/auth';
import { useQuasar } from 'quasar';
import { useAuthStore } from 'src/stores/auth';
import { ref, watchEffect } from 'vue';
import { useAsyncState } from '@vueuse/core';
import { getErrorMessage } from 'src/utils/firebase/error-message';
const $q = useQuasar();
const authStore = useAuthStore();
const displayName = ref('');
const email = ref('');

//프로필 비동기 처리 로직
const { isLoading: isLoadingProfile, execute: executePrifile } = useAsyncState(
  updateUserProfile,
  null,
  {
    immediate: false,
    onSuccess: () => {
      $q.notify('프로필 변경 완료!');
    },
    onError: err => {
      console.log(err.message);
      $q.notify({
        type: 'negative',
        message: getErrorMessage(err.code),
      });
    },
  },
);

const handleSubmitProfile = () => executePrifile(0, displayName.value);

// const handleSubmitProfile = async () => {
//   await updateUserProfile(displayName.value);
//   $q.notify('프로필 변경 완료!');
// };

// 이메일 변경 비동기 로직
const { isLoading: isLoadingEmail, execute: executeEmail } = useAsyncState(
  updateUserEmail,
  null,
  {
    immediate: false,
    onSuccess: () => {
      $q.notify('이메일 변경 완료!');
    },
    onError: err => {
      $q.notify({
        type: 'nagative',
        message: getErrorMessage(err.code),
      });
    },
  },
);

const handleSubmitEmail = () => executeEmail(0, email.value);
// const handleSubmitEmail = async () => {
//   await updateUserEmail(email.value);
//   $q.notify('이메일 변경 완료!');
// };

//프로필 진입시 기존 저장 내용 보여주기
//Optional chaining 연산자가 nullish일 경우 에러가 발생하는 것이 아닌 undefine로 표현돈다.
watchEffect(() => {
  displayName.value = authStore.user?.displayName;
  email.value = authStore.user?.email;
});
</script>

<style lang="scss" scoped></style>
