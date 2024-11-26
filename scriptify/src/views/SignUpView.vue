<template>
  <div class="signup-container">
    <div class="signup-form">
      <form @submit.prevent="handleSignUp">
        <h2 class="title">회원가입</h2>

        <div class="input-group">
          <label for="name">이름</label>
          <input
            type="text"
            v-model="name"
            id="name"
            placeholder="이름을 입력해주세요."
            required
          />
        </div>

        <div class="input-group">
          <label for="email">이메일</label>
          <input
            type="email"
            v-model="email"
            id="email"
            placeholder="이메일을 입력해주세요."
            required
          />
        </div>

        <div class="input-group">
          <label for="password">비밀번호</label>
          <input
            type="password"
            v-model="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            required
          />
        </div>

        <div class="input-group">
          <label for="confirm-password">비밀번호 확인</label>
          <input
            type="password"
            v-model="confirmPassword"
            id="confirm-password"
            placeholder="비밀번호를 다시 입력해주세요."
            required
          />
          <p v-if="!isPasswordValid" class="p-password-diff">
            입력 비밀번호와 확인 비밀번호가 달라요!
          </p>
        </div>

        <div class="input-group">
          <label for="phone">핸드폰 번호</label>
          <input
            type="tel"
            v-model="phone"
            id="phone"
            placeholder="핸드폰 번호를 입력해주세요."
            required
          />
        </div>
        <button type="submit" class="submit-btn">가입하기</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { API_VERSION, BASE_URL, DOMAIN, END_POINT } from "@/constants/api";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const phone = ref("");
const router = useRouter();

const isPasswordValid = computed(() => {
  return password.value === confirmPassword.value;
});

const handleSignUp = () => {
  if (!isPasswordValid.value) {
    alert("패스워드가 일치해야 회원가입을 진행할 수 있어요.");
    return;
  }

  const newUser = {
    name: name.value,
    email: email.value,
    password: password.value,
    phone: phone.value,
  };

  axios({
    method: "post",
    url: `${BASE_URL}${API_VERSION}${DOMAIN.USER}${END_POINT.SIGNUP}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: newUser,
  })
    .then((response) => {
      router.push({ name: "login" });
    })
    .catch((error) => {
      console.log("로그인 실패", error);
      alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    });
};
</script>

<style scoped>
/* 전체 컨테이너 */
.signup-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121212; /* 어두운 배경 */
}

/* 폼 */
.signup-form {
  background-color: #1e1e1e; /* 폼의 메인 배경색 */
  padding: 40px;
  border-radius: 10px;
  width: 400px;
  color: #ffffff; /* 텍스트 흰색 */
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5); /* 깊이감을 위한 그림자 */
}

/* 헤더 */
.title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #f0f0f0;
}

/* 입력 그룹 */
.input-group {
  margin-bottom: 20px;
}

.input-group label {
  font-size: 14px;
  display: block;
  margin-bottom: 8px;
  color: #fff; /* 라벨 회색 */
}

.input-group input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #333; /* 테두리 어두운 회색 */
  color: #ffffff; /* 입력 텍스트 색상 */
  background-color: #2c2c2c; /* 입력 필드 배경 */
}

.input-group input::placeholder {
  color: #666666; /* 플레이스홀더 회색 */
}

.input-group input:focus {
  border-color: #346eeb;
  outline: none;
  background-color: #333333;
}

/* 에러 메시지 */
.p-password-diff {
  color: #e50914; /* 비밀번호 에러 메시지 빨간색 */
  font-size: 12px;
  margin-top: 8px;
}

/* 버튼 */
.submit-btn {
  width: 100%;
  padding: 14px;
  font-size: 18px;
  background-color: #333333; /* 버튼 기본 배경 */
  color: #ffffff;
  border: 1px solid #444444; /* 테두리 */
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background-color: #346eeb;
  border-color: #346eeb;
}

/* 반응형 */
@media (max-width: 768px) {
  .signup-form {
    width: 90%; /* 작은 화면에서는 폼 크기 줄이기 */
    padding: 20px;
  }

  .signup-form h2 {
    font-size: 24px; /* 헤더 크기 조정 */
  }

  .input-group input {
    padding: 10px; /* 입력 필드 여백 조정 */
  }

  .submit-btn {
    padding: 12px; /* 버튼 크기 조정 */
    font-size: 16px;
  }
}
</style>
