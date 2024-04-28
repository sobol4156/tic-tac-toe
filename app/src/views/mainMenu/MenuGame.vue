<template>
  <div class="wrapper">
    <div class="login-screen flex justify-center relative items-center h-screen">
      <div v-if="!tokenLogin" class="login-buttons absolute">
        <ButtonAuth :class="{'btn-auth': true}" @click="login">Войти</ButtonAuth>
        <ButtonAuth :class="{'btn-auth': true}" @click="register">
          Зарегистрироваться
        </ButtonAuth>
      </div>
      <div v-else class="login-buttons absolute flex items-center gap-5">
        <div >
          <img src="../../shared/assets/img/user.png"  class="cursor-pointer" alt="Profile">
          <span class="absolute right-15 text-start opacity-40 cursor-default">Добро пожаловать {{ nameUser }}</span>
        </div>
        <ButtonAuth :class="{'btn-auth': true}" @click="exit">Выйти</ButtonAuth>

      </div>
      <div class="game-mode">
        <div
          class="mode-option"

          @click="setGameMode('single')"
        >
          Одиночный режим
        </div>
        <div
          class="mode-option"
          :class="!tokenLogin? 'mode-blocked': ''"
          @click="tokenLogin && setGameMode('multiplayer')"
        >
          Мультиплеер
        </div>
        <div
          class="mode-option"

          @click="setGameMode('free')"
        >
          Свободная игра
        </div>
        <div class="options-button mode-option" @click="openOptions">Настройки</div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAuth from '@/shared/UI/ButtonAuth.vue'
export default {
  name: 'MenuGame',
  data () {
    return {
      showModal: false,
      gameMode: '',
      tokenLogin: '',
      nameUser: ''
    }
  },
  components: {
    ButtonAuth
  },
  methods: {
    login () {
      // логика входа
      this.$router.push('/login')
    },
    register () {
      
      this.$router.push('/registration')
    },
    //  логика выхода из профиля
    exit(){
      localStorage.removeItem('token')
      localStorage.removeItem('userName')
      this.tokenLogin = ''
      this.nameUser= ''
    },
    startGame (gameMode) {
      //  логика запуска игры
      this.$router.push('/game')
    },
    openOptions () {
      //  логика открытия настроек
      this.$router.push('/options')
    },

    setGameMode (mode) {
      this.gameMode = mode
      this.startGame(this.gameMode)
    }
  },
  mounted(){
    if(localStorage.getItem('token')){
      this.tokenLogin = localStorage.getItem('token')
      this.nameUser = localStorage.getItem('userName')
    }
  }
}
</script>

<style scoped lang="scss">

.login-buttons {
  top: 20px;
  right: 20px;
}
// Кнопки меню
.mode-option {
  text-align: center;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 24px;
  color: #b4b0b0;
}

.mode-option:hover {
  background-color: #ddd;
  color: #242424;
}
// если не вошёл в систему
.mode-blocked{
  cursor: default;
  opacity: 0.5;
  
}
.mode-blocked:hover{
  background-color: #242424;
  color: #ddd;
}
</style>
