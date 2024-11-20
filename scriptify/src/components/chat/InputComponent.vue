<template>
  <div class="input-container">
    <label for="message"></label>

    <!-- 시간, 공간, 장르 입력 -->
    <input class="input-box" type="text" v-model="time" placeholder="시대적 배경을 입력해주세요." />
    <input class="input-box" type="text" v-model="space" placeholder="공간적 배경을 넣어주세요." />
    <!-- <input type="text" v-model="genre" placeholder="Genre" /> -->
    <div class="genre-container">
      <!-- <input type="text" v-model="genre" placeholder="Genre" readonly /> -->
      <button class="btn-genre" @click="toggleGenreChoice">장르도 골라주세요!</button>
    </div>
     <!-- GenreChoiceComponent -->
     
     <GenreChoiceComponent v-if="showGenreChoice" @select-genre="setGenre" />
    <button class="btn-send-message" @click="sendMessage">
      <font-awesome-icon class = "fa-2x" :icon="['fas', 'pen']" />
    </button>
  
  </div>
</template>

<script setup>
import { ref } from 'vue';
import GenreChoiceComponent from './GenreChoiceComponent.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
input {
  margin: 7px;
  padding: 5px;
  width: 100%;
  max-width: 300px;
}
.input-container {

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 3px double #f0e5dd;
  /* border: 3px ridge #f0e5dd; */
  background-color: #d5c2b4 ;
  font-size: 1rem;
}
.input-box{

  border-right: none;
  border-left: none;
  border-top: none;
  width: 220px;
  height: 30px;
  /* border-bottom: 3px solid black; */
  font-size: 1rem;
  border: 2px ridge #eea57b;
  color: #d59b69;
  background-color: #f7e5d5;
}
.genre-container{
  width: 236px;
  height: 46px;
  /* border-right: none;
  border-left: none;
  border-top: none;
  border-bottom: 3px solid black; */
  font-size: 1rem;
}
.btn-genre{
  width: 236px;
  height: 40px;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
  border: 2px ridge #eea57b;
  background-color: #f7e5d5;
  color: #9b9b9b;
}
button {
  margin-top: 5px;
  padding: 5px;
  color: white;
  border: none;
  cursor: pointer;
}
.btn-send-message{
  width: 50px;
  /* height: 45px; */
  margin-top: 20px;
  background-color: #414345;
  background-color: #f7e5d5;
  border-radius: 10px;
}
.pencil{


}

</style>
