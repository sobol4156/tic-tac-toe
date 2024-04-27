import { createRouter, createWebHistory } from 'vue-router'

import MenuGame from '@/views/mainMenu/MenuGame.vue'
import GameTTT from '@/views/mainMenu/Game/GameTTT.vue'
import RegistrationProfile from '@/views/Auth/RegistrationProfile.vue'
import LoginInProfile from '@/views/Auth/LoginInProfile.vue'
import OptionsGame from '@/views/mainMenu/optionsGame/OptionsGame.vue'

const routes = [
  {
    path: '/',
    name: 'MenuGame',
    component: MenuGame
  },
  {
    path: '/game',
    name: 'GameTTT',
    component: GameTTT
  },
  {
    path: '/registration',
    name: 'RegistrationProfile',
    component: RegistrationProfile
  },
  {
    path: '/login',
    name: 'LoginInProfile',
    component: LoginInProfile
  },
  {
    path: '/options',
    name: 'OptionsGame',
    component: OptionsGame
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
