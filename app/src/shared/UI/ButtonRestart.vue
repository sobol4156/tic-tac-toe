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
    transition: all ease 0.3s;
  }
  .gameButtonBack:hover {
    color: #242424;
    background-color: #fff;
  }
  </style>
  