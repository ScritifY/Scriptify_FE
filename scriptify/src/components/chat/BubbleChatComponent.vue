<!-- BubbleChatComponent.vue -->
<template>
  <div class="chat-container">
    <div v-for="message in messages" :key="message.id">
      <RequestChatComponent 
        v-if="message.type === 'request'" 
        :message="message" 
      />
      <ResponseChatComponent 
        v-else-if="message.type === 'response'" 
        :message="message"
      />
    </div>

    <div v-for="line in lines" :key="line.id">
      <RequestChatLineComponent 
        v-if="line.type === 'line-request'"
        :line-request = "line"
      />
      <ResponseChatLineComponent
        v-else-if="line.type === 'line'" 
        :lines="line"
        />
    </div>
    <div v-for="detail in details" :key="detail.id">
      <RequestChatDetailComponent 
        v-if="detail.type === 'detail-request'"
        :detail-request = "detail"
      />
      <ResponseChatDetailComponent
        v-else-if="detail.type === 'detail'" 
        :detail="detail"
        />
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import RequestChatComponent from './RequestChatComponent.vue';
import ResponseChatComponent from './ResponseChatComponent.vue';
import ResponseChatLineComponent from './ResponseChatLineComponent.vue';
import RequestChatLineComponent from './RequestChatLineComponent.vue';
import RequestChatDetailComponent from './RequestChatDetailComponent.vue';
import ResponseChatDetailComponent from './ResponseChatDetailComponent.vue';

const props = defineProps({
  messages: Array,
  lines: Array,
  details: Array
});

const requestMessages = computed(() => {
  return props.messages.filter(message => message.type === 'request');
});

const responseMessages = computed(() => {
  return props.messages.filter(message => message.type === 'response');
});
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color:beige;
  height: 1500px;
  overflow-y: scroll;
  scroll-behavior: smooth; /* 스크롤 시 부드러운 이동 효과 추가 */
}
</style>
