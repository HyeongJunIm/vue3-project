<template>
  <q-page padding>
    <PostDetails />
    <q-separator class="q-my-xl" />
    <PostComments />
  </q-page>
</template>

<script setup>
import PostDetails from 'src/pages/posts/[id]/components/PostDetails.vue';
import PostComments from 'src/pages/posts/[id]/components/PostComments.vue';
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  width: 800px
</route>
