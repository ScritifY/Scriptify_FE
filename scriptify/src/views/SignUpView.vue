<template>
  <div class="signup-container">
    <div class="signup-form">
      <form @submit.prevent="handleSignUp">
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
        <button type="submit" class="submit-btn">회원가입</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

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
    url: "http://3.39.187.9/api/v1/accounts/signup/",
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
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #d5c2b4;
}

.signup-form {
  background-color: #333;
  padding: 40px;
  border-radius: 10px;
  width: 400px;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to bottom, #d5c2b4, #f0e5dd);
  border: 1px ridge #d5c2b4;
}

.signup-form h2 {
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  font-size: 14px;
  /* color: #bbb; */
  display: block;
  margin-bottom: 8px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #444;
  /* background-color: #222; */
  color: black;
}

.input-group input:focus {
  border-color: #e50914;
  outline: none;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  font-size: 18px;
  background-color: #9f8d80;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #7a695d;
}
</style>
