<template>
  <header>
    <nav class="navigation">
      <div class="navbar_home">
        <RouterLink :to="{ name: 'home' }" class="router_home"
          >Scriptify</RouterLink
        >
      </div>
      <ul class="navbar_list">
        <li>
          <RouterLink :to="{ name: 'review' }" class="router_review"
            >Review</RouterLink
          >
        </li>
        <li v-if="authStore.token">
          <button @click="logout" class="router_logout">Logout</button>
        </li>
        <li v-else class="auth_container">
          <RouterLink :to="{ name: 'login' }" class="router_login"
            >login</RouterLink
          >
          <RouterLink :to="{ name: 'signup' }" class="router_sign_up"
            >sign up</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const logout = () => {
  authStore.logout();
  router.push({ name: "home" });
};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 8px 20px;
  font-family: impact;
  color: black;
  font-size: 20px;
  height: 40px;
}
.navbar_list {
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 15px;
  gap: 16px;
}
.router_home {
  text-decoration: none;
  color: black;
  font-size: 25px;
}
.router_review {
  text-decoration: none;
  color: black;
}
.router_login {
  text-decoration: none;
  color: black;
}
.router_sign_up {
  text-decoration: none;
  color: black;
}
.router_log {
  text-decoration: none;
  color: black;
}
.router_logout {
  text-decoration: none;
  color: black;
  font-size: 20px;
  border: none;
  background-color: inherit;
}
.auth_container {
  display: flex;
  gap: 16px;
}
</style>
