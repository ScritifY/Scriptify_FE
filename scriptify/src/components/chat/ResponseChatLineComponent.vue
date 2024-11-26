<!-- ResponseChatLineComponent.vue -->
<template>
  <div class="line-chat">
    <div
      v-for="line in lines.response.data.lines"
      :key="line.id"
      class="chat-line"
    >
      <p>
        <strong>{{ line.name }}:</strong> {{ line.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  lines: Array,
});
</script>

<style scoped>
.line-chat {
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
