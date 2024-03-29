<template>
  <aside class="sicky-side-var">
    <slot></slot>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.sicky-side-var {
  position: sticky;
  top: 66px;
  z-index: 2;
  overflow-y: scroll;
  height: fit-content !important;
}
</style>
