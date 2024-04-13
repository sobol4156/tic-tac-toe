<template>
  <div>
    <div class="form">
      <div class="block-form">
        <div><button @click="backToStart" class="back-btn">Вернуться</button></div>
        <div class="info-blocks">
          <h1>Вход</h1>
          <div class="data-fields">
            <label for="name"><span>Логин</span></label>
            <input type="text" />
            <label for="name"><span>Пароль:</span></label>
            <input type="password" />

          </div>
          <button>Войти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    name: 'Login',
    methods: {
        backToStart(){
            this.$router.push('/')
        }
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
    margin: 0 20px;
    width: 620px;
    height: 40vh;
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

      button {
        margin: 30px;
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background-color: #4caf50;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        outline: none;
        position: relative;
        overflow: hidden;
        transition: background-color 0.3s, box-shadow 0.3s;
      }
      button::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        transition: width 0.5s, height 0.5s, background-color 0.5s;
        transform: translate(-50%, -50%);
        z-index: 0;
      }
      button:hover::before {
        width: 0;
        height: 0;
      }
      button:hover {
        background-color: #45a049;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
    }
  }
}
.back-btn {
  position: absolute;
  
  
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #be6f01;
  border: none;
  border-radius: 15px 5px 5px 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.back-btn:hover {
  background-color: #ff6a2f;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
