<template>
  <div class="home-view">
    <div class="home-header">
      <p class="home-ment">
        <strong>AI 챗봇을 통해 당신만의 시나리오를 완성해보세요</strong> !
      </p>
      <button class="btn-toggle" @click="toggleModal">요청하기</button>
    </div>

    <InputComponent
      v-if="showModal && isFirst"
      @send-input="handleMessage"
      @close-modal="toggleModal"
    />
    <SecondInputComponent
      v-else-if="showModal && !isFirst"
      @send-input="handleMessage"
      @close-modal="toggleModal"
    />
    <div class="chat-container">
      <BubbleChatComponent :messages="messages" />
    </div>
    <Loading v-if="chatStore.isLoading" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import InputComponent from "@/components/chat/InputComponent.vue";
import BubbleChatComponent from "@/components/chat/BubbleChatComponent.vue";
import SecondInputComponent from "@/components/chat/SecondInputComponent.vue";
import { useChatStore } from "@/stores/chat";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";

const messages = ref([]);
const showModal = ref(false);
const isFirst = computed(() => {
  return messages.value.length === 0;
});

const router = useRouter();
const chatStore = useChatStore();
const authStore = useAuthStore();

watch(
  () => authStore.token,
  (newToken) => {
    if (!newToken) {
      router.push({ name: "intro" });
    }
  }
);

onMounted(() => {
  if (!authStore.token) {
    router.push({ name: "intro" });
  }
});

const toggleModal = () => {
  showModal.value = !showModal.value;
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
  toggleModal();

  try {
    const response = await chatStore.createScenario(request, messageType);
    const requestMessage = getRequestMessage(request, response);
    const responseMessage = getResponseMessage(response);

    messages.value.push(requestMessage, responseMessage);
  } catch (error) {
    console.error("Error while handling message:", error);
  }
}
</script>

<style scoped>
/* 전체 컨테이너 */
.home-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #121212; /* 어두운 배경 */
  color: #ffffff; /* 기본 텍스트 흰색 */
}

.home-header {
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 사용 후기 제목 */
.home-ment {
  text-align: center;
  font-size: 20px;
  font-family: "Impact", sans-serif;
}

.btn-toggle {
  background-color: #346eeb;
  color: #ffffff;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-toggle:hover {
  background-color: #555555;
}

/* 채팅 컨테이너 */
.chat-container {
  width: 100%;
  max-width: 1000px;
  padding: 15px;
  border-radius: 10px;
  background-color: #333; /* 채팅 박스 배경 */
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5); /* 그림자 효과 */
  height: 85vh; /* 최대 높이 제한 */
}
</style>
