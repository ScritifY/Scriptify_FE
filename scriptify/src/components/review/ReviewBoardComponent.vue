<template>
  <div class="review-board">
    <div v-for="review in reviews" :key="review.reviewId" class="review-item">
      <div>
        이 름 : <strong>{{ review.userName }}</strong>
      </div>
      <div>
        <div class="stars">
          별 점 :
          <span v-for="star in 5" :key="star" class="star">
            {{ star <= review.rank ? "★" : "☆" }}
          </span>
        </div>
      </div>
      <div>
        <p>내 용 : {{ review.content }}</p>
      </div>

      <div class="btn-container">
        <div v-if="review.userId == authStore.userId" class="review-actions">
          <button class="update-btn" @click="editReview(review)">수정</button>
          <button class="delete-btn" @click="deleteReview(review.reviewId)">
            삭제
          </button>
        </div>
      </div>

      <ReviewUpdateForm
        v-if="updateReviewId === review.reviewId && showUpdateBox"
        :review="review"
        @update-review="updateReview"
        @cancel-edit="cancelEdit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ReviewUpdateForm from "./ReviewUpdateForm.vue";
import { useReviewStore } from "@/stores/review";
import { useAuthStore } from "@/stores/auth";

defineProps({
  reviews: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["update-review", "delete-review"]);

const reviewStore = useReviewStore();
const authStore = useAuthStore();
const showUpdateBox = ref(false);
const updateReviewId = ref(null);

const toggleUpdateBox = () => {
  showUpdateBox.value = !showUpdateBox.value;
};

const editReview = (review) => {
  updateReviewId.value = review.reviewId;
  toggleUpdateBox();
};

async function deleteReview(reqReviewId) {
  showUpdateBox.value = false;

  const request = {
    reviewId: reqReviewId,
  };

  try {
    await reviewStore.deleteReview(request);

    emit("delete-review", reqReviewId);
  } catch (error) {
    console.error("Error while handling message:", error);
  }
}

async function updateReview(reviewDto) {
  showUpdateBox.value = false;

  const request = {
    userId: authStore.userId,
    reviewId: updateReviewId.value,
    rank: reviewDto.rank,
    content: reviewDto.content,
  };

  try {
    await reviewStore.updateReview(request);

    emit("update-review", request, updateReviewId.value);

    updateReviewId.value = null;
  } catch (error) {
    console.error("Error while handling message:", error);
  }
}

const cancelEdit = () => {
  showUpdateBox.value = false;
};
</script>

<style scoped>
.review-board {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #121212; /* 어두운 배경 */
  color: #ffffff; /* 텍스트 색상 */
  padding: 20px;
}

/* 리뷰 항목 */
.review-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  gap: 1rem;
  max-width: 800px;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #444444;
  border-radius: 8px;
  background-color: #1e1e1e; /* 어두운 배경 */
  font-family: "Jua", sans-serif;
  font-weight: 400;
  font-style: normal;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5); /* 그림자 효과 */
}

.stars {
  color: gold;
}

.btn-container {
  display: flex;
  justify-content: end;
  width: 100%;
}

/* 수정/삭제 버튼 */
.review-actions {
  display: flex;
  gap: 10px;
}

.update-btn,
.delete-btn {
  background-color: inherit;
  color: #ffffff;
  font-size: 15px;
  padding: 8px 16px;
  border: 1px solid #444444;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.update-btn:hover {
  background-color: #346eeb; /* 호버 시 강조 색상 */
  border-color: #346eeb;
}

.delete-btn:hover {
  background-color: #e50914; /* 호버 시 강조 색상 */
  border-color: #e50914;
}
</style>
