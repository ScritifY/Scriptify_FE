<template>
  <div class="home-view">
    <button class="btn-start" @click="handleButtonClick">
      <font-awesome-icon class="fa-2x" :icon="['fas', 'pen-to-square']" />
    </button>

    <InputComponent v-if="showInput && isFirst" @send-input="handleMessage" />
    <SecondInputComponent
      v-else-if="showInput && !isFirst"
      @send-input="handleMessage"
    />
    <div class="chat-container">
      <BubbleChatComponent :messages="messages" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputComponent from "@/components/chat/InputComponent.vue";
import BubbleChatComponent from "@/components/chat/BubbleChatComponent.vue";
import SecondInputComponent from "@/components/chat/SecondInputComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useChatStore } from "@/stores/chat";

const messages = ref([]);
const showInput = ref(false);
const isFirst = ref(true);

const chatStore = useChatStore();

const handleButtonClick = () => {
  if (!showInput.value) {
    showInput.value = true;
  } else {
    isFirst.value = false;
  }
};

function getRequestMessage(request, response) {
  return {
    messageId: response.data.messageId - 1,
    type: "request",
    messageType: response.type,
    data: request,
  };
}

function getResponseMessage(response) {
  return {
    messageId: response.data.messageId,
    type: "response",
    messageType: response.type,
    data: response.data,
  };
}

async function handleMessage(request, messageType) {
  const isFirstMessage = messageType === "first";
  const isSecondMessage = !isFirstMessage;

  if (isSecondMessage) {
    showInput.value = false;
  }

  try {
    const response = await chatStore.createScenario(request, messageType);
    const requestMessage = getRequestMessage(request, response);
    const responseMessage = getResponseMessage(response);

    messages.value.push(requestMessage, responseMessage);

    if (isFirstMessage) {
      handleButtonClick();
    }
  } catch (error) {
    console.error("Error while handling message:", error);
  }
}
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #d5c2b4;
}

button {
  margin-bottom: 20px;
  cursor: pointer;
}

.chat-container {
  width: 100%;
  max-width: 800px;
  background-color: #f0e5dd;
}

.btn-start {
  background-color: #d5c2b4;
}
</style>
