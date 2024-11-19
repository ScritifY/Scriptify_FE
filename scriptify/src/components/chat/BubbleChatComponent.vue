<!-- BubbleChatComponent.vue -->
<template>
  <!-- <div class="chat-container"> -->
    <!-- RequestChatComponent는 'request' 타입의 메시지만 렌더링 -->
    <!-- <RequestChatComponent
      v-for="message in requestMessages"
      :key="message.id"
      :message="message.content"
    /> -->
    <!-- ResponseChatComponent는 'response' 타입의 메시지만 렌더링 -->
    <!-- <ResponseChatComponent
      v-for="message in responseMessages"
      :key="message.id"
      :message="message.content"
    />
  </div> -->
  <div class="chat-container">
    <!-- 모든 메시지를 순서대로 렌더링 -->
    <div v-for="message in messages" :key="message.id">
      <!-- 요청 메시지일 경우 RequestChatComponent 렌더링 -->
      <RequestChatComponent 
        v-if="message.type === 'request'" 
        :message="message.content" 
      />
      <!-- 응답 메시지일 경우 ResponseChatComponent 렌더링 -->
      <ResponseChatComponent 
        v-else-if="message.type === 'response'" 
        :message="message.content" 
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import RequestChatComponent from './RequestChatComponent.vue';
import ResponseChatComponent from './ResponseChatComponent.vue';

// 부모에서 받은 메시지 목록을 props로 받는다
const props = defineProps({
  messages: Array,
});

// 'request' 타입의 메시지만 필터링
const requestMessages = computed(() => {
  console.log('오냐?')
  return props.messages.filter(message => message.type === 'request');
});

// 'response' 타입의 메시지만 필터링
const responseMessages = computed(() => {
  return props.messages.filter(message => message.type === 'response');
});
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color:beige;
  height: 1500px;
  overflow-y: scroll;
}
</style>
