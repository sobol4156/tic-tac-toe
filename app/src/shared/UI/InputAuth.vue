<template>
    <input type="text" :class="inputClass">
  </template>
  
  <script>
  export default {
    props: {
      inputClass: {
        type: String,
        default: '',
      },
    },methods: {
      handleClick() {
        this.$emit("change");
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
    .inputClass {
        
        margin: 5px;
        font-size: 17px;
        height: 30px;
        border-radius: 10px;
        padding-left: 10px;
      
    }
  

  </style>
  