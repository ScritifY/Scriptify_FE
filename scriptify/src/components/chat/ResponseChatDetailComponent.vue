<!-- ResponseChatLineComponent.vue -->
<template>
  <div class="detail-chat">
    사건의 세부 정보:
    <br />
    <div class="chat-line">
      {{ detail.response.data.content }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  detail: Array,
});
</script>

<style scoped>
.detail-chat {
  margin-top: 10px;
  width: 80%;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
}

.chat-line {
  margin-bottom: 10px;
}
</style>
