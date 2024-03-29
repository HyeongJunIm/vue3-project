<!--
  defineModel : 반복적으로 사용되는 v-model를 단순화 해준다
  const modelValue = defineModel()


  <q-select
        v-model="categoryModel"
        class="q-pt-md"
        outlined
        :options="categories"
        emit-value : obj로 받아오는 값에서 value 값만 저장 하기 위해서 사용
        map-options :obj로 받아오는 값에서 value 값만 저장 하기 위해서 사용
      >
-->

<template>
  <q-form @submit.prevent="handleSubmit">
    <q-card-section class="q-gutter-y-sm">
      <q-input
        v-model="titleModel"
        outlined
        placeholder="제목"
        hide-bottom-space
        :rules="[validateRequird]"
        counter
        maxlength="40"
      />
      <q-select
        v-model="categoryModel"
        class="q-pt-md"
        outlined
        :options="categories"
        emit-value
        map-options
        hide-bottom-space
        :rules="[validateRequird]"
      >
        <template v-if="!categoryModel" #selected>
          <span class="text-grey-6">카테고리를 선택하세요.</span>
        </template>
      </q-select>

      <TiptapEditor v-model="contentModel" />
      <q-input
        outlined
        placeholder="태그를 입력해주세요( 입력 후 Enter)"
        prefix="#"
        @keypress.enter.prevent="addTag"
      />

      <q-chip
        v-for="(tag, index) in tags"
        :key="tag"
        color="teal"
        outline
        dense
        removable
        @remove="removeTag(index)"
      >
        {{ tag }}
      </q-chip>
    </q-card-section>
    <q-separator />
    <q-card-actions align="right">
      <slot name="action">
        <!-- slot을 사용하면 내가 원하는 곳에서 저장되어 있는 양식이 아닌 다른 방법으로 변경할수 있다 -->
        <q-btn flat label="취소하기" v-close-popup />
        <q-btn
          flat
          label="저장하기"
          color="primary"
          type="submit"
          :loading="loading"
        />
      </slot>
    </q-card-actions>
  </q-form>
</template>

<script setup>
import { computed, ref, toRef } from 'vue';
import { useQuasar } from 'quasar';
import { getCategories } from 'src/services/category';
import TiptapEditor from 'src/components/tiptap/TiptapEditor.vue';
import { validateRequird } from 'src/utils/validate-rules';
import { useTag } from 'src/composables/useTag';

const props = defineProps({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  content: {
    type: String,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const $q = useQuasar();

// 다중으로 데이터를 수정할때는 emit 설정 시 update를 반드시 작성한다.
const emit = defineEmits([
  'update:title',
  'update:category',
  'update:content',
  'update:tags',
  'submit',
]);

// 반응형 데이터 속성 함수 , 상위 컴포넌트에서 받어온 값을 넣어주고 수정된 값을 set으로 넣어준다, 이때 compute를 사용한다,
//computed는 변경된 값에대해서 자동으로 갱신되어 반응형 데이터를 생성할수 있도록 해준다
const titleModel = computed({
  get: () => props.title,
  set: val => emit('update:title', val),
});

const categoryModel = computed({
  get: () => props.category,
  set: val => emit('update:category', val),
});

const contentModel = computed({
  get: () => props.content,
  set: val => emit('update:content', val),
});

// 컴포져블 함수 정리 방법

const { addTag, removeTag } = useTag({
  tags: toRef(props, 'tags'),
  updateTags: tags => emit('update:tags', tags),
  maxLengthMessage: '태그는 10개 이상 만들수 없습니다.',
});

const categories = getCategories();

const handleSubmit = () => {
  if (!contentModel.value) {
    $q.notify('내용을 작성하세요~');
    return;
  }
  emit('submit');
};
</script>

<style lang="scss" scoped></style>
