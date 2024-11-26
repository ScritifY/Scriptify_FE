<template>
  <div class="overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <div class="btn-container">
        <button class="btn-close" @click="closeModal">X</button>
      </div>
      <div class="input-container">
        <button class="btn-action" @click="handleAddLine">
          인물별 대표 대사를 추천 받고 싶으신가요?
        </button>
        <button class="btn-action" @click="handleScenarioDetail">
          주요 사건의 세부 정보가 필요하신가요?
        </button>
        <button class="btn-action" @click="handleClickRevise">
          AI가 생성한 시나리오를 수정하고 싶으신가요?
        </button>

        <RequestChatScenarioChangeComponent
          v-if="showInput"
          @send-input="handleScenarioRevise"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RequestChatScenarioChangeComponent from "./RequestChatScenarioChangeComponent.vue";
const showInput = ref(false);
const emit = defineEmits(["sendInput"]);

const handleAddLine = () => {
  emit("sendInput", {}, "line");
};
const handleScenarioDetail = () => {
  emit("sendInput", {}, "detail");
};
const handleScenarioRevise = (request, messageType) => {
  emit("sendInput", request, messageType);
};

const handleClickRevise = () => {
  showInput.value = true;
};

// 모달 닫기
const closeModal = () => {
  emit("close-modal");
};
</script>

<style scoped>
/* 모달 오버레이 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); /* 어두운 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 모달 내용 */
.modal {
  position: relative;
  width: 400px;
  padding: 20px;
  background-color: #2a2a2a; /* 어두운 배경 */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1001; /* 다른 콘텐츠보다 위로 */
  color: #fff; /* 텍스트 흰색 */
}

/* 입력 컨테이너 */
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background-color: #333333; /* 어두운 배경 */
  font-size: 1rem;
  border-radius: 8px;
}

/* 버튼 스타일 */
.btn-action {
  width: 100%;
  height: 40px;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid #555555;
  background-color: #444444;
  color: #d5d5d5;
  border-radius: 5px;
  cursor: pointer;
}

/* 버튼 컨테이너 */
.btn-container {
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
}

/* 닫기 버튼 스타일 */
.btn-close {
  width: 20px;
  height: 20px;
  background-color: #e50914;
  border: none;
  color: white;
  margin-bottom: 10px;
  border-radius: 99%;
}

.btn-action:hover,
.btn-close:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>
