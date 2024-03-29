import { readonly, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'src/stores/auth';
import { addBookmark, removeBookmark, hasBookmark } from 'src/services';

export const useBookmark = (id, options) => {
  console.log(options);
  const { initialCount } = options || {};
  const { uid, isAuthenticated } = storeToRefs(useAuthStore());

  // 좋아요 체크 여부 반응형 등록
  const isBookmark = ref(false);
  const bookmarkCount = ref(initialCount);

  // 사용할 곳의 아이를 받아온다
  const postId = ref(id);

  // user가 좋아요를 했는지 여부 확인
  const initBookmark = async () => {
    // 로그인이 여부를 표현하여 체크 여부를 조회한다
    if (isAuthenticated.value === false) {
      isBookmark.value = false;
      return;
    }
    isBookmark.value = await hasBookmark(uid.value, postId.value);
    //hasBookmark(uid.value, postId.value); boolean 타입으로 리턴하여 값을 넣어준다
  };

  const toggleBookmark = async () => {
    if (isAuthenticated.value === false) {
      alert('로그인 후 이용 가능합니다.');
      return;
    }
    if (isBookmark.value) {
      await removeBookmark(uid.value, postId.value);
      bookmarkCount.value--;
    } else {
      await addBookmark(uid.value, postId.value);
      bookmarkCount.value++;
    }
    isBookmark.value = !isBookmark.value;
  };

  // 로그인 경우에만 자신이 체크한 좋아요가 표시될수 있게 함, 그외 리스트는 보여줘야 하므로 immedicate를 true로 설정한다
  watch(isAuthenticated, () => initBookmark(), {
    immediate: true,
  });

  return {
    isBookmark,
    bookmarkCount: readonly(bookmarkCount),
    updateBookmarkCount: count => (bookmarkCount.value = count),
    toggleBookmark,
  };
};
