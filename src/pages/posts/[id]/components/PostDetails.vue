<template>
  <BaseCard class="q-pa-lg">
    <div class="flex q-mb-md">
      <q-btn
        icon="sym_o_arrow_back"
        flat
        round
        dense
        color="grey"
        size="16px"
        @click="$router.back()"
      />
      <q-space />
      <q-btn
        :icon="isLike ? 'favorite' : 'sym_o_favorite'"
        flat
        round
        dense
        color="red"
        size="16px"
        @click="toggleLike"
      />
      <q-btn
        :icon="isBookmark ? 'bookmark' : 'sym_o_bookmark'"
        flat
        round
        dense
        color="blue"
        size="16px"
        @click="toggleBookmark"
      />
    </div>

    <div class="flex items-center">
      <q-avatar>
        <img :src="postUser?.photoURL" />
      </q-avatar>
      <div class="q-ml-md">
        <div>{{ postUser?.displayName }}</div>
        <div class="text-grey-6">
          {{ date.formatDate(post.createdAt, 'YYYY. MM. DD HH:mm:ss') }}
        </div>
      </div>
      <q-space />
      <q-btn icon="more_horiz" round flat v-if="hasOwnContent(post.uid)">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item
              clickable
              v-close-popup
              :to="`/posts/${$route.params.id}/edit`"
            >
              <q-item-section>수정하기</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="handleDeletePost">
              <q-item-section>삭제하기</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>

    <div class="q-mt-md text-h5 text-weight-bold">{{ post.title }}</div>
    <div class="text-teal">
      <span v-for="tag in post.tags" :key="tag">#{{ tag }}&nbsp;</span>
      {{ post.category }}
    </div>
    <div class="row item-center q-gutter-x-md q-mt-md justify-end">
      <PostIcon name="sym_o_visibility" :label="post.readCount" />
      <PostIcon name="sym_o_sms" :label="post.commentCount" />
      <PostIcon name="sym_o_favorite" :label="likeCount" />
      <PostIcon name="sym_o_bookmark" :label="bookmarkCount" />
    </div>
    <q-separator class="q-my-lg" />
    <TiptapViewr v-if="post.content" :content="post.content" />
  </BaseCard>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { date } from 'quasar';
import { getPostDetails, deletePost } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import { useLike } from 'src/composables/useLike';

import TiptapViewr from 'src/components/tiptap/TiptapViewer.vue';
import PostIcon from 'src/components/apps/post/PostIcon.vue';
import BaseCard from 'src/components/base/BaseCard.vue';
import { useBookmark } from 'src/composables/useBookMark';

// 상세보기 데이터 조회
const router = useRouter();
const route = useRoute();
const $q = useQuasar();
const { hasOwnContent } = useAuthStore();
const post = ref({});
const postUser = ref({});
const { error } = useAsyncState(
  () => getPostDetails(route.params.id),
  {},
  {
    onSuccess: result => {
      post.value = result.post;
      postUser.value = result.postUser;
      updateLikeCount(result.post.likeCount);
      updateBookmarkCount(result.post.bookmarkCount);
    },
  },
);

const { execute: executeDeletePost } = useAsyncState(deletePost, null, {
  immediate: false,
  onSuccess: () => {
    $q.notify('삭제완료');
    router.push('/');
  },
});

const handleDeletePost = async () => {
  if (confirm('삭제 하시겠습니끼?') === false) {
    return;
  }

  await executeDeletePost(0, route.params.id);
};

const { isLike, likeCount, toggleLike, updateLikeCount } = useLike(
  route.params.id,
);

const { isBookmark, bookmarkCount, toggleBookmark, updateBookmarkCount } =
  useBookmark(route.params.id);
</script>

<style lang="scss" scoped></style>
