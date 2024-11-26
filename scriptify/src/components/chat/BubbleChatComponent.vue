<template>
  <div class="chat-wrapper" ref="chatWrapper">
    <div v-for="message in messages" :key="message.messageId">
      <RequestChatComponent
        v-if="message.type === 'request'"
        :message="message"
      />
      <ResponseChatComponent
        v-else-if="message.type === 'response'"
        :message="message"
      />
    </div>
  </div>
</template>

<script setup>
import { onUpdated, ref } from "vue";
import RequestChatComponent from "./RequestChatComponent.vue";
import ResponseChatComponent from "./ResponseChatComponent.vue";

const props = defineProps({
  messages: Array,
});

const chatWrapper = ref(null);

// 새로운 메시지가 추가되었을 때 스크롤을 최하단으로 이동시키는 함수
const scrollToBottom = () => {
  if (chatWrapper.value) {
    chatWrapper.value.scrollTop = chatWrapper.value.scrollHeight;
  }
};

// 메시지가 변경될 때마다 스크롤을 최하단으로 이동
onUpdated(() => {
  scrollToBottom();
});
</script>

<style scoped>
.chat-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-radius: 10px;
  height: 100%;
  background-color: #1e1e1e; /* 채팅 박스 배경 */
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5); /* 그림자 효과 */
  overflow-y: auto;
  scroll-behavior: smooth; /* 스크롤 시 부드러운 이동 효과 추가 */
}

/* 스크롤바 스타일 */
.chat-wrapper::-webkit-scrollbar {
  width: 8px;
}

.chat-wrapper::-webkit-scrollbar-thumb {
  background-color: #444444; /* 스크롤바 색상 */
  border-radius: 5px;
}

.chat-wrapper::-webkit-scrollbar-thumb:hover {
  background-color: #346eeb; /* 호버 시 강조 색상 */
}

.chat-wrapper::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #1e1e1e; /* 트랙 색상 */
}
</style>
