import axios from "axios";
import { defineStore } from "pinia";

export const useChatStore = defineStore("chat", {
  state: () => ({
    isLoggedIn: false,
    token: localStorage.getItem("token") || "",
    scenarioId: localStorage.getItem("scenarioId") || "",
  }),

  actions: {
    async createScenario(request = {}, type) {
      try {
        const response = await axios({
          method: "post",
          url: `http://3.39.187.9/api/v1/scenario/?messageType=${type}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${this.token}`,
          },
          data: {
            ...request,
            scenarioId: this.scenarioId,
          },
        });
        console.log("시나리오 생성 성공", response);
        localStorage.setItem("scenarioId", response.data.scenarioId); // 상태 저장
        return response.data; // 데이터를 반환
      } catch (error) {
        console.error("시나리오 생성 실패", error);
        throw error; // 에러를 호출부로 전달
      }
    },
  },
  persist: true, // 상태를 로컬 스토리지에 저장하도록 설정
});
