<template>
  <div class="tiptap">
    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
//tipiap의 링크 extention
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
//이미지 extention 설치

//양방향 모댈랑을 통해
const props = defineProps({
  content: {
    type: String,
    defalut: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const editor = useEditor({
  content: props.content,
  // 옵션을 지정할수 있다.
  extensions: [StarterKit, Link, Image],

  editable: false,
});
</script>

<style lang="scss" src="src/css/tiptap.scss"></style>
