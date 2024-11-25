<template>
    <div class="home-view">

    <button class = "btn-start" @click="handleButtonClick">
      <font-awesome-icon class = "fa-2x"  :icon="['fas', 'pen-to-square']" />
    </button>

    <InputComponent
      v-if="showInput && isFirst"
      @send-input="handleMessage"
    />
    <SecondInputComponent
      v-else-if="showInput && !isFirst"
      @handle-line="handleLine"
      @handle-scenario-change="handleScenarioChange"
      @handle-detail="handleDetail"
    />
      <div class="chat-container">
        <BubbleChatComponent :messages="messages" />
      </div>

    </div>
    
</template>
  
  <script setup>
  import { ref } from 'vue';
  import InputComponent from '@/components/chat/InputComponent.vue';
  import BubbleChatComponent from '@/components/chat/BubbleChatComponent.vue';
  import SecondInputComponent from '@/components/chat/SecondInputComponent.vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { useChatStore } from '@/stores/chat';
  
  // 채팅 메시지들
  const showInput = ref(false);
  const messages = ref([])
  const isFirst = ref(true)

  const chatStore = useChatStore()

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
  const genreObj = {
    1: '액션',
    2: '애니메이션',
    3: '코미디',
    4: '범죄',
    5: '판타지',
    6: '공포',
    7: '로맨스',
    8: '공상 과학',
    9: '스릴러',
  }
  async function handleMessage(request) {
    try {
      const response = await chatStore.createScenario(request, 'first'); // 반환값 기다림
      const genreId = request.genreId;
      // time: request.time, space: request.space, genre: genreObj[genreId]
      // messages 업데이트
      messages.value.push(
        { messageId: response.data.messageId-1, type: 'request', messageType: response.type, data: request },
        { messageId: response.data.messageId, type: 'response', messageType: response.type, data: response.data }
      );
      console.log('푸쉬후 메시지 벨류',messages.value)
      handleButtonClick()
    } catch (error) {
      console.error('Error while handling message:', error);
    }
  }

  async function handleLine() {
    try {
      const response = await chatStore.createScenario({}, 'line'); 

      messages.value.push(
        { messageId: response.data.messageId-1, type: 'request', messageType: response.type, data: {} },
        { messageId: response.data.messageId, type: 'response', messageType: response.type, data: response.data }
      );
      showInput.value = false;
    } catch (error) {
      console.error('Error while handling message:', error);
    }
  }
  async function handleScenarioChange(request) {
    showInput.value = false; 
    try {
      const response = await chatStore.createScenario(request, 'revise'); 

      messages.value.push(
        { messageId: response.data.messageId-1, type: 'request', messageType: response.type, data: request },
        { messageId: response.data.messageId, type: 'response', messageType: response.type, data: response.data }
      );
      showInput.value = false;
    } catch (error) {
      console.error('Error while handling message:', error);
    }
  }
  async function handleDetail(input) {
    showInput.value = false; 
    try {
      const response = await chatStore.createScenario({}, 'revise');
      messages.value.push(
        { messageId: response.data.messageId-1, type: 'request', messageType: response.type, data:{} },
        { messageId: response.data.messageId, type: 'response', messageType: response.type, data: response.data }
      );
    } catch (error) {
      console.error('Error while handling message:', error);
    }
  }

  </script>
  
  <style scoped>
  .home-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #d5c2b4 ;
  }
  
  button {
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .chat-container {
    width: 100%;
    max-width: 800px;
    background-color: #f0e5dd;
    
  }
  .btn-start{
    background-color: #d5c2b4 ;
  }
  </style>
  
  
