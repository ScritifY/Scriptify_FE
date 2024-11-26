<!-- RequestChatComponent.vue -->
<template>
  <div class="request-line-chat">
    <div class="chat-box">
      {{ scenario.content }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  scenario: Object,
});
</script>

<style scoped>
.request-line-chat {
  display: flex; /* 플렉스박스 사용 */
  flex-direction: column;
  align-items: flex-end; /* 모든 요소를 오른쪽 정렬 */
  margin-top: 10px;
}

.chat-box {
  max-width: 50%;
  padding: 10px;
  margin-left: 20%;
  border-radius: 10px;
  background-color: white;
  word-wrap: break-word;
  text-align: left;
  color: #ffb182;
}
</style>
