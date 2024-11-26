import axios from "axios";
import { defineStore } from "pinia";

export const useReviewStore = defineStore("review", {
  state: () => ({
    token: localStorage.getItem("token") || "",
  }),

  actions: {
    async createReview(request) {
      try {
        const response = await axios({
          method: "post",
          url: `http://3.39.187.9/api/v1/review/`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${this.token}`,
          },
          data: request
        });
        return response.data; // 데이터를 반환
      } catch (error) {
        console.error("리뷰 생성 실패", error);
        throw error; // 에러를 호출부로 전달
      }
    },
    async getReviews() {
      try {
        const response = await axios({
          method: "get",
          url: `http://3.39.187.9/api/v1/review/`,
          headers: {
            "Content-Type": "application/json",
          }
        });
        return response.data; // 데이터를 반환
      } catch (error) {
        console.error("리뷰 생성 실패", error);
        throw error; // 에러를 호출부로 전달
      }
    },
    async updateReview(request) {
      try {
        const response = await axios({
          method: "put",
          url: `http://3.39.187.9/api/v1/review/`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${this.token}`,
          },
          data: request
        });
        return response.data; // 데이터를 반환
      } catch (error) {
        console.error("리뷰 생성 실패", error);
        throw error; // 에러를 호출부로 전달
      }
    },
    async deleteReview(request) {
      try {
        const response = await axios({
          method: "delete",
          url: `http://3.39.187.9/api/v1/review/`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${this.token}`,
          },
          data: request
        });
        return response.data; // 데이터를 반환
      } catch (error) {
        console.error("리뷰 생성 실패", error);
        throw error; // 에러를 호출부로 전달
      }
    },
  },
  persist: true, // 상태를 로컬 스토리지에 저장하도록 설정
});
