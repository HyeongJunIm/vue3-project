<template>
  <div>
    <div class="text-subtitle1 text-weigth-bold q-mb-lg">댓글 6</div>
    <div v-if="isActive">
      <q-form @submit.prevent="handleAddComment">
        <q-input
          v-model="message"
          type="textarea"
          outlined
          hide-bottom-space
          :rules="[validateRequird]"
        ></q-input>
        <div class="flex justify-end q-gutter-x-sm q-mt-sm">
          <q-btn label="취소" color="dark" unelevated @click="toggleActive" />
          <q-btn
            label="등록"
            color="primary"
            unelevated
            type="submit"
            :loading="isLoading"
          />
        </div>
      </q-form>
    </div>

    <BaseCard v-if="!isActive" @click="toggleActive" class="cursor-pointer">
      <q-card-section class="flex items-center">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="q-ml-md text-grey-6">댓글을 작성해보세요.</div>
      </q-card-section>
    </BaseCard>
    <CommentList
      :post-id="$route.params.id"
      :items="comments"
      @deleted="deletedComment"
    />
  </div>
</template>

<script setup>
//엑티브 설정
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useAsyncState } from '@vueuse/core';
import { useRoute } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import { getComment, addComment } from 'src/services';
import CommentList from 'src/components/apps/comment/CommentList.vue';
import BaseCard from 'src/components/base/BaseCard.vue';
import { validateRequird } from 'src/utils/validate-rules';
const isActive = ref(false);

const toggleActive = () => {
  if (!authStore.isAuthenticated && !isActive.value) {
    alert('로그인이 필요합니다!');
    return;
  }
  isActive.value = !isActive.value;
};

const route = useRoute();
const authStore = useAuthStore();
//댓글 목록
const { state: comments, execute: executeGetComment } = useAsyncState(
  () => getComment(route.params.id),
  [],
  {
    // true시 빈배열로 초기화 이후 다시 조회하기떄문에 페이지상으로 깜빡거림이 생긴다
    resetOnExecute: false,
  },
);
//댓글 추가
const message = ref('');
const { isLoading, execute: executeAddComment } = useAsyncState(
  addComment,
  null,
  {
    immediate: false,
    throwError: true,
    onSuccess: () => {
      message.value = '';
      isActive.value = false;
      //댓글 등록을 한 후 다시 조회해서 목록에 뿌려주기위함
      executeGetComment(0);
    },
  },
);

const handleAddComment = () => {
  executeAddComment(0, route.params.id, {
    message: message.value,
    uid: authStore.uid,
  });
};

//삭제 후 데이터 다시 조회
const deletedComment = () => executeGetComment(0);
</script>

<style lang="scss" scoped></style>
