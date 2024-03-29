<!--
<q-list> quasar에서 제공해주는 List를 정리하는 componts
리스트 정리
필터, 정렬 마크업
-->

<template>
  <q-list bordered separator>
    <PostItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      :escapeHTML="escapeHTML"
    />
  </q-list>
</template>

<script setup>
import PostItem from 'src/components/apps/post/PostItem.vue';

defineProps({
  items: Array,
  default: () => [],
  escapeHTML: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
