<template>
  <button @click="handleClick" :class="btnClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
button {
  margin: 20px;
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #242424;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  transition: all ease 0.3s;
}

button:hover {
  color: #242424;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
