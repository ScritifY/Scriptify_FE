<template>
  <div class="input-container">
    <label for="message"></label>

    <!-- 시간, 공간, 장르 입력 -->
    <input class="input-box" type="text" v-model="time" placeholder="시대적 배경을 입력해주세요." />
    <input class="input-box" type="text" v-model="space" placeholder="공간적 배경을 넣어주세요." />
    <!-- <input type="text" v-model="genre" placeholder="Genre" /> -->
    <div class="genre-container">
      <!-- <input type="text" v-model="genre" placeholder="Genre" readonly /> -->
      <button class="btn-genre" @click="toggleGenreChoice">장르도 골라볼까요?</button>
    </div>
     <!-- GenreChoiceComponent -->
     
     <GenreChoiceComponent v-if="showGenreChoice" @select-genre="setGenre" />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import GenreChoiceComponent from './GenreChoiceComponent.vue';

const time = ref('');
const space = ref('');
const genre = ref('');
const emit = defineEmits(['send-input'])
const showGenreChoice = ref(false);

const toggleGenreChoice = () => {
  showGenreChoice.value = !showGenreChoice.value;
  
};
const setGenre = (selectedGenre) => {
  genre.value = selectedGenre;
  showGenreChoice.value = false; // 장르 선택 UI 닫기
  console.log(selectedGenre)
};
// 메시지를 보내는 함수
const sendMessage = () => {
  // 입력값을 부모 컴포넌트로 전달
  const input = {
    time: time.value,
    space: space.value,
    genre: genre.value
  };

  // 메시지 전송 EMIT을 정의 
  emit('send-input', input);

  // 입력값 초기화
  time.value = '';
  space.value = '';
  genre.value = '';
};
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 3px solid black;
  background-color: #414345;
}
.input-box{
  border-right: none;
  border-left: none;
  border-top: none;
  width: 220px;
  height: 30px;
  border-bottom: 3px solid black;
  font-size: 1rem;

}
input {
  margin: 10px;
  padding: 5px;
  width: 100%;
  max-width: 300px;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.btn-genre{
  color: #fff;
  background-color: #222;
  padding: 17px 60px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
}
</style>
