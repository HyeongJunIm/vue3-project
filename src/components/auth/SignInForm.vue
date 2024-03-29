<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSignInEmail">
      <q-input v-model="form.email" placeholder="이메일" outlined dense />
      <q-input
        v-model="form.password"
        placeholder="비밀번호"
        outlined
        dense
        type="password"
      />
      <DisplayError :code="error?.code" />
      <div>
        <q-btn
          type="submit"
          label="로그인하기"
          class="full-width"
          unelevated
          color="primary"
          :loading="isLoading"
        />
        <div class="flex justify-between">
          <q-btn
            label="비밀번호 찾기"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeView', 'FindPasswordForm')"
          />
          <q-btn
            label="이메일 가입하기"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeView', 'SignUpForm')"
          />
        </div>
      </div>
      <q-separator />
      <q-btn
        label="구글 계정으로 로그인 하기"
        class="full-width"
        unelevated
        color="primary"
        outline
        @click="handleSignInGoogle"
      />
    </q-form>
  </div>
</template>

<script setup>
import { signInWithGoogle, signInWithEmail } from 'src/services/auth';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import DisplayError from 'src/components/DisplayError.vue';
import { getErrorMessage } from 'src/utils/firebase/error-message';
import { useAsyncState } from '@vueuse/core';
const emit = defineEmits(['changeView', 'closeDialog']);
// quasar를 이용한 이밴트 처리
const $q = useQuasar();
//이메일 로그인
const form = ref({
  email: '',
  password: '',
});

//local error handling (유효하지 않는 이메일 관리 )
// const isLoading = ref(false);
// const error = ref(null);

//비동기 처리를 위한 로직
const { isLoading, error, execute } = useAsyncState(signInWithEmail, null, {
  immediate: false,
  // 로직이 실행될때 일부로 오류를 발생시키고자 할때 true값을 넣어 억지로 발생시킨다.
  throwError: true,
  onSuccess: () => {
    $q.notify('환영합니다.');
    emit('closeDialog');
  },
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const handleSignInEmail = () => execute(1000, form.value);
// const handleSignInEmail = async () => {
//   try {
//     isLoading.value = true;
//     await signInWithEmail(form.value);
//     $q.notify('환영합니다.');
//     emit('closeDialog');
//   } catch (err) {
//     error.value = err;
//     $q.notify({
//       type: 'negative',
//       message: getErrorMessage(err.code),
//     });
//   } finally {
//     isLoading.value = false;
//   }
// };

//구글 로그인
const handleSignInGoogle = async () => {
  await signInWithGoogle();
  $q.notify('환영합니다~!!');
  emit('closeDialog');
};
</script>

<style lang="scss" scoped></style>
