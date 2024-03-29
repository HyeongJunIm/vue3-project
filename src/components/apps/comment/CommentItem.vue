<template>
  <q-item class="q-py-md">
    <q-item-section side top>
      <q-avatar size="md">
        <img :src="commentUser?.photoURL" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex text-caption">
        <span>{{ commentUser?.displayName }}</span>
        <span class="q-mx-xs">&middot;</span>
        <span class="text-grey-6">{{
          date.formatDate(createdAt, 'YYYY. MM. DD HH:mm:ss')
        }}</span>
      </div>
      <div class="q-mt-sm">
        {{ message }}
      </div>
    </q-item-section>
    <q-item-section side top>
      <q-btn
        v-if="hasOwnContent(uid)"
        flat
        color="grey"
        icon="sym_o_delete"
        round
        dense
        @click="$emit('delete', id)"
      />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useAsyncState } from '@vueuse/core';
import { date } from 'quasar';
import { getUserById } from 'src/services';
import { useAuthStore } from 'src/stores/auth';

const props = defineProps({
  id: {
    type: String,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  uid: {
    type: String,
  },
});

defineEmits(['delete']);

//삭제하기 아이콘 여부
const { hasOwnContent } = useAuthStore();

const { state: commentUser } = useAsyncState(() => getUserById(props.uid));
</script>

<style lang="scss" scoped></style>
