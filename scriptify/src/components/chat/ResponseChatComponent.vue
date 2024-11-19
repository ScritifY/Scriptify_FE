<!-- ResponseChatComponent.vue -->
<template>
    <div class="response-chat">
      <div class="chat-bubble">{{ message }}</div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    message: String,
  });
  </script>
  
  <style scoped>
  .response-chat {
    text-align: left;
  }
  
  .chat-bubble {
    max-width: 70%;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    background-color: #d1e7fd;
    word-wrap: break-word;
  }
  </style>
  