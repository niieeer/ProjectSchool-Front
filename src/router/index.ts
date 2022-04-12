import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import isLog from "@/plugins/loginCheck";

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
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "home" && !isLog()) {
    next({ name: "home" });
  } else {
    if (to.name === "home" && isLog()) {
      next({ name: "logout" });
      return;
    }

    next();
    return;
  }
});

export default router;
