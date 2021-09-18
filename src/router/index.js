import { createRouter, createWebHistory } from "vue-router";
import Header from "../views/Header.vue";
import fourfour from "../views/404.vue";
const routes = [
  {
    path: "/",
    name: "Header",
    component: Header,
  },
  {
    path: "/404",
    name: "404",
    component: fourfour,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
