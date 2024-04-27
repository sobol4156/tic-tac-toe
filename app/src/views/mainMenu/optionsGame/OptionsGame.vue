<template>
  <div class="form flex justify-center items-center h-screen">
    <div class="block-form relative">
      <div>
        <ButtonBack @click="backToStart" :class="{ 'back-btn': true }"
          >Вернуться</ButtonBack
        >
      </div>
      <div class="info-blocks text-center">
        <h1 class="text-3xl mb-5">Настройки</h1>

        <div class="data-fields flex flex-col items-center">
          <div class="input-field">
            <label for="fieldWidth">Ширина поля:</label>
            <InputOptions
              :class="{ inputClass: true }"
              type="number"
              id="fieldWidth"
              v-model="fieldWidth"
              min="3"
              max="20"
            />
          </div>
          <div class="input-field">
            <label for="fieldHeight">Высота поля:</label>
            <InputOptions
              :class="{ inputClass: true }"
              type="number"
              id="fieldHeight"
              v-model="fieldHeight"
              min="3"
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
import ButtonBack from '@/shared/UI/ButtonBack.vue'
import InputOptions from '@/shared/UI/InputOptions.vue'

export default {
  name: 'OptionsGame',
  data () {
    return {
      fieldWidth: 10,
      fieldHeight: 10
    }
  },
  methods: {
    backToStart () {
      this.$router.push('/')
    },
    saveSettings () {
      console.log('Ширина поля:', this.fieldWidth)
      console.log('Высота поля:', this.fieldHeight)
      // Логика сохранения настроек...
    }
  },
  components: {
    ButtonBack,
    InputOptions
  }
}
</script>

<style scoped lang="scss">
.block-form {
  margin: 0 20px;
  width: 400px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: #4b4848;
}

.input-field {
  margin-bottom: 15px;

  label {
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
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
</style>
