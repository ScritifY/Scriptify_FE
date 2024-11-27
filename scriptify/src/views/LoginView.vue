<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">로그인</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">이메일</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="이메일을 입력해주세요."
          />
        </div>
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <button type="submit" class="login-button">시작하기</button>
      </form>
      <div class="login-footer">
        <p class="p-guide">
          Scripify가 처음이신가요?
          <RouterLink to="/signup" class="signup-link">회원가입</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const email = ref("");
const password = ref("");

const handleLogin = async () => {
  const requestUser = {
    email: email.value,
    password: password.value,
  };

  await authStore.login(requestUser);

  router.push({ name: "home" });
};

onBeforeMount(() => {
  if (authStore.token) {
    router.push({ name: "home" })
  }
})
</script>

<style scoped>
/* 전체 컨테이너 */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #121212; /* 어두운 배경 */
  color: #ffffff; /* 텍스트 기본 흰색 */
}

/* 로그인 박스 */
.login-box {
  padding: 40px;
  border-radius: 10px; /* 둥근 모서리 */
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5); /* 깊이감을 위한 그림자 */
  text-align: center;
  background: #1e1e1e; /* 어두운 박스 배경 */
}

/* 로그인 제목 */
.login-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #fff; /* 흰색보다 살짝 밝은 색 */
}

/* 입력 그룹 */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  color: #fff; /* 라벨 회색 */
}

input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #333333; /* 테두리 어두운 회색 */
  border-radius: 5px;
  background-color: #2c2c2c; /* 입력 필드 배경 */
  color: #ffffff; /* 입력 텍스트 흰색 */
}

input::placeholder {
  color: #666666; /* 플레이스홀더 회색 */
}

input:focus {
  border-color: #346eeb; /* 포커스 시 강조 색상 */
  outline: none;
  background-color: #333333;
}

/* 로그인 버튼 */
.login-button {
  width: 100%;
  background-color: #333333; /* 버튼 기본 배경 */
  color: #ffffff;
  padding: 14px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #444444; /* 버튼 테두리 */
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-button:hover {
  background-color: #346eeb; /* 호버 시 강조색 */
  border-color: #346eeb;
}

/* 푸터 */
.login-footer {
  margin-top: 20px;
  font-size: 14px;
  color: #cccccc; /* 회색 텍스트 */
}

.signup-link {
  color: #346eeb; /* 회원가입 링크 강조색 */
  text-decoration: none;
  font-weight: bold;
}

.signup-link:hover {
  text-decoration: underline;
}

/* 가이드 메시지 */
.p-guide {
  color: #ccc; /* 안내 메시지 회색 */
  font-size: 12px;
  margin-top: 10px;
  text-align: right;
}

/* 반응형 */
@media (max-width: 768px) {
  .login-box {
    width: 90%; /* 작은 화면에서 폭을 줄임 */
    padding: 20px;
  }

  .login-title {
    font-size: 24px; /* 제목 크기 축소 */
  }

  input {
    padding: 10px; /* 입력 필드 여백 조정 */
  }

  .login-button {
    padding: 12px; /* 버튼 크기 축소 */
    font-size: 16px;
  }
}
</style>
