<!-- 각종 에러 핸들링 관리 컴포넌트  -->
<template>
  <div v-if="code" class="text-red text-center">
    {{ errorMessage }}
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { getErrorMessage } from 'src/utils/firebase/error-message';

const props = defineProps({
  code: {
    type: String,
  },
});
// 에어 메세지를 표현
const errorMessage = computed(() => getErrorMessage(props.code));
</script>

<style lang="scss" scoped></style>
