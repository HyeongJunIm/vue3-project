<!-- 비동기 로딩 상태를 관리하는 컴포저블 useAsyncState  -->
<!-- axios http 통신 모듕 설치  -->
<!-- promise : 비동기 작업을 처리하는데 사용되는 객체
  new 키워드를 통해 사용할수 있으며 () 안에는 콜백함수를 통해여 값을 받을수 있다
  성공시 resolve를 반환 , 거부시 reject로 값을 반환한다.
  사용시 .then(콜백함수) .catch(거부시 콜백함수 실행)

  -상태를 가지고 있음
   * 대기 (pending) : 비동기 작업을 처리하는 중
   * 이행 (fulfilled) : 비동기 작업이 정상적으로 처리가 된 경우
   * 거부 (rejected) : 비동기 처리가 정상적으로 처리가 안된경우
-->
<template>
  <q-page padding>
    <div class="text-h4">useAsyncState</div>
    <q-separator spaced />
    <p>isReady : {{ isReady }}</p>
    <p>isLoading : {{ isLoading }}</p>
    <button @click="handleButton">execute</button>
    <p>error : {{ error }}</p>
    <p>state : {{ state }}</p>
  </q-page>
</template>

<script setup>
import axios from 'axios';
import { useAsyncState } from '@vueuse/core';

// useAsyncState 로딩, 준비 , 상태(결과)를 확인할수 있다.
const { state, isLoading, error, isReady, execute } = useAsyncState(
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.data),
  { name: '임형준' },
  {
    // 옵션중 하나로 비동기 처리기 즉시 처리 여부를 결정한다
    immediate: false,
  },
);

const handleButton = () => {
  execute(1000);
};
</script>

<style lang="scss" scoped></style>
