import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// 파라미터는 url과 연동 => url과 연동시 새로고침이나 공유할시 좀더 정확하게 해당 페이지를 유지할수 있다
export const usePostQuery = () => {
  const route = useRoute();
  const router = useRouter();
  const category = computed({
    get: () => route.query.category || '',
    set: val =>
      router.push({
        query: {
          ...route.query,
          category: val || undefined,
        },
      }),
  });

  const sort = computed({
    get: () => route.query.sort || 'createdAt',
    set: val =>
      router.push({
        query: {
          ...route.query,
          sort: val,
        },
      }),
  });

  const tags = computed({
    get: () => route.query.tags?.split(',') || [],
    set: val =>
      router.push({
        query: {
          ...route.query,
          tags: val.length === 0 ? undefined : val.join(','),
        },
      }),
  });

  return {
    category,
    sort,
    tags,
  };
};
