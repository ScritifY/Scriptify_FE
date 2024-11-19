<template>
    <div class="review-form">
      <h2>리뷰 작성하기</h2>
      <form @submit.prevent="submitReview">
        <div>
          <label for="name">이름:</label>
          <input v-model="newReview.name" type="text" id="name" placeholder="이름 입력" required />
        </div>
        <div>
          <label for="rank">별점 (0 ~ 5):</label>
          <select v-model="newReview.rank" id="rank">
            <option v-for="n in 6" :key="n" :value="n - 1">{{ n - 1 }}</option>
          </select>
        </div>
        <div>
          <label for="comment">코멘트:</label>
          <textarea v-model="newReview.comment" id="comment" placeholder="코멘트 입력" required></textarea>
        </div>
        <button type="submit">작성</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const emit = defineEmits(['submit-review']);
  
  const newReview = ref({
    name: '',
    rank: 0,
    comment: '',
  });
  
  const submitReview = () => {
    if (newReview.value.name && newReview.value.comment) {
      emit('submit-review', { ...newReview.value });
      newReview.value.name = '';
      newReview.value.rank = 0;
      newReview.value.comment = '';
    }
  };
  </script>
  
  <style>
  .review-form {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
    width: 300px;
    margin: 0 auto;
    text-align: left;
  }
  form div {
    margin-bottom: 10px;
  }
  form label {
    display: block;
    margin-bottom: 5px;
  }
  form input,
  form select,
  form textarea {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    display: block;
    margin-top: 10px;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  