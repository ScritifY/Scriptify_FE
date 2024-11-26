<script setup>
import { useRoute } from "vue-router"; // 현재 라우트 정보 가져오기
import NavBar from "./components/navbar/NavBar.vue";
import { RouterView } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="body">
    <div class="main">
      <NavBar v-if="route.name !== 'intro'" />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.body {
  background-image: url("@/assets/images/logo.webp"); /* 배경 이미지 */
  background-repeat: repeat; /* 배경 이미지 반복 */
  background-size: 250px; /* 배경 이미지 크기 조정 */
  background-position: center;
}

.main {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
}
</style>
