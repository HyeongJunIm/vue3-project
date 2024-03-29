import { storeToRefs } from 'pinia';
import { boot } from 'quasar/wrappers';
import { useAuthStore } from 'src/stores/auth';
// vueRouter 가드를 활용하여 로그인 처리
//to는 우리가 이동하기 위한 router 정보가 담겨있다
// 이런 정보는 가장 큰 컴포넌트에 설정을 해줘야 한다
function requiresAuth(to) {
  //로그인 여부 확인
  const { isAuthenticated } = storeToRefs(useAuthStore());
  //to에 들어있는 정보 값을 확인한다
  // matched 우리가 이동하여는 url의 정보를 배열로 모두 담고있다
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    !isAuthenticated.value
  ) {
    alert('로그인이 필요한 페이지입니다.');
    return '/';
  }
  return true;
  3;
}

export default boot(async ({ app, router }) => {
  router.beforeEach(requiresAuth);
});
