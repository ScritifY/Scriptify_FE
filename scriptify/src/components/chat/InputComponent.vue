<template>
  <div class="input-container">
    <label for="message">Your Message</label>
    <input type="text" v-model="message" id="message" placeholder="Type your message..." />

    <!-- 시간, 공간, 장르 입력 -->
    <input type="text" v-model="time" placeholder="Time" />
    <input type="text" v-model="space" placeholder="Space" />
    <input type="text" v-model="genre" placeholder="Genre" />

    <button @click="sendMessage">Send</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('');
const time = ref('');
const space = ref('');
const genre = ref('');

// 메시지를 보내는 함수
const sendMessage = () => {
  // 입력값을 부모 컴포넌트로 전달
  const input = {
    message: message.value,
    time: time.value,
    space: space.value,
    genre: genre.value
  };

  // 메시지 전송
  emit('sendMessage', input);

  // 입력값 초기화
  message.value = '';
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
  border: 1px solid #ccc;
  background-color: #fff;
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
</style>
