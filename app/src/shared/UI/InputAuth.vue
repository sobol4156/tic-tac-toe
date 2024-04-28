<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" :class="inputClass">
  </template>

<script>
export default {
  props: ['modelValue', 'inputClass'],
  emits: ['update:modelValue'],
}
</script>

  <style scoped lang="scss">
    .inputClass {
        margin: 5px;
        font-size: 17px;
        height: 30px;
        border-radius: 10px;
        padding-left: 10px;
        color: #484848;
    }

  </style>
