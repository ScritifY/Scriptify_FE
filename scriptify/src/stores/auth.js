import { API_VERSION, BASE_URL, DOMAIN, END_POINT } from "@/constants/api";
import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
  }),

  actions: {
    login(userInput) {
      axios({
        method: "post",
        url: `${BASE_URL}${API_VERSION}${DOMAIN.USER}${END_POINT.LOGIN}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: userInput,
      })
        .then((response) => {
          this.token = response.data.key;
        })
        .catch((error) => {
          console.log("로그인 실패", error);
          alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
        });
    },

    logout() {
      axios({
        method: "post",
        url: `${BASE_URL}${API_VERSION}${DOMAIN.USER}${END_POINT.LOGOUT}`,
        headers: {
          Authorization: `Token ${this.token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          this.token = "";
        })
        .catch((error) => {
          console.log("로그아웃 실패", error);
        });
    },
  },
  persist: true,
});
