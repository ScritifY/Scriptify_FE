import { API_VERSION, BASE_URL, DOMAIN } from "@/constants/api";
import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useChatStore = defineStore("chat", {
  state: () => ({
    scenarioId: "",
  }),

  actions: {
    async createScenario(request, messageType) {
      const authStore = useAuthStore();

      const data =
        messageType === "first"
          ? request
          : {
              ...request,
              scenarioId: this.scenarioId,
            };

      try {
        const response = await axios({
          method: "post",
          url: `${BASE_URL}${API_VERSION}${DOMAIN.SCENARIO}?messageType=${messageType}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authStore.token}`,
          },
          data,
        });
        console.log("시나리오 생성 성공", response);

        this.scenarioId = response.data.scenarioId;
        return response.data;
      } catch (error) {
        console.error("시나리오 생성 실패", error);
        throw error;
      }
    },
  },
  persist: true,
});
