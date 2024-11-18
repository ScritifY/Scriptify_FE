<template>
    <div class="signup-container">
      <div class="signup-form">
        <!-- <h2>회원가입</h2> -->
        <form @submit.prevent="handleSignUp">
          <div class="input-group">
            <label for="name">이름</label>
            <input type="text" v-model="name" id="name" placeholder="이름을 입력해주세요." required />
          </div>
  
          <div class="input-group">
            <label for="email">이메일</label>
            <input type="email" v-model="email" id="email" placeholder="이메일을 입력해주세요." required />
          </div>
  
          <div class="input-group">
            <label for="password">비밀번호</label>
            <input type="password" v-model="password" id="password" placeholder="비밀번호를 입력해주세요." required />
          </div>
  
          <div class="input-group">
            <label for="confirm-password">비밀번호 확인</label>
            <input type="password" v-model="confirmPassword" id="confirm-password" placeholder="비밀번호를 다시 입력해주세요." required />
          </div>
  
          <div class="input-group">
            <label for="phone">핸드폰 번호</label>
            <input type="tel" v-model="phone" id="phone" placeholder="핸드폰 번호를 입력해주세요." required />
          </div>
  

  
          <button type="submit" class="submit-btn">회원가입</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const phone = ref('');
  const birthdate = ref('');
  
  const handleSignUp = () => {
    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match!');
      return;
    }
  
    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
      birthdate: birthdate.value,
    };
  
    // 여기서 백엔드 API 호출
    console.log('User data:', newUser);
  };
  </script>
  
  <style scoped>
  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom, #232526, #414345);




  }
  
  .signup-form {
    background-color: #333;
    padding: 40px;
    border-radius: 10px;
    width: 400px;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    background: linear-gradient(to bottom, #232526, #414345);
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
    color: #bbb;
    display: block;
    margin-bottom: 8px;
  }
  
  .input-group input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #444;
    background-color: #222;
    color: #fff;
  }
  
  .input-group input:focus {
    border-color: #e50914;
    outline: none;
  }
  
  .submit-btn {
    width: 100%;
    padding: 14px;
    font-size: 18px;
    background-color: #e50914;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #f40612;
  }
  
  </style>
  