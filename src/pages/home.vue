<template>
  <q-page padding>
    <!--패아지를 나타내는 컴포논트 - q-page를 사용하기 위햐서는 상위에 q-layout가 정의 되어잇어야한다.
 현재에서는 layout이 먼저 페이지에 보여지기 때문에 layout default.vue에 q-layout이 있어야 한다
 -->
    <div class="text-h4">Home</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <q-card v-for="id in 100" :key="id">
        <q-card-section>{{ id }}번 게시글 </q-card-section>
      </q-card>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: home-page
meta:
  requiresAAuth: true
  width: 600px
</route>
