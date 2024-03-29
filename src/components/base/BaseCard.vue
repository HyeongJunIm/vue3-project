<!--
  자주 쓰이는 태그를 컴포넌트로 처리하여 그때마다 바인딩하여 사용
  v-bind="$atter"를 통하여 부모 컴포넌트에서 사용시 값을 가지고 와서 사용 
-->
<template>
  <q-card :flat="flat" :bordered="bordered" v-bind="$atter">
    <template v-for="(_, name) in $slots" :key="name">
      <slot :name="name"></slot>
    </template>
  </q-card>
</template>

<script setup>
defineProps({
  flat: {
    type: Boolean,
    default: true,
  },

  bordered: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped></style>
