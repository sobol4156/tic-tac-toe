<template>
  <div class="form flex justify-center items-center h-screen">
    <div class="block-form">
      <div>
        <ButtonBack
          @click="backToStart"
          :class="{ customRadius: true, 'back-btn': true }"
          >Вернуться</ButtonBack
        >
      </div>
      <div class="info-blocks flex flex-col items-center py-2.5 text-xl">
        <h1 class="text-4xl">Регистрация</h1>
        <div class="data-fields flex flex-col m-3.5">
          <label for="name"><span>Как вас зовут?</span></label>
          <InputAuth :class="{ inputClass: true }" type="text" />
          <label for="name"><span>Адрес электронной почты</span></label>
          <InputAuth :class="{ inputClass: true }" type="text" />
          <label for="name"><span>Пароль:</span></label>
          <InputAuth :class="{ inputClass: true }" type="password" />
          <label for="name"><span>Подтвердить пароль:</span></label>
          <InputAuth :class="{ inputClass: true }" type="password" />
        </div>
        <ButtonSave class="btn">Зарегистрироваться</ButtonSave>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBack from '@/shared/UI/ButtonBack.vue'
import ButtonSave from '@/shared/UI/ButtonSave.vue'
import InputAuth from '@/shared/UI/InputAuth.vue'

export default {
  name: 'RegistrationProfile',
  methods: {
    backToStart () {
      this.$router.push('/')
    }
  },
  components: {
    ButtonBack,
    ButtonSave,
    InputAuth
  }
}
</script>

<style scoped lang="scss">
.block-form {
  position: relative;
  padding: 30px 0;
  margin: 0 20px;
  width: 640px;
  height: 640px;
  border: 1px solid white;
  border-radius: 15px;
  box-shadow: 6px 5px 8px 0px rgb(0, 0, 0, 0.4);
  background-color: #4b4848;

  label {
    text-align: center;
    padding: 10px;
  }
}
</style>
