<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">
      비밀번호 찾기
    </div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input v-model="email" placeholder="가입한 이메일" outlined dense />

      <q-btn
        label="비밀번호 재설정"
        class="full-width"
        unelevated
        color="primary"
        type="submit"
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
import { sendPasswordReset } from 'src/services';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const emit = defineEmits(['changeView', 'closeDialog']);

const email = ref('');
const handleSubmit = async () => {
  await sendPasswordReset(email);

  $q.notify('이메일로 비밀번호 재설정 링크를 보냈어요!');
  emit('closeDialog');
};
</script>

<style lang="scss" scoped></style>
