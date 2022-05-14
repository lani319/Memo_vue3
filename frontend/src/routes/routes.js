import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/Memo.vue"), // 동적 import
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/Login.vue"), // 동적 import
  },
  {
    path: "/regist",
    name: "Regist",
    component: () => import("@/components/Register.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
