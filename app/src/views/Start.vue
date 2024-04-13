<template>
    <div class="wrapper">
      <!-- окно настроек -->
      <div id="myModal" class="modal" v-show="showModal">
        <div class="modal-content">
          <span class="close" @click="closeOptions">&times;</span>
          <div class="options">
            <div class="selectionGame">
              <div><p>Свободная игра</p></div>
              <div>
                <p>Компьютер</p>
              </div>
              <div>
                <p>Онлайн режим</p>
              </div>
            </div>
            <div class="marks">
              <div><img src="@/assets/whitePaper.svg" alt="paper" /><img class="red-mark" src="@/assets/redCheckMark.svg" alt="redMark"></div>
              <div><img src="@/assets/whitePaper.svg" alt="paper" /></div>
              <div><img src="@/assets/whitePaper.svg" alt="paper" /></div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Иконка настроек -->
      <div class="gear">
        <img @click="openOptions" src="@/assets/gear.svg" alt="gear" />
      </div>
  
      <div class="login-screen">
        <div class="login-buttons">
          <button class="login-button" @click="login">Войти</button>
          <button class="register-button" @click="register">
            Зарегистрироваться
          </button>
        </div>
        <div class="start-button">
          <button class="start-game" @click="startGame">Start</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Start',
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      login() {
        // логика входа
        this.$router.push('/login')
      },
      register() {
        //  логика регистрации
        this.$router.push('/registration')
      },
      startGame() {
        //  логика запуска игры
        this.$router.push('/game')
      },
      openOptions() {
        //  логика открытия настроек
        this.showModal = true;
      },
      closeOptions() {
        // логика закрытия настроек
        this.showModal = false;
      },
    },
    
  };
  </script>
  
  <style scoped lang="scss">
  
  .login-screen {
    position: relative;
    display: flex;
    justify-content: center;
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
    padding: 8px 12px;
    margin-left: 10px;
    border: none;
    border-radius: 4px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }
  
  .start-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .start-game {
    background-image: linear-gradient(
      to right,
      #ff512f 0%,
      #f09819 51%,
      #ff512f 100%
    );
    margin: 10px;
    padding: 15px 45px;
    font-size: 64px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 20px;
    display: block;
    cursor: pointer;
  }
  
  .start-game:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
  /* /кнопка настроек */
  .gear {
    position: absolute;
    margin: 30px;
    z-index: 10;
    transition: transform 0.3s ease;
  
    img {
      cursor: pointer;
    }
  }
  .gear:hover {
    transform: scale(1.05);
  }
  
  /* модальное окно */
  
  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0); /* Цвет фона */
    background-color: rgba(0, 0, 0, 0.4); /* Цвет фона с прозрачностью */
  }
  
  .modal-content {
    background-color: #4b4848;
    margin: 10% auto;
    padding: 0 25px;
    height: 50vh;
    border: 1px solid #888;
    border-radius: 8px;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation: animatezoom ease-out 0.5s;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 34px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: rgb(48, 48, 48);
    text-decoration: none;
    cursor: pointer;
  }
  /* Анимация для открытия модального окна */
  @keyframes animatezoom {
    from {
      transform: translate(-56%, -56%) scale(0);
    }
    to {
      transform: translate(0, 0) scale(1);
    }
  }
  /* Внутрянка настроек*/
  .options {
    display: flex;
    img {
      margin: 15px;
      display: flex;
      flex-direction: column;
    }
  }
  .selectionGame {
    padding: 20px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  
    div {
      display: flex;
    }
  
    p {
      margin: 10px;
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    p:hover {
      transform: scale(1.1);
    }
  }
  .marks {
    position: relative;
    div{
      position: relative;
    }
    .red-mark{
      position: absolute;
      z-index: 1;
      top: -10px;
      left: 0;
  
      width: 70%; 
      height: 90%;
    }
  }
  </style>
  