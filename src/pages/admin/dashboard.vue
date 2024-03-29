<template>
  <div>
    <div class="text-h4">Admin/DashBoard</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
<!--
todo : 나중에 확인해보기 
<route lang="yaml">
 meta:
   layout: admin
 </route>
 -->
<!--
문제점 
  현재 layout으로 연결되어있을때는 default로만 이어진다. 
  이 문제는 layout은 / 케이스 일때만 작동한다 이말은 페이지에 이동시 localhost:9000/#/ 에서 들어가는것이 아닌 
  localhost:9000/#/admin/ 으로 이동하기 떄문에 작동하지 않는다.

-->
