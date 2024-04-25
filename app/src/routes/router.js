import { createRouter, createWebHistory } from "vue-router";
import Game from "@/views/mainMenu/Game/Game.vue"; 
import Start from "@/views/mainMenu/Start.vue";
import Registration from "@/views/Auth/Registration.vue";
import Login from "@/views/Auth/Login.vue";
import Options from '@/views/mainMenu/optionsGame/Options.vue'

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/options",
    name: "Options",
    component: Options,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
