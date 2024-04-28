<template>
  <div>
    <div class="form flex justify-center items-center h-screen">
      <div class="block-form">
        <div>
          <ButtonBack
            @click="backToStart"
            :class="{ customRadius: true, 'back-btn': true }"
            >Вернуться</ButtonBack
          >
        </div>
        <div class="info-blocks flex flex-col items-center p-2.5">
          <h1 class="text-4xl">Вход</h1>
          <div class="data-fields flex flex-col m-0 text-xl ">
            <label for="name"><span>Логин</span></label>
            <InputAuth v-model="login" :class="{ inputClass: true }" type="text" />
            <label for="name"><span>Пароль:</span></label>
            <InputAuth v-model="password" :class="{ inputClass: true }" type="password" />
            <a href="#" class="forgot-password text-center my-2.5 text-base text-[#ccc] no-underline cursor-pointer transition-all hover:text-white">Забыли пароль?</a>
          </div>
          <ButtonSave @click="loginButton">Войти</ButtonSave>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ButtonBack from '@/shared/UI/ButtonBack.vue'
import ButtonSave from '@/shared/UI/ButtonSave.vue'
import InputAuth from '@/shared/UI/InputAuth.vue'

export default {
  name: 'LoginInProfile',
  data(){
    return{
      login: '',
      password: ''
    }
  },
  methods: {
    backToStart () {
      this.$router.push('/')
    },
    async loginButton() {
      try {
  
        const response = await axios.post(
          "http://127.0.0.1:8000/api/login",
          {
            email: this.login,
            password: this.password,
          }
        );
        
        if(response.status === 200){
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('userName', response.data.name)
          this.backToStart()
      }
      } catch (error) {
        console.log(error);
      }

    },
  },
  components: {
    ButtonBack,
    ButtonSave,
    InputAuth
  }
}
</script>

<style lang="scss" scoped>
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

  label {
    text-align: center;
    padding: 5px;
  }
}
</style>
