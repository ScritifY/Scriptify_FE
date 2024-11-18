<template>
    <div class="home-view">
      <!-- 버튼 클릭 시 InputComponent가 보이도록 토글 -->
      <button @click="showInput = !showInput">Start Chat</button>
  
      <!-- InputComponent는 showInput이 true일 때만 보임 -->
      <InputComponent v-if="showInput" @sendMessage="handleMessage"/>
  
      <!-- 채팅 메시지들을 표시 -->
      <div class="chat-container">
        <ChatResponseComponent v-for="(message, index) in chatMessages" :key="index" :message="message" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import InputComponent from './InputComponent.vue';
  import ChatResponseComponent from '@/components/chat/ChatResponseComponent.vue';
import axios from 'axios';
  
  // 채팅 메시지들
  const chatMessages = ref([]);
  const showInput = ref(false);
  
  // 메시지를 처리하는 함수
  const handleMessage = () => {
    const url = 'tempurl'

    axios
        .post(url,
            {
                
            }
        )
  }
//   const handleMessage = async (input) => {
//     // 1. 백엔드 요청 (예시로 fetch 사용)
//     // 2. 응답 받기
//     const data = await response.json();
  
//     // 3. 받은 응답을 채팅 메시지 배열에 추가
//     chatMessages.value.push({ type: 'request', text: input.message });
//     chatMessages.value.push({ type: 'response', text: data.response });
  
//     // 4. 채팅이 끝나면 InputComponent를 숨김
//     showInput.value = false;
//   };
  </script>
  
  <style scoped>
  .home-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  button {
    margin-bottom: 20px;
  }
  
  .chat-container {
    width: 100%;
    max-width: 600px;
    height: 400px;
    overflow-y: scroll;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 20px;
    background-color: #f9f9f9;
  }
  </style>
  