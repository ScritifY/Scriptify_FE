<template>
    <div class="home-view">
      <!-- 버튼 클릭 시 InputComponent가 보이도록 토글 -->
      <button @click="showInput = !showInput">Start Chat</button>
  
      <!-- InputComponent는 showInput이 true일 때만 보임 -->
      <InputComponent v-if="showInput" @send-input="handleMessage"/>
  
      <!-- 채팅 메시지들을 표시 -->
      <div class="chat-container">
        <BubbleChatComponent :messages="messages"/>
      </div>
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import InputComponent from '@/components/chat/InputComponent.vue';
  import BubbleChatComponent from '@/components/chat/BubbleChatComponent.vue';
  
  // 채팅 메시지들
  const chatMessages = ref([]);
  const showInput = ref(false);
  const messages = ref([])
  const cnt = ref(0)

  // 메시지를 처리하는 함수
  const handleMessage = (input) => {

    showInput.value = false;
    const url = 'tempurl'
    console.log(url)
    console.log(input)
    // messages.value = [
    // { id: 1, type: 'request', content: '안녕하세요, 요청 메시지입니다.' },
    // { id: 2, type: 'response', content: '안녕하세요, 응답 메시지입니다.' },
    // ];
    messages.value.push(
      { id: 1, type: 'request', content: '안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.'+cnt.value },
      { id: 2, type: 'response', content: '안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.' },
    )
    cnt.value += 1
    console.log(messages.value)
    // axios
    //     .post(url,
    //         {
                
    //         }
    //     )

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
    height: 85%;
    overflow-y: scroll;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 20px;
    background-color:beige;
  }
  </style>
  
  
