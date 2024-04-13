import { createRouter, createWebHistory } from "vue-router";
import Game from "@/views/Game.vue"; // Путь к вашему компоненту для игры
import Start from "@/views/Start.vue";
import Registration from "@/views/Registration.vue";
import Login from "@/views/Login.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
