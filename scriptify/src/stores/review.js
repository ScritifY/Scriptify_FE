import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import { API_VERSION, BASE_URL, DOMAIN } from "@/constants/api";

export const useReviewStore = defineStore("review", {
  actions: {
    async createReview(request) {
      const authStore = useAuthStore();

      try {
        const response = await axios({
          method: "post",
          url: `${BASE_URL}${API_VERSION}${DOMAIN.REVIEW}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authStore.token}`,
          },
          data: request,
        });
        return response.data;
      } catch (error) {
        console.error("리뷰 생성 실패", error);
        throw error;
      }
    },

    async getReviews() {
      try {
        const response = await axios({
          method: "get",
          url: `${BASE_URL}${API_VERSION}${DOMAIN.REVIEW}`,
          headers: {
            "Content-Type": "application/json",
          },
        });
        return response.data;
      } catch (error) {
        console.error("리뷰 생성 실패", error);
        throw error;
      }
    },

    async updateReview(request) {
      const authStore = useAuthStore();

      try {
        const response = await axios({
          method: "put",
          url: `${BASE_URL}${API_VERSION}${DOMAIN.REVIEW}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authStore.token}`,
          },
          data: request,
        });
        return response.data;
      } catch (error) {
        console.error("리뷰 수정 실패", error);
        throw error;
      }
    },

    async deleteReview(request) {
      const authStore = useAuthStore();

      try {
        const response = await axios({
          method: "delete",
          url: `${BASE_URL}${API_VERSION}${DOMAIN.REVIEW}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authStore.token}`,
          },
          data: request,
        });
        return response.data;
      } catch (error) {
        console.error("리뷰 삭제 실패", error);
        throw error;
      }
    },
  },
  persist: true,
});
