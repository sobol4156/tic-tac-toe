<template>
  <div class="form">
    <div class="block-form">
      <div>
        <ButtonBack @click="backToStart" :class="{'back-btn': true}">Вернуться</ButtonBack>
      </div>
      <div class="info-blocks">
        <h1>Настройки</h1>

        <div class="data-fields">
          <div class="input-field">
            <label for="fieldWidth">Ширина поля:</label>
            <input
              type="number"
              id="fieldWidth"
              v-model="fieldWidth"
              min="5"
              max="20"
            />
          </div>
          <div class="input-field">
            <label for="fieldHeight">Высота поля:</label>
            <input
              type="number"
              id="fieldHeight"
              v-model="fieldHeight"
              min="5"
              max="20"
            />
          </div>
        </div>
        <button @click="saveSettings" class="btn">Сохранить</button>
      </div>
      
    </div>
  </div>
</template>

<script>
import ButtonBack from '@/shared/UI/ButtonBack.vue';


export default {

  name: "Options",
  data() {
    return {
      fieldWidth: 10,
      fieldHeight: 10,
    };
  },
  methods: {
    backToStart() {
      this.$router.push("/");
    },
    saveSettings() {
      console.log("Ширина поля:", this.fieldWidth);
      console.log("Высота поля:", this.fieldHeight);
      // Логика сохранения настроек...
    },
  },
  components: {
    ButtonBack
  }
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .block-form {
    position: relative;
    margin: 0 20px;
    width: 400px;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #4b4848;
  }

  .info-blocks {
    text-align: center;

    h1 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    .data-fields {
      display: flex;
      flex-direction: column;
      align-items: center;

      .input-field {
        margin-bottom: 15px;

        label {
          display: block;
          font-size: 18px;
          margin-bottom: 5px;
          color: #333;
        }

        input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
          transition: border-color 0.3s;
        }

        input:focus {
          outline: none;
          border-color: #242424;
        }
      }
    }

    .btn {
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      background-color: #242424;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s;
      margin-top: 20px;
    }

    .btn:hover {
      color: #242424;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  }
}



</style>
