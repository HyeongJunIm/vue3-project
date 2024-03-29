<!--
 <PostFrom
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
       /> 상위 컴포넌트에서 하위 컴포넌트로 값을 보내주기 위한 v-model 사용법
-->

<template>
  <q-page>
    <BaseCard>
      <q-toolbar>
        <q-toolbar-title>글 쓰기</q-toolbar-title>
      </q-toolbar>
      <q-separator />
      <PostFrom
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:tags="form.tags"
        @submit="handleSubmit"
      >
        <template #action>
          <q-btn flat label="취소" v-close-popup />
          <q-btn
            flat
            label="수정"
            color="primary"
            type="submit"
            :loading="isLoading"
          />
        </template>
      </PostFrom>
    </BaseCard>
  </q-page>
</template>

<script>
// form태그안에 있는 내용들을 초기화 하기위해서 함수를 정의한다
const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: '',
});
</script>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getPosts, updatePost } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { useQuasar } from 'quasar';
import BaseCard from 'src/components/base/BaseCard.vue';
import PostFrom from 'src/components/apps/post/PostForm.vue';

// 정의한 함수를 통해서 재정의를한다.
const form = ref(getInitialForm());

// 함수를 통해 재정의 하는것이 추가적인 코드를 적용하지 않아도 된다
// const onHide = () => {
//   form.value = getInitialForm();
//   tegField.value = '';
// };
const route = useRoute();
const $q = useQuasar();
//기존에 저장되어있던 데이터 조회
useAsyncState(
  () => getPosts(route.params.id),
  {},
  {
    onSuccess: post => {
      form.value.title = post.title;
      form.value.category = post.category;
      form.value.content = post.content;
      form.value.tags = post.tags;
    },
  },
);
//수정해서 다시 저장할 내용
const { isLoading, execute: executeUpdatePost } = useAsyncState(
  updatePost,
  null,
  {
    immediate: false,
    throwError: true,
    onSuccess: () => {
      $q.notify('수정완료!');
    },
  },
);

const handleSubmit = async () => {
  if (confirm('수정하시겠습니까?') === false) {
    return;
  }

  await executeUpdatePost(1, route.params.id, form.value);
};
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  width: 800px
</route>
