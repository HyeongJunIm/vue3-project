<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" v-model:category="category" />
      <section class="col-7">
        <PostHeader v-model:sort="sort" />
        <PostList :items="items" />
        <div v-intersection-observer="handleIntersctionObserver"></div>
      </section>
      <PostRightBar
        class="col-3"
        @open-write-dialog="openWriteDialog"
        v-model:tags="tags"
      />
    </div>
    <PostWriteDialog
      v-model="postDialog"
      @complete="completeRegistrationPost"
    />
  </q-page>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { getPost } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { vIntersectionObserver } from '@vueuse/components';
import { usePostQuery } from 'src/composables/usePostQuery';
import { useAuthStore } from 'src/stores/auth';
import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from 'src/pages/components/PostHeader.vue';
import PostLeftBar from 'src/pages/components/PostLeftBar.vue';
import PostRightBar from 'src/pages/components/PostRightBar.vue';
import PostWriteDialog from 'src/components/apps/post/PostWriteDialog.vue';

//query 스트링을 통한 동작
const { category, sort, tags } = usePostQuery();
const authStore = useAuthStore();

// 레프트 바에있는 특정 카테고리와 연결하기 위한 변수
const params = computed(() => ({
  category: category.value,
  tags: tags.value,
  sort: sort.value,
  limit: 4,
}));

const postDialog = ref(false);
const openWriteDialog = () => {
  if (!authStore.isAuthenticated) {
    alert('로그인이 필요합니다!');
    return;
  }
  postDialog.value = true;
};

// 모든 리스트 불러오기
const items = ref([]);
const start = ref(null);
const isLoadMore = ref(true);
const { execute } = useAsyncState(getPost, [], {
  immediate: false,
  throwError: true,
  onSuccess: result => {
    // 더보기를 클릭했을때 다음 doc에 이전 doc배열을 합쳐서 페이지에 보일수 있도록 처리
    //처음에는 null이지만 이후 '더보기'를 클릭하게되면 다음 문서가 들어가있게되고 이것을 이전 꺼랑 합쳐준다
    if (start.value) {
      items.value = items.value.concat(result.items);
    } else {
      items.value = result.items;
    }
    console.log(result);
    // 더보기 버튼 동적화
    isLoadMore.value = result.items.length >= params.value.limit;
    start.value = result.lastItem;
  },
});

// 반응형으로 보여주기 위해 변경감지를 할수있는 watch를 사용한다
watch(
  params,
  () => {
    start.value = '';
    execute(0, params.value);
  },
  {
    // paras안에 값의 변견감지를 할때 사용하는 옵션
    deep: true,
    // immediate: true,
  },
);

// 게시글 작성 후  메인페이지에 머무르기
const completeRegistrationPost = () => {
  postDialog.value = false;
  start.value = null;
  execute(0, params.value);
};

// const vIntersectionObserver = {
//   //handleIntersctionObserver 바인딩 된 함수가 binding.value 콜백함수로 들어가게 된다
//   beforeMount: (el, binding) => {
//     const observer = new IntersectionObserver(binding.value);
//     observer.observe(el);
//   },
// };
// firebase api를 사용하여 더보기 기능 추가
const loadMore = () => {
  execute(0, { ...params.value, start: start.value });
};

const handleIntersctionObserver = ([{ isIntersecting }]) => {
  if (isIntersecting && isLoadMore.value) {
    console.log('### handleIntersctionObserver ###');
    loadMore();
  }
};

// 인터섹션 옵져버 활용 더보기 기능 추가 ()
</script>

<style lang="scss" scoped></style>

<!--
  - IntersectionObserver()
  우리가 지정한 특정 데이터가 보일때 안보일때 특정 동적을 도와주는 wep API

패아지를 나타내는 컴포논트 - q-page를 사용하기 위햐서는 상위에 q-layout가 정의 되어잇어야한다.
 현재에서는 layout이 먼저 페이지에 보여지기 때문에 layout default.vue에 q-layout이 있어야 한다
 -->
