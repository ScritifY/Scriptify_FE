<template>
    <div class="review-form">

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
          <textarea class="comment" v-model="newReview.comment" id="comment" placeholder="코멘트 입력" required></textarea>
        </div>
        <div class="btn-container">
          <button class="btn-send" type="submit">
            <font-awesome-icon class = "fa-2x" :icon="['far', 'paper-plane']" />
          </button>
        </div>
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
  
  <style scoped>
  .review-form {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
    width: 300px;
    margin: 0 auto;
    text-align: left;
    background-color: #f0e5dd;
    height: 300px;
  }
  form div {
    margin-bottom: 10px;
  }
  form label {
    display: block;
    margin-bottom: 5px;
    border: 1px ridge bisque;
  }
  form input,
  form select,
  form textarea {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    border: 2px ridge bisque;
    
    
  }
  button {
    display: block;
    margin-top: 10px;
    padding: 10px;
    background-color: #9f8d80;;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

  }
  /* button:hover {
    background-color: #9f8d80;;
  } */
  .comment{
    height: 50px;
  }

  .btn-container {
    display: flex;
    justify-content: end;
  }

  .btn-send {
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn-send:hover {
    background-color: #7a695d;
  }
  </style>
  