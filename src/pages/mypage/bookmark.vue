<template>
  <PostList :items="items" />
  {{ posts }}
</template>

<script setup>
import { getUserBookmarks } from 'src/services';
import { ref } from 'vue';
import { useAuthStore } from 'src/stores/auth';
import { storeToRefs } from 'pinia';
import { useAsyncState } from '@vueuse/core';
import PostList from 'src/components/apps/post/PostList.vue';
const authStore = useAuthStore();

const { state: items } = useAsyncState(() => getUserBookmarks(authStore.uid));
</script>

<style lang="scss" scoped></style>

<!--
grid 시스템 : 화면을 바둑판 형식으로 나누어 설정하는 것 =>이것 통해 사용자들에게 가장 알맞은 ui시스템을 제공한다

-->
