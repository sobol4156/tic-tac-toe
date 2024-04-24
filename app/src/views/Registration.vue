<template>
  <div class="form">
    <div class="block-form">
      <div><button @click="backToStart" class="back-btn">Вернуться</button></div>
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
        <button class="btn">Зарегистрироваться</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  methods: {
    backToStart() {
      this.$router.push("/");
    },
  },
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
    width: 680px;
    height: 65vh;
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

      .btn {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background-color: #242424;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        outline: none;
        position: relative;
        overflow: hidden;
        transition: all ease 0.3s;
      }


      .btn:hover {
        color: #242424;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
    }
    .data-fields {
      display: flex;
      flex-direction: column;
      margin: 15px;
      height: 42vh;
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

.back-btn {
  position: absolute;
  top: 0;
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #242424;
  border: none;
  border-radius: 15px 5px 5px 5px;
  cursor: pointer;
  outline: none;
  transition: all ease 0.3s;
}

.back-btn:hover {
  color: #242424;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
