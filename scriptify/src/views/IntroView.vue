<template>
  <div class="intro-container">
    <h1 class="intro-title">Scriptify에 오신걸 환영합니다 !</h1>
    <div class="intro-content">
      <p class="intro-description">
        Scriptify는 AI 기반으로 영화 시나리오를 손쉽게 생성할 수 있는 서비스를
        제공합니다. 창의적인 아이디어를 실현하고, 당신만의 이야기를 만들어
        보세요.
      </p>
      <ul class="intro-features">
        <li>
          <strong>🎥 AI 영화 시나리오 생성:</strong> 빠르고 간편한 창작 도구
        </li>
        <li>
          <strong>📖 맞춤형 대화:</strong> 영화의 방향성을 설정하고 수정 가능
        </li>
        <li>
          <strong>🚀 협업 도구:</strong> 팀원들과 함께 아이디어를 공유하고 발전
        </li>
      </ul>
      <button class="btn-login" @click="goToLogin">지금 시작하기</button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const isAuthenticated = authStore.token;

const goToLogin = () => {
  router.push({ name: "login" }); // 로그인 페이지로 이동
};

onBeforeMount(() => {
  if (isAuthenticated) {
    router.push({ name: "home" });
  }
});
</script>

<style scoped>
/* 전체 컨테이너 */
.intro-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121212; /* 어두운 배경 */
  color: #ffffff; /* 텍스트 흰색 */
  padding: 20px;
  text-align: center;
}

/* 콘텐츠 */
.intro-content {
  max-width: 600px;
  padding: 40px;
  border-radius: 10px;
  background-color: #1e1e1e; /* 컨텐츠 박스 배경 */
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);
}

/* 제목 */
.intro-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #f0f0f0;
}

/* 설명 */
.intro-description {
  margin-bottom: 50px;
  color: #fff;
  line-height: 1.6;
  font-size: 1.5rem;
  line-height: 1.6;
  word-break: keep-all; /* 한글 단어 단위 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어 강제 줄바꿈 */
  text-align: center; /* 텍스트 중앙 정렬 */
}

/* 기능 목록 */
.intro-features {
  list-style: none;
  margin-bottom: 30px;
  padding: 0;
  text-align: left;
}

.intro-features li {
  font-size: 16px;
  margin-bottom: 15px;
  color: #dddddd;
}

/* 시작 버튼 */
.btn-login {
  padding: 14px 28px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background-color: #346eeb; /* 로그인 버튼 배경 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-login:hover {
  background-color: #285bb5; /* 호버 시 버튼 색상 */
}
</style>
