<template>
  <div>
    <div class="form">
      <div class="block-form">
        <div><ButtonBack @click="backToStart" :class="{customRadius: true, 'back-btn': true}">Вернуться</ButtonBack></div>
        <div class="info-blocks">
          <h1>Вход</h1>
          <div class="data-fields">
            <label for="name"><span>Логин</span></label>
            <input type="text" />
            <label for="name"><span>Пароль:</span></label>
            <input type="password" />
            <a href="#" class="forgot-password">Забыли пароль?</a>
          </div>
          <ButtonSave>Войти</ButtonSave>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBack from '@/shared/UI/ButtonBack.vue';
import ButtonSave from '@/shared/UI/ButtonSave.vue'

export default{
    name: 'Login',
    methods: {
        backToStart(){
            this.$router.push('/')
        }
    },
    components:{
      ButtonBack,
      ButtonSave
    }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .block-form {
    position: relative;
    margin: 0 20px;
    padding: 30px 0;
    width: 620px;
    height: 400px;
    border: 1px solid white;
    border-radius: 15px;
    box-shadow: 6px 5px 8px 0px rgb(0, 0, 0, 0.4);
    background-color: #4b4848;

    .info-blocks {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;

      h1{
        font-size: 40px;
      }

      
    }
    .data-fields {
      display: flex;
      flex-direction: column;
      margin: 0px;
      
      font-size: 20px;

      label {
        text-align: center;
        padding: 5px;
      }
      input {
        margin: 5px;
        font-size: 17px;
        height: 30px;
        border-radius: 10px;
        padding-left: 10px;
      }
      .forgot-password {
        text-align: center;
        margin-top: 10px;
        font-size: 16px;
        color: #ccc;
        text-decoration: none;
        cursor: pointer;
      }

      .forgot-password:hover {
        color: #fff;
      }
    }
  }
}

</style>
