<template>
  <router-view />
</template>

<script setup>
//onErrorCaptured() = > 자식컴포넌트에서 에러가 캡처되었을 때 호출될 콜백을 등록합니다.
import { onErrorCaptured } from 'vue';

onErrorCaptured(err => {
  console.log('### onErrorCaptured ###');
  console.log('err : ', err);
});
</script>

<!--
 tiptap  =>  npm install @tiptap/vue-3 @tiptap/pm @tiptap/starter-kit

-->
