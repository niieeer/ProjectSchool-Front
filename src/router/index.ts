import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("../components/LogoutController.vue"),
    },
    {
      path: "/students",
      name: "students",
      component: () => import("../views/Student.vue"),
    },
  ],
});

export default router;
