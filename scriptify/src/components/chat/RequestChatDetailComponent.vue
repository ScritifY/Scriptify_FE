<!-- RequestChatComponent.vue -->
<template>
    <div class="request-detail-chat">
      <div class="chat-box">
       사건을 자세하게 묘사해줘!
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    detail: Object,
  });
  </script>
  
  <style scoped>
  .request-detail-chat {
    display: flex; /* 플렉스박스 사용 */
    flex-direction: column;
    align-items: flex-end; /* 모든 요소를 오른쪽 정렬 */
    margin-top: 10px;
  }
  
  .chat-box {
    max-width: 50%;
    padding: 10px;
    /* margin: 5px; */
    margin-left: 20%;
    border-radius: 10px;
    background-color: white;
    word-wrap: break-word;
    text-align: left;
    color: #FFB182	;
  }

  </style>
  