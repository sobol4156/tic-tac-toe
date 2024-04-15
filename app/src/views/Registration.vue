<template>
  <div class="form">
    <div class="block-form">
      <div>
        <button @click="backToStart" class="back-btn">Вернуться</button>
      </div>
      <div class="info-blocks">
        <h1>Регистрация</h1>
        <form>
          <div class="data-fields">
            <label for="name"><span>Как вас зовут?</span></label>
            <input type="text" name="name" />
            <label for="email"><span>Адрес электронной почты</span></label>
            <input type="text" name="email" />
            <label for="password"><span>Пароль:</span></label>
            <input type="password" name="password" />
            <label for="password_confirmation"
              ><span>Подтвердить пароль:</span></label
            >
            <input type="password" name="password_confirmation" />
          </div>
          <button @click="postData" type="submit" class="btn">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Registration",
  methods: {
    backToStart() {
      this.$router.push("/");
    },
    async postData(event) {
      event.preventDefault();
      const csrfToken =
        "eyJpdiI6InJSVitOR2JFV005dGxKZEZkblV0Zmc9PSIsInZhbHVlIjoiMlhLaUNiVHIxektTQXdDUENLaXJ3d2MvMzRIY3dVb2xudFQrbzdOdGR5MU9UTW43ekwwOWEyOWVBdHRtUEpnN2FpNU53TW9Cci9BbHVxdjQ4NGgzbC9EK1ViZVI4TjJMdTUxZDRoSGpzM2JOQXRkODd2Q2pqdkNReGVIdE05Ti8iLCJtYWMiOiJjZDQ2NjY0MjRjZTM0OWI5NDg1NzM5NTBiNWY5ODUzZDY3OTk2NWU3ZTdmMzVhMGQ3YTFjODM0N2VhNDY2MjFlIiwidGFnIjoiIn0%3D";
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Host", "localhost:3000");
      myHeaders.append("X-CSRF-TOKEN", csrfToken);
      

      const formData = new FormData();
      formData.append("name", "max");
      formData.append("email", "admin@admin.admin2");
      formData.append("password", "12345678");
      formData.append("password_confirmation", "12345678");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow",
      };

      // await fetch("http://127.0.0.1:8000/sanctum/csrf-cookie").then((result) =>
      //   console.log(result.headers.get("Set-Cookie"))
      // );

      await fetch("http://127.0.0.1:8000/api/register", requestOptions)
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .block-form {
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
        background-color: #4caf50;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        outline: none;
        position: relative;
        overflow: hidden;
        transition: background-color 0.3s, box-shadow 0.3s;
      }
      .btn::before {
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
      .btn:hover::before {
        width: 0;
        height: 0;
      }
      .btn:hover {
        background-color: #45a049;
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
