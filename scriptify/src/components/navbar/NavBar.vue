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
          <button @click="logout" class="router_logout">SignOut</button>
        </li>
        <li v-else class="auth_container">
          <RouterLink :to="{ name: 'login' }" class="router_login"
            >SignIn</RouterLink
          >
          <RouterLink :to="{ name: 'signup' }" class="router_sign_up"
            >SignUp</RouterLink
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
  background: #121212; /* 어두운 배경 */
  padding: 16px 40px; /* 충분한 여백 */
  font-family: "Arial", sans-serif; /* 간결한 폰트 */
  color: #ffffff;
  font-size: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 네비게이션 바에 깊이감 추가 */
}

.navbar_home {
  font-size: 24px;
  font-weight: bold;
}

.router_home {
  text-decoration: none;
  color: #ffffff;
  transition: color 0.3s ease;
}

.router_home:hover {
  color: #346eeb;
}

.navbar_list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px; /* 링크 간 간격 */
}

.router_review,
.router_login,
.router_sign_up,
.router_logout {
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  transition: color 0.3s ease;
  padding: 0;
}

.router_review:hover,
.router_login:hover,
.router_sign_up:hover,
.router_logout:hover {
  color: #346eeb; /* 호버 시 강조색 */
}

.router_logout {
  border: none;
  background: none;
  cursor: pointer;
}

.auth_container {
  display: flex;
  gap: 20px;
}
</style>
