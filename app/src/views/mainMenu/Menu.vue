<template>
  <div class="wrapper">
    <div class="login-screen flex justify-center">
      <div class="login-buttons">
        <button class="login-button" @click="login">Войти</button>
        <button class="register-button" @click="register">
          Зарегистрироваться
        </button>
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

export default {
  name: "Start",
  data() {
    return {
      showModal: false,
      gameMode: ''
    };
  },
  methods: {
    login() {
      // логика входа
      this.$router.push("/login");
    },
    register() {
      //  логика регистрации
      this.$router.push("/registration");
    },
    startGame(gameMode) {
      //  логика запуска игры
      this.$router.push("/game");
    },
    openOptions() {
      //  логика открытия настроек
      this.$router.push('/options')
    },

    setGameMode(mode) {
      this.gameMode = mode;
      this.startGame(this.gameMode)
    },
  },
};
</script>

<style scoped lang="scss">
.login-screen {
  position: relative;
  // display: flex;
  // justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-buttons {
  position: absolute;
  top: 20px;
  right: 20px;
}

.login-button,
.register-button {
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
.login-button:hover,
.register-button:hover {

  background-color: #fff;
  color: #242424;

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

.mode-option.active {
  background-color: #4caf50; 
  color: white; 
}


</style>
