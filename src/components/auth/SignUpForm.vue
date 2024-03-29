<!-- quasar에서 제공하는 form태그 유효성 검사 기능
:rules="[]" 에 함수를 직접 작성할수 있으며 value 값이 true || false시 나오는 문구 를 작성하면 된다.
hide-bottom-space은 아래 단락과의 공간을 없애준다
-->

<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <!-- <q-input
        v-model="form.nickname"
        placeholder="닉네임"
        outlined
        dense
        hide-bottom-space
        :rules="[validateRequird]"
      /> -->
      <q-input
        v-model="form.email"
        placeholder="이메일"
        outlined
        dense
        hide-bottom-space
        :rules="[validateRequird, validateEmail]"
      />
      <q-input
        v-model="form.password"
        placeholder="비밀번호(문자,숫자조합 8자 이상)"
        outlined
        dense
        type="password"
        hide-bottom-space
        :rules="[validateRequird, validatePassword]"
      />

      <q-input
        v-model="passwordConfirm"
        placeholder="비밀번호 확인"
        outlined
        dense
        type="password"
        hide-bottom-space
        :rules="[
          validateRequird,
          val => validatePasswordConfirm(form.password, val),
        ]"
      />

      <q-btn
        label="가입하기"
        class="full-width"
        unelevated
        color="primary"
        type="submit"
        :loading="isLoading"
      />

      <q-separator />
      <q-btn
        label="로그인 하기"
        class="full-width"
        unelevated
        flat
        @click="$emit('changeView', 'SignInForm')"
      />
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { signUpWithEmail } from 'src/services/auth';
import { useQuasar } from 'quasar';
import {
  validateRequird,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from 'src/utils/validate-rules';

import { useAsyncState } from '@vueuse/core';
import { getErrorMessage } from 'src/utils/firebase/error-message';

const emit = defineEmits(['changeView', 'closeDialog']);

const $q = useQuasar();

const { isLoading, execute } = useAsyncState(signUpWithEmail, null, {
  immediate: false,
  onSuccess: () => {
    $q.notify('가입을 환영합니다 :)');
    $q.notify('이메일에서 인증링크를 확인하세요!');
    emit('closeDialog');
  },
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const handleSubmit = () => execute(1000, form.value);

const passwordConfirm = ref('');
// 회원가입에 필요한 필드초기화
const form = ref({
  nickname: '',
  email: '',
  password: '',
});

// const handleSubmit = async () => {
//   await signUpWithEmail(form.value);
//   $q.notify('가입을 환영합니다 :)');
//   $q.notify('이메일에서 인증링크를 확인하세요!');
//   emit('closeDialog');
// };
</script>

<style lang="scss" scoped></style>
