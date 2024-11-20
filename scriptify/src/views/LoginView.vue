<template>
    <div class="login-container">
    <div class="login-box">
    <h1 class="login-title"></h1>
    <form @submit.prevent="handleLogin">
        <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" v-model="email" placeholder="이메일을 입력해주세요." />
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
        <button type="submit" class="login-button">로그인</button>
    </form>
    <div class="login-footer">
        <p class="p-guide">Scripify가 처음이신가요? <RouterLink to="/signup" class="signup-link">회원가입</RouterLink></p>
    </div>
    </div>
</div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { ref } from 'vue'
    import axios from 'axios';
    const email = ref('')
    const password = ref('')
    const requestUser = {
        email: email,
        password: password
    };
    const router = useRouter()

    const handleLogin = () => {
      console.log(email.value)
      console.log(password.value)
      router.push(
            {
              path: '/'
            }
          )

      // const url = 'https://localhost:8080/sing-up'

      // axios
      //   .post(
      //     url,
      //     {
      //       email: email.value,
      //       password:password.value
      //     },
      //     {
      //       headers:{
      //         'Content-Type': 'application/json',
      //       },
      //     }
      //   )
      //   .then((response) =>{
      //     //jwt 토근 받아서 저장
      //     router.push(
      //       {
      //         path: '/home'
      //       }
      //     )

          
      //   })
      //   .catch((error) => {
      //     console.log('회원가입 실패')
      //   })

    }
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #232526, #414345);
  background: #d5c2b4;
  color: #fff;
  

}

/* 로그인 박스 */
.login-box {
  padding: 40px;
  border-radius: 20px;

  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  background: linear-gradient(to bottom, #d5c2b4, #f0e5dd);
  border: 1px ridge #d5c2b4
}

/* 제목 스타일 */
.login-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* 폼 그룹 */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  outline: none;
}

/* 버튼 스타일 */
.login-button {
  width: 100%;
  background-color: #9f8d80;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #7a695d; 
}

/* 푸터 */
.login-footer {
  margin-top: 20px;
  font-size: 14px;
}

.signup-link {
  color: #8d4925;
  text-decoration: none;
  font-weight: bold;
}

.signup-link:hover {
  text-decoration: underline;
}
.p-guide{
  color: #7a695d; 
  text-decoration: none;
  font-weight: bold;
}
</style>