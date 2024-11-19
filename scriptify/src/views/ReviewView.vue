<template>
    <div id="app">
      <h1>여러분의 사용 후기를 남겨주세요!</h1>
      <br>
      <button @click="toggleForm">
      {{ showForm ? '작성 취소' : '리뷰 작성하기' }}
      </button>
      <ReviewFormComponent v-if="showForm" @submit-review="addReview" />
      <ReviewBoard :reviews="reviews" />
    </div>
  </template>
  
  <script setup>
  import ReviewBoard from '@/components/review/ReviewBoard.vue';
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
  };
  </script>
  
  <style>
  </style>
  