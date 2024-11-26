<template>
  <div class="review-container">
    <div class="review-header">
      <p class="recommend-ment">
        <strong>다른 유저들의 후기를 확인해보세요</strong> !
      </p>
      <button class="btn-toggle" @click="toggleForm">리뷰 생성</button>
    </div>

    <ReviewFormComponent
      v-if="showForm"
      @submit-review="addReview"
      @cancel-review="toggleForm"
    />

    <!-- 리뷰 보드 -->
    <ReviewBoardComponent
      :reviews="reviews"
      @update-review="updateReview"
      @delete-review="deleteReview"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useReviewStore } from "@/stores/review";
import { useAuthStore } from "@/stores/auth";
import ReviewFormComponent from "@/components/review/ReviewFormComponent.vue";
import ReviewBoardComponent from "@/components/review/ReviewBoardComponent.vue";

const reviewStore = useReviewStore();
const reviews = ref([]);
const showForm = ref(false);

const authStore = useAuthStore();

onMounted(async () => {
  try {
    const response = await reviewStore.getReviews();
    reviews.value = response.data.reviews;
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
  }
});

const toggleForm = () => {
  showForm.value = !showForm.value;
};

async function addReview(request) {
  showForm.value = false;

  if (!authStore.token) {
    alert("로그인을 한 유저만 작성할 수 있어요");
    return;
  }

  try {
    const response = await reviewStore.createReview(request);
    reviews.value.unshift(response.data);
  } catch (error) {
    console.log(error);
  }
}

function updateReview(request, updateReviewId) {
  const target = reviews.value.find(
    (review) => review.reviewId === updateReviewId
  );

  if (target) {
    target.rank = request.rank;
    target.content = request.content;
  }
}

function deleteReview(reviewId) {
  reviews.value = reviews.value.filter(
    (review) => review.reviewId !== reviewId
  );
}
</script>

<style scoped>
/* 전체 컨테이너 */
.review-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #121212;
  color: #ffffff;
}

.review-header {
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 사용 후기 제목 */
.recommend-ment {
  text-align: center;
  font-size: 20px;
  font-family: "Impact", sans-serif;
}

/* 리뷰 보드 */
.review-board {
  width: 100%;
  max-width: 1000px; /* 리뷰 보드 크기 크게 */
  background-color: #262626;
  border-radius: 10px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin-top: 10px;
  overflow-y: auto;
  max-height: 85vh;
}

/* 리뷰 생성 버튼 */
.btn-toggle {
  background-color: #346eeb;
  color: #ffffff;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-toggle:hover {
  background-color: #555555;
}

/* 커스텀 스크롤바 */
.review-board::-webkit-scrollbar {
  width: 10px;
}

.review-board::-webkit-scrollbar-thumb {
  background-color: #555555;
  border-radius: 5px;
}

.review-board::-webkit-scrollbar-thumb:hover {
  background-color: #346eeb;
}

.review-board::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #1e1e1e;
}

/* 반응형 스타일 */
@media (max-width: 768px) {
  .review-board {
    padding: 16px;
  }
}
</style>
