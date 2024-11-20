<template>
    <div class="review-container" >
      <p class="recommend-ment">여러분의 사용 후기를 남겨주세요!</p>
      <br>
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
      <ReviewBoard :reviews="reviews" />
    </div>
  </template>
  
  <script setup>
  import ReviewBoard from '@/components/review/ReviewBoardComponent.vue';
  import { ref } from 'vue';
  import ReviewFormComponent from '@/components/review/ReviewFormComponent.vue';
  
  const reviews = ref([
    { name: '홍길동', rank: 5, comment: '정말 좋았어요!' },
    { name: '김철수', rank: 3, comment: '괜찮았지만 아쉬웠어요.' },
    { name: '이영희', rank: 0, comment: '옆집 개도 쓰겄다.' },
    { name: '홍길동', rank: 5, comment: '정말 좋았어요!' },
    { name: '김철수', rank: 3, comment: '괜찮았지만 아쉬웠어요.' },
    { name: '이영희', rank: 0, comment: '옆집 개도 쓰겄다.' },
    { name: '홍길동', rank: 5, comment: '정말 좋았어요!' },
    { name: '김철수', rank: 3, comment: '괜찮았지만 아쉬웠어요.' },
    { name: '이영희', rank: 0, comment: '옆집 개도 쓰겄다.' },
    { name: '홍길동', rank: 5, comment: '정말 좋았어요!' },
    { name: '김철수', rank: 3, comment: '괜찮았지만 아쉬웠어요.' },
    { name: '이영희', rank: 0, comment: '옆집 개도 쓰겄다.' },
    { name: '홍길동', rank: 5, comment: '정말 좋았어요!' },
    { name: '김철수', rank: 3, comment: '괜찮았지만 아쉬웠어요.' },
    { name: '이영희', rank: 0, comment: '옆집 개도 쓰겄다.' },
    { name: '홍길동', rank: 5, comment: '정말 좋았어요!' },
    { name: '김철수', rank: 3, comment: '괜찮았지만 아쉬웠어요.' },
    { name: '이영희', rank: 0, comment: '옆집 개도 쓰겄다.' },
    { name: '홍길동', rank: 5, comment: '정말 좋았어요!' },
    { name: '김철수', rank: 3, comment: '괜찮았지만 아쉬웠어요.' },
    { name: '이영희', rank: 0, comment: '옆집 개도 쓰겄다.' },
  ]);
  const showForm = ref(false);

  const toggleForm = () => {
    showForm.value = !showForm.value;
  };

  const addReview = (newReview) => {
    reviews.value.unshift(newReview);
    showForm.value = false;
    console.log(newReview)
  };
  </script>
  
  <style scoped>

  .review-container{
    background: linear-gradient(to bottom, #d5c2b4, #f0e5dd);
    /* position: relative; */
  }
  .recommend-ment{
    text-align: center;
    font-size: 20px;
    padding-top: 30px;
  }
  .btn-toggle{
    position: relative;

    left: 88%; /* 수평 중앙 */
    transform: translate(-50%, -50%); /* 정확히 중앙에 위치시킴 */
    background-color: #d5c2b4;
    /* padding: 10px 20px; */

  }

  </style>
  