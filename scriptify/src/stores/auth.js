import axios from 'axios';
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    token: localStorage.getItem('token') || '',
  }),

  actions: {
    login(userInput) {
      axios({
        method: 'post',
        url: 'http://3.39.187.9/api/v1/accounts/login/',
        headers:{
          'Content-Type': 'application/json',
        },
        data: userInput,
      })
      .then((response) => {
        console.log('로그인 성공:', response);
        localStorage.setItem('token', response.data.key);
        this.token = response.data.key;
        this.isLoggedIn = true
      })
      .catch((error) => {
        console.log('로그인 실패', error);
        alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
      });
    },

    logout() {
      axios({
          method: 'post',
          url: 'http://3.39.187.9/api/v1/accounts/logout/',
          headers:{
              'Authorization': `Token ${this.token}`,
              'Content-Type': 'application/json',
          },
      })
      .then((response) => {
          console.log('로그아웃 성공', response);
          this.isLoggedIn = false;
          this.token = '';
          localStorage.removeItem('token');
      })
      .catch((error) => {
          console.log('로그아웃 실패', error);
      })
    },

    // 로그인 상태 확인
    checkLoginStatus() {
      // localStorage에서 토큰을 확인하여 로그인 여부 판단
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    },
  },
  persist: true, // 상태를 로컬 스토리지에 저장하도록 설정
})
