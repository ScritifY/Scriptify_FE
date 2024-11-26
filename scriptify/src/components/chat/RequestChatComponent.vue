<template>
  <div class="request-chat">
    <div v-if="message.messageType === 'first'" class="chat-bubble">
      <div>시간적 배경: {{ message.data.time }}</div>
      <div>공간적 배경: {{ message.data.space }}</div>
      <div>영화 장르: {{ GENRE_MAP[message.data.genreId] }}</div>
    </div>
    <div v-else-if="message.messageType === 'revise'" class="chat-bubble">
      <div>{{ message.data.content }}</div>
    </div>
    <div v-else-if="message.messageType === 'line'" class="chat-bubble">
      <div>등장인물 별 대사를 추천해줘</div>
    </div>
    <div v-else-if="message.messageType === 'detail'" class="chat-bubble">
      <div>사건의 세부 묘사를 해줘</div>
    </div>
    <div v-else class="chat-bubble">메시지 타입이 잘못되었습니다.</div>
  </div>
</template>

<script setup>
import { GENRE_MAP } from "@/constants/constant";

defineProps({
  message: Object,
});
</script>

<style scoped>
.request-chat {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.chat-bubble {
  max-width: 50%;
  padding: 10px;
  margin-left: 20%;
  border-radius: 10px;
  background-color: white;
  word-wrap: break-word;
  text-align: left;
  background-color: #ffcc00;
  color: #000;
}
</style>
