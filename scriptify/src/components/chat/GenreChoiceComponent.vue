<template>
    <div class="genre-choice">
      <div class="grid">
        <button class="genre-btn"
          v-for="(genre, index) in genres"
          :key="index"
          @click="selectGenre(genre.value)"
        >
          {{ genre.label }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineEmits } from 'vue';
  
  const genres = [
    { value: 'action', label: '액션' },
    { value: 'animation', label: '애니메이션' },
    { value: 'comedy', label: '코미디' },
    { value: 'crime', label: '범죄' },
    { value: 'fantasy', label: '판타지' },
    { value: 'horror', label: '공포' },
    { value: 'romance', label: '로맨스' },
    { value: 'sf', label: '공상 과학' },
    { value: 'thriller', label: '스릴러' },
  ];
  
  const emit = defineEmits(['select-genre']);
  
  // 선택된 장르 전달 함수
  const selectGenre = (genre) => {
    emit('select-genre', genre);
  };
  </script>
  
  <style scoped>
  .genre-choice {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  
  button {
    padding: 15px;
    font-size: 14px;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #e0e0e0;
  }
  .genre-btn{
    background-color: #9f8d80;
  }
  </style>
  