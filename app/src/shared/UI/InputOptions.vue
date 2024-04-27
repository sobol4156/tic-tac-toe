<template>
    <input type="text" :class="inputClass">
  </template>

<script>
export default {
  props: {
    inputClass: {
      type: Number,
      default: 10
    }
  },
  methods: {
    handleClick () {
      this.$emit('change')
    }
  }
}
</script>

  <style scoped lang="scss">
    .inputClass {
      color: #333;
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
      transition: border-color 0.3s;
    }

    .inputClass:focus {
      outline: none;
      border-color: #242424;
    }
  </style>
