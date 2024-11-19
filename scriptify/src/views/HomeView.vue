<template>
    <div class="home-view">

    <button @click="handleButtonClick">Start Chat</button>

    <InputComponent
      v-if="showInput && isFirst"
      @send-input="handleMessage"
    />
    <SecondInputComponent
      v-else-if="showInput && !isFirst"
      @handle-line="handleLine"
      @handle-scenario-change="handleScenarioChange"
      @send-detail="handleDetail"
    />
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
  import SecondInputComponent from '@/components/chat/SecondInputComponent.vue';

  
  // 채팅 메시지들
  const chatMessages = ref([]);
  const showInput = ref(false);
  const messages = ref([])
  const cnt = ref(0)
  const isFirst = ref(true)

  // 메시지를 처리하는 함수
  const handleButtonClick = () => {
    if (!showInput.value) {
      // 첫 번째 버튼 클릭 시 InputComponent 표시
      showInput.value = true;
    } else {
      // 두 번째 버튼 클릭 시 SecondInputComponent로 전환
      isFirst.value = false;
    }
  };
  const handleMessage = (input) => {
    isFirst.value = false
    showInput.value = false;
    const url = 'tempurl'
    console.log(url)
    console.log(input);
    
    messages.value.push(
      { id: 1, type: 'request', content: '안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.안녕하세요, 요청 메시지입니다.'+cnt.value },
      { id: 2, type: 'response', content: '안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.안녕하세요, 응답 메시지입니다.' },
    )
    cnt.value += 1
    console.log(messages.value)
  }
  const handleLine = (input) => {
    console.log('대사')
    showInput.value = false; // 컴포넌트 숨김

  }
  const handleScenarioChange = (input) => {
    console.log(input)
    showInput.value = false; // 컴포넌트 숨김

  }
  const handleDetail = (input) => {
    console.log(input)
    showInput.value = false; // 컴포넌트 숨김

  }
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
    /* height: 500px; */
    overflow-y: scroll;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 20px;
    background-color:beige;
  }
  </style>
  
  
