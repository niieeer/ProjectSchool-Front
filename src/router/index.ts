import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import { useTokenStore } from "@/stores/token";
// const store = useTokenStore();
const ok = true;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
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
      beforeEnter: (to, from, next) => {
        if (ok) {
          next(false);
        } else {
          next();
        }
      },
    },
    {
      path: "/modify/:id",
      name: "modify",
      component: () => import("../views/ModifyStudentView.vue"),
    },
    {
      path: "/addstudent",
      name: "addstudent",
      component: () => import("../views/AddStudent.vue"),
    },
    {
      path: "/addprof",
      name: "addprof",
      component: () => import("../views/AddProf.vue"),
    },
    {
      path: "/modifyprof/:id",
      name: "modifyprof",
      component: () => import("../views/ModifyProfView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "err",
      component: () => import("../views/ErrView.vue"),
    },
  ],
});
export default router;
