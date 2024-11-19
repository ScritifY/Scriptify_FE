<!-- RequestChatComponent.vue -->
<template>
    <div class="request-chat">
      <div class="chat-bubble">{{ message }}</div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    message: String,
  });
  </script>
  
  <style scoped>
  .request-chat {
    text-align: right;
  }
  
  .chat-bubble {
    max-width: 70%;
    padding: 10px;
    /* margin: 5px; */
    margin-left: 20%;
    border-radius: 10px;
    background-color: #d0f4de;
    word-wrap: break-word;
  }
  </style>
  