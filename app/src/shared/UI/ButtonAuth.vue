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
.btn-auth
 {
  font-weight: 700;
  padding: 8px 12px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #242424;
  color: #fff;
  cursor: pointer;
  transition: all ease 0.3s;
}

.btn-auth:hover {

  background-color: #fff;
  color: #242424;

}
  </style>
