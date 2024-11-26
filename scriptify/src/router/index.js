import { createRouter, createWebHistory } from "vue-router";
import ReviewView from "@/views/ReviewView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import IntroView from "@/views/IntroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/intro",
      name: "intro",
      component: IntroView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/review",
      name: "review",
      component: ReviewView,
    },
  ],
});

export default router;
