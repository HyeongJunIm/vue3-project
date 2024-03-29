<!--
로그인/회원가입 모달창


 외부에서 V-model를 통해서 값을 불러오기 위해서는 부모컴포넌트의 값을 가지고 와야한다 (props or emit)
v-close-popup quasar에서 팝업창을 다루는 방법
transition-show="" => 효과를 주는 방법

다이나믹 컴포넌트

컴포넌트 조건부를 활용을 최적화 시켜주는 방법
ex)  <SingInForm
          v-if="viewMode === 'SingInForm'"
          @change-view="changeViewMode"
        />
        <SingUpForm
          v-else-if="viewMode === 'SingUpForm'"
          @change-view="changeViewMode"
        />
        <FindPasswordForm v-else @change-view="changeViewMode" />

-->
<template>
  <!--q-dialog 이벤트에는  @hide 이벤트가 있는데 이 이벤트는 사용자가 희망하는 페이지가 나오도록 설정할수 있다-->
  <q-dialog
    :model-value="modelValue"
    @update:model-value="val => $emit('update:modelValue', val)"
    transition-show="none"
    transition-hide="none"
    @hide="changeViewMode('SignInForm')"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-px-xl q-pb-xl">
        <!--
          v-if를 활용한 컴포넌트 이동
        -->
        <!-- <SingInForm
          v-if="viewMode === 'SingInForm'"
          @change-view="changeViewMode"
        />
        <SingUpForm
          v-else-if="viewMode === 'SingUpForm'"
          @change-view="changeViewMode"
        />
        <FindPasswordForm v-else @change-view="changeViewMode" /> -->
        <!--
        동적 컴포넌트
       -->
        <component
          :is="authViewComponents[viewMode]"
          @change-view="changeViewMode"
          @close-dialog="closeDialog"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';

// import FindPasswordForm from './FindPasswordForm.vue';
// import SignInForm from './SignInForm.vue';
// import SignUpForm from './SignUpForm.vue';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const viewMode = ref('SignInForm'); //SingInForm 로그인 SingUpForm 회원강비 FindPassword 비밀번호찾기

const changeViewMode = mode => {
  viewMode.value = mode;
};

// const authViewComponents = {
//   SignInForm,
//   SignUpForm,
//   FindPasswordForm,
// };

// 지연로딩을 통해서 초기에 컴포넌트를 불러오지 않아 속도를 줄여준다.
// 이후 컴포넌트를 불러올때 로등을 해온다
const authViewComponents = {
  SignInForm: defineAsyncComponent(() => import('./SignInForm.vue')),
  SignUpForm: defineAsyncComponent(() => import('./SignUpForm.vue')),
  FindPasswordForm: defineAsyncComponent(() =>
    import('./FindPasswordForm.vue'),
  ),
};

// 회원가입, 로그인 후 창을 닫아주기 위해 값을 update해준다.
const closeDialog = () => {
  emit('update:modelValue', false);
};
</script>

<style lang="scss" scoped></style>
