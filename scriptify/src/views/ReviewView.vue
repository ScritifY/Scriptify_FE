<template>
  <div class="review-container">
    <p class="recommend-ment">여러분의 사용 후기를 남겨주세요!</p>
    <br />
    <!-- <button @click="toggleForm">
      {{ showForm ? '작성 취소' : '리뷰 작성하기' }}
      </button> -->
    <button class="btn-toggle" @click="toggleForm">
      <font-awesome-icon
        class="fa-2x"
        :icon="showForm ? ['fas', 'reply'] : ['fas', 'pen']"
      />
    </button>
    <ReviewFormComponent v-if="showForm" @submit-review="addReview" />
    <ReviewBoard  :reviews="reviews" />
  </div>
</template>

<script setup>
import ReviewBoard from "@/components/review/ReviewBoardComponent.vue";
import { ref } from "vue";
import ReviewFormComponent from "@/components/review/ReviewFormComponent.vue";
import { useReviewStore } from "@/stores/review";
import { onMounted } from "vue";

const reviewStore = useReviewStore()
const reviews = ref([]);
const showForm = ref(false);
const userToken = localStorage.getItem('token');

onMounted(async () => {
  try {
    const response = await reviewStore.getReviews()
    reviews.value = response.data.reviews
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
  }
});

const toggleForm = () => {
  showForm.value = !showForm.value;
};

async function addReview(request){
  showForm.value = false;
  if(userToken===null){
    alert('로그인을 한 유저만 작성할 수 있어요')
    return
  }
  try{
    const response = await reviewStore.createReview(request)
    reviews.value.unshift(response.data)
  }catch(error){
    console.log(error)
  }
};
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
