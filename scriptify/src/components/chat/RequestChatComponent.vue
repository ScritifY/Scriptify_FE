<!-- RequestChatComponent.vue -->
<template>
  <div class="request-chat">
    <div v-if="message.messageType === 'first'" class="chat-bubble">
      <div>Time: {{ message.data.time }}</div>
      <div>Space: {{ message.data.space }}</div>
      <div>Genre: {{ message.data.genre }}</div>
    </div>
    <div v-else-if="message.messageType === 'revise'" class="chat-bubble">
      <div>Content: {{ message.data.content }}</div>
    </div>
    <div v-else-if="message.messageType === 'line'" class="chat-bubble">
      <div>Content: 등장인물 별 대사를 추천해줘</div>
    </div>
    <div v-else-if="message.messageType === 'detail'" class="chat-bubble">
      <div>Content: 사건의 세부 묘사를 해줘</div>
    </div>
    <div v-else>메시지 타입이 잘못되었습니다.</div>
  </div>
</template>

<script setup>
defineProps({
  message: Object,
});
</script>

<style scoped>
.request-chat {
  display: flex; /* 플렉스박스 사용 */
  flex-direction: column;
  align-items: flex-end; /* 모든 요소를 오른쪽 정렬 */
}

.chat-bubble {
  max-width: 50%;
  padding: 10px;
  /* margin: 5px; */
  margin-left: 20%;
  border-radius: 10px;
  background-color: white;
  word-wrap: break-word;
  text-align: left;
  color: #ffb182;
}
</style>
