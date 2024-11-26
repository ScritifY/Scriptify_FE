<template>
  <div class="review-container">
    <p class="recommend-ment">여러분의 사용 후기를 남겨주세요!</p>
    <br />
    <button class="btn-toggle" @click="toggleForm">
      <font-awesome-icon
        class="fa-2x"
        :icon="showForm ? ['fas', 'reply'] : ['fas', 'pen']"
      />
    </button>
    <ReviewFormComponent v-if="showForm" @submit-review="addReview" />
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

function updateReview(reviewDto, updateReviewId) {
  const target = reviews.value.find((review) => review.id === updateReviewId);
  if (target) {
    target.rank = reviewDto.rank;
    target.content = reviewDto.content;
  }
}

function deleteReview(reviewId) {
  const newReviews = reviews.value.filter((review) => review.id !== reviewId);
  reviews.value = newReviews;
}
</script>

<style scoped>
.review-container {
  background: linear-gradient(to bottom, #d5c2b4, #f0e5dd);
}
.recommend-ment {
  text-align: center;
  font-size: 20px;
  padding-top: 30px;
}
.btn-toggle {
  position: relative;
  left: 88%; /* 수평 중앙 */
  transform: translate(-50%, -50%); /* 정확히 중앙에 위치시킴 */
  background-color: #d5c2b4;
}
</style>
