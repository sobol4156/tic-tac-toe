<template>
  <div class="form">
    <div class="block-form">
      <div><ButtonBack @click="backToStart" :class="{customRadius: true, 'back-btn': true}">Вернуться</ButtonBack></div>
      <div class="info-blocks">
        <h1>Регистрация</h1>
        <div class="data-fields">
          <label for="name"><span>Как вас зовут?</span></label>
          <input type="text" />
          <label for="name"><span>Адрес электронной почты</span></label>
          <input type="text" />
          <label for="name"><span>Пароль:</span></label>
          <input type="password" />
          <label for="name"><span>Подтвердить пароль:</span></label>
          <input type="password" />
        </div>
        <ButtonSave class="btn">Зарегистрироваться</ButtonSave>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBack from '@/shared/UI/ButtonBack.vue';
import ButtonSave from '@/shared/UI/ButtonSave.vue'

export default {
  name: "Registration",
  methods: {
    backToStart() {
      this.$router.push("/");
    },
  },
  components:{
    ButtonBack,
    ButtonSave
  }
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .block-form {
    position: relative;
    padding: 30px 0;
    margin: 0 20px;
    width: 640px;
    height: 640px;
    border: 1px solid white;
    border-radius: 15px;
    box-shadow: 6px 5px 8px 0px rgb(0, 0, 0, 0.4);
    background-color: #4b4848;

    .info-blocks {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;

      h1 {
        font-size: 40px;
      }

    }
    .data-fields {
      display: flex;
      flex-direction: column;
      margin: 15px;
      height: 380px;
      font-size: 20px;

      label {
        text-align: center;
        padding: 10px;
      }
      input {
        margin: 5px;
        font-size: 17px;
        height: 30px;
        border-radius: 10px;
        padding-left: 10px;
      }
    }
  }
}


</style>
