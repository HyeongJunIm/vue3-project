// 섹션 6 복합쿼리, 정렬구현 한번 다시보기


export const useTag = options => {
  const { tags, updateTags, maxLengthMessage } = options || {};

  const addTag = newTag => {
    const isEventHandler = typeof newTag !== 'string';
    const tagValue = isEventHandler
      ? newTag.target.value.replace(/ /g, '')
      : newTag.replace(/ /g, '');

    if (!tagValue) {
      return;
    }

    if (tags.value.length >= 10) {
      $q.notify(maxLengthMessage);
    }
    // 기존에 작성한 태그는 중복적으로 등록하지 못하게 막는다
    if (tags.value.includes(tagValue) === false) {
      // emit('update:tags', [...props.tags, tagValue]);
      updateTags([...tags.value, tagValue]);
    }

    if (isEventHandler) {
      newTag.target.value = '';
    }
  };

  const removeTag = index => {
    // 제거를 하기위헤 배열에 들어있는 값을 가져온다
    const model = [...tags.value];
    model.splice(index, 1);
    updateTags(model);
  };

  return {
    addTag,
    removeTag,
  };
};
