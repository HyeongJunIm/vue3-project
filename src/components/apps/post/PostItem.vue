<!--
@click.prevent 이벤트 버블링을 맞아준다
&nbsp 띄어쓰기
sym_o q-icon에서 해당 내용을 작성후 보여죽위한 icon을 작성하면 icon을 활용할수 있다
q-tooltip :offset="[0, 4]"> 조회수 </q-tooltip>스니펫 튤팀 컴포넌트로  오프셋을 사용할수 있다

ellipsis-2-lines => 글 ...으로 표시 스타일
-->

<template>
  <q-item class="bg-white q-pt-md" clickable :to="`/posts/${item.id}`">
    <q-item-section avatar top>
      <q-avatar>
        <img :src="postUser?.photoURL" alt="" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex items-center">
        <span>{{ postUser?.displayName }}</span>
        <span class="q-mx-xs">&middot;</span>
        <span>{{ formatRelativeTime(item.createdAt) }}</span>
        <q-chip class="q-ml-md" dense color="primary" text-color="white">
          {{ item.category }}
        </q-chip>
      </div>
      <div class="text-h6 q-mt-sm">{{ item.title }}</div>
      <div class="text-primary text-caption">
        <span v-for="tag in item.tags" :key="tag" class="q-mr-sm"
          >#{{ tag }}</span
        >
      </div>
      <div
        class="text-grey-6 q-my-sm ellipsis-2-lines"
        v-html="item.content"
      ></div>
      <div class="row items-center">
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon
              name="sym_o_visibility"
              :label="item.readCount"
              tooltip="조회수"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon
              name="sym_o_sms"
              :label="item.commentCount"
              tooltip="댓글수"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn class="full-width" flat dense @click.prevent="toggleLike">
              <PostIcon
                :name="isLike ? 'favorite' : 'sym_o_favorite'"
                :label="likeCount"
                tooltip="좋아요"
              />
            </q-btn>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn
              class="full-width"
              flat
              dense
              @click.prevent="toggleBookmark"
            >
              <PostIcon
                :name="isBookmark ? 'bookmark' : 'sym_o_bookmark'"
                :label="bookmarkCount"
                tooltip="북마크"
              />
            </q-btn>
          </div>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { formatRelativeTime } from 'src/utils/relative-time-format';
import { useLike } from 'src/composables/useLike';
import { useBookmark } from 'src/composables/useBookMark';
import { useAuthStore } from 'src/stores/auth';
import { storeToRefs } from 'pinia';
import { ref, toRef, toRefs, watch } from 'vue';
import { useAsyncState } from '@vueuse/core';
import { getUserById } from 'src/services';

import PostIcon from './PostIcon.vue';
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

// 사용자 uid를 가져오기
const { uid, isAuthenticated } = storeToRefs(useAuthStore());

const { isLike, likeCount, toggleLike } = useLike(props.item.id, {
  // options로 넘겨줄 파라미터를 여러개 지정할때 사용한다
  initialCount: props.item.likeCount,
});

const { isBookmark, bookmarkCount, toggleBookmark } = useBookmark(
  props.item.id,
  {
    initialCount: props.item.bookmarkCount,
  },
);

const { state: postUser } = useAsyncState(
  () => getUserById(props.item.uid),
  {},
);
</script>

<style lang="scss" scoped></style>
