<!--
v-bind="$attrs" : v-bind="$attrs"는 Vue.js에서 사용되는 특별한 구문으로, 부모 컴포넌트에서 자식 컴포넌트로 속성을 전달할 때 사용됩니다. 이것은 주로 재사용 가능한 컴포넌트에서 자주 사용됩니다.

Vue.js 컴포넌트는 기본적으로 부모에서 자식으로 데이터를 전달할 수 있습니다. 그러나 컴포넌트가 많은 속성을 갖고 있고, 부모 컴포넌트에서 자식 컴포넌트로 이러한 속성들을 일일이 전달하는 것이 번거로울 때, $attrs 속성을 사용할 수 있습니다.

$attrs 속성은 현재 컴포넌트 인스턴스의 모든 속성을 나타내는 객체입니다. 이 객체를 v-bind를 사용하여 다른 컴포넌트에 바인딩하면, 현재 컴포넌트에 정의된 모든 속성이 자동으로 전달됩니다.



-->
<template>
  <div>
    <q-icon :name="name" color="grey" size="xs" v-bind="$attrs" />
    <span class="text-grey q-ml-xs text-body2">{{ label }}</span>
    <q-tooltip v-if="tooltip" :offset="[0, 4]"> {{ tooltip }} </q-tooltip>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },

  label: {
    type: [String, Number],
  },

  tooltip: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
