<!-- tiptap 에디터




-->

<template>
  <q-card class="tiptap" flat bordered
    ><TiptapEditorMenu :editor="editor" />

    <q-separator />
    <editor-content class="editor__content" :editor="editor" />
  </q-card>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { watch } from 'vue';
import Placeholder from '@tiptap/extension-placeholder';
import TiptapEditorMenu from 'src/components/tiptap/TiptabEditorMenu.vue';
//tipiap의 링크 extention
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
//이미지 extention 설치

//양방향 모댈랑을 통해
const props = defineProps({
  modelValue: {
    type: String,
    defalut: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const editor = useEditor({
  content: props.modelValue,
  // 옵션을 지정할수 있다.
  extensions: [
    StarterKit,
    Placeholder.configure({
      placeholder: '마크다운을 이용해서 편리하게 글을 작성하세요.',
    }),
    Link,
    Image,
  ],
  onUpdate: () => {
    emit('update:modelValue', editor.value.getHTML());
  },
});

// 변경된 값을 보여주기위한 메소드
watch(
  () => props.modelValue,
  value => {
    const isSame = editor.value.getHTML() === value;

    if (isSame) {
      return;
    }
    editor.value.commands.setContent(value, false);
  },
);
</script>

<style lang="scss" src="src/css/tiptap.scss"></style>
<style lang="scss">
.tiptap p.is-editor-empty:first-child::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>

<style lang="scss" scoped>
.editor__content {
  flex: 1;
  display: flex;
  overflow-y: auto;
  padding: 16px 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 400px;
}
</style>
