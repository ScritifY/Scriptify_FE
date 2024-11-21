<!-- RequestChatComponent.vue -->
<template>
    <div class="request-chat">
      <div class="chat-bubble">
        <div >Time: {{ `${message.time}` }} </div>
        <div >Space: {{ message.space }}</div>
        <div >Genre: {{ message.genre }}</div>
      </div>
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
    color: #FFB182	;
  }

  </style>
  