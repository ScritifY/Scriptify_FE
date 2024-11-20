<template>
    <div class="review-board">
      <div v-for="(review, index) in reviews" :key="index" class="review-item">
        <div class="review-left">
          <strong>{{ review.name }}</strong>
        </div>
        <div class="review-center">
          <div class="stars">
            <span v-for="star in 5" :key="star" class="star">
              {{ star <= review.rank ? '★' : '☆' }}
            </span>
          </div>
        </div>
        <div class="review-right">
          <p>{{ review.comment }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    reviews: {
      type: Array,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .review-board {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .review-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-family: "Jua", sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 30px;
  }
  
  .review-left {
    flex: 1;
    text-align: left;
  }
  
  .review-center {
    flex: 1;
    text-align: center;
  }
  
  .stars {
    font-size: 20px;
    color: gold;
  }
  
  .review-right {
    flex: 2;
    text-align: left;
  }
  </style>
  