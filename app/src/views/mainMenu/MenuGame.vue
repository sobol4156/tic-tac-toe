<template>
  <div class="wrapper">
    <div class="login-screen flex justify-center relative items-center h-screen">
      <div class="login-buttons absolute">
        <ButtonAuth :class="{'btn-auth': true}" @click="login">Войти</ButtonAuth>
        <ButtonAuth :class="{'btn-auth': true}" @click="register">
          Зарегистрироваться
        </ButtonAuth>
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

          @click="setGameMode('multiplayer')"
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
      gameMode: ''
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
      //  логика регистрации
      this.$router.push('/registration')
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

</style>
