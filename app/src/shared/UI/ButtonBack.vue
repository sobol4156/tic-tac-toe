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
      default: "",
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped lang="scss">
.back-btn {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #242424;
  border: none;
  border-radius: 8px 5px 5px 5px;
  cursor: pointer;
  outline: none;
  transition: all ease 0.3s;
}

.back-btn:hover {
  color: #242424;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.customRadius {
  border-radius: 14px 5px 5px 5px;
}

.gameButtonBack {
  padding: 10px 20px;
  color: #fff;
  background-color: #242424;
  border: none;

  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
.gameButtonBack:hover {
}
</style>
