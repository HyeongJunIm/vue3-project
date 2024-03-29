<!--
  fallthrough 속성 : 컴포넌트에 전달하는 속성 , prop와 emit에 포함되지 않는 속성을 의미한다.
  자식컴포넌트의 최상의 루트의 엘리먼트에 상속된다.
  만약 이런 fallthrough 속성을 없애고 싶다면 inheritAttrs를 false로 지정하면 된다

persistent : 백그라운드를 클릭해도 창이 사라지지 않는다
q-dialog 속성 알아보기

   <template #selected>
#selected : 기본적으로 산택된 값으로 재정의 해주는 슬롯
          </template>

  <q-select
          v-model="form.category"
          class="q-pt-md"
          outlined
          :options="categories" -> 모듈화된 함수를 가져와서 사용
        >



<q-chip removable></q-chip> 는 선택된 태그가 페이지에보여지도록 해준다
// 옵션으로  removable를 사용하면 삭제할수 있다.
@remove="removeTag" 함수를 통해 정의할수 있다
-->

<template>
  <q-dialog persistent v-bind="$attrs" @hide="onHide">
    <q-card :style="{ minwidth: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글 쓰기</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close" />
      </q-toolbar>
      <q-separator />
      <PostFrom
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:tags="form.tags"
        :loading="isLoading"
        @submit="execute(1, { ...form, uid: authStore.uid })"
      />
    </q-card>
  </q-dialog>
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
import PostFrom from 'src/components/apps/post/PostForm.vue';
import { createPost } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router';

const emit = defineEmits(['complete']);
// 정의한 함수를 통해서 재정의를한다.
const form = ref(getInitialForm());
const authStore = useAuthStore();
// 함수를 통해 재정의 하는것이 추가적인 코드를 적용하지 않아도 된다
const onHide = () => {
  form.value = getInitialForm();
};

const router = useRouter();

// 페이지에서 글을 작성하고 저장하기 버튼을 누르면 handleSubmit 이벤트가 발생하면서 useAsyncState로 데이터가 넘어와 createPost 쿼리문이 실행된다
const { isLoading, execute } = useAsyncState(createPost, null, {
  immediate: false,
  throwError: true,
  onSuccess: postId => {
    console.log('postId : ', postId);
    emit('complete');
  },
});

// 작성된 글 데이터에저장
// 비동기 처리로 함수를 구현했기때문에 오류가 발생하더라도 캐치하지 못한다, 단, 함수를 exeute로만 구현하면 리턴타입이 promise이기때문에 catch문을 통해 오류를 확인할수 있다.
</script>

<style lang="scss" scoped></style>
