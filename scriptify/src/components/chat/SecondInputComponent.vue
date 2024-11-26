<template>
  <div class="second-input-container">
    <button @click="handleAddLine">대사를 추가하고 싶으신가요?</button>
    <button @click="handleClickRevise">시나리오를 수정하고 싶으신가요?</button>
    <button @click="handleScenarioDetail">
      사건의 세부정보가 필요하신가요?
    </button>
    <RequestChatScenarioChangeComponent
      v-if="showInput"
      @send-input="handleScenarioRevise"
    />
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
</script>

<style scoped>
.second-input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 300px;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #ebb687;
}

button:hover {
  background-color: #e0e0e0;
}
</style>
