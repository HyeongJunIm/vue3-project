<template>
  <BaseCard>
    <q-form @submit.prevent="handleSubmit">
      <q-card-section class="q-gutter-md">
        <div class="text-h6">비밀번호 변경</div>
        <q-input
          v-model="form.newPassword"
          type="password"
          outlined
          dense
          label="새로운 비밀번호"
          hide-bottom-space
          :rules="[validateRequird, validatePassword]"
        />
        <q-input
          v-model="form.newPasswordConfirm"
          type="password"
          outlined
          dense
          label="새로운 비밀번호 확인"
          hide-bottom-space
          :rules="[
            validateRequird,
            val => validatePasswordConfirm(form.newPassword, val),
          ]"
        />
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-space />
        <q-btn
          type="submit"
          label="저장하기"
          flat
          color="primary"
          :loading="isLoding"
        />
      </q-card-actions>
    </q-form>
  </BaseCard>
</template>

<script setup>
import { ref } from 'vue';
import { updateUserPassword } from 'src/services/auth';
import BaseCard from 'src/components/base/BaseCard.vue';
import { useQuasar } from 'quasar';
import {
  validateRequird,
  validatePassword,
  validatePasswordConfirm,
} from 'src/utils/validate-rules';
import { getErrorMessage } from 'src/utils/firebase/error-message';
import { useAsyncState } from '@vueuse/core';
const $q = useQuasar();

// user updatePassword
const form = ref({
  newPassword: '',
  newPasswordConfirm: '',
});

const { isLoding, execute } = useAsyncState(updateUserPassword, null, {
  immediate: false,
  throwError: true,
  onSuccess: () => {
    $q.notify('비밀번호가 변경되었습니다!');
    form.value.newPassword = '';
    form.value.newPasswordConfirm = '';
  },
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const handleSubmit = () => {
  execute(0, form.value.newPassword);
  form.value.newPassword = '';
  form.value.newPasswordConfirm = '';
  validateRequird();
};

// const handleSubmit = async () => {
//   await updateUserPassword(form.value.newPassword);
// };

// watch(form, (newValue, oldValue) => {
//   // handleSubmit() 이후에 필수값 검증만 실행
//   if (newValue !== oldValue) {
//     validateRequird(newValue.newPassword);
//   }
// });
</script>

<style lang="scss" scoped></style>
