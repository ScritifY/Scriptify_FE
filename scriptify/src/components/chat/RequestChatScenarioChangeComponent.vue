<template>
  <div class="detail-container">
    <textarea
      v-model="detailInput"
      placeholder="시나리오를 작성해주세요!"
      rows="5"
    ></textarea>
    <button class="btn" @click="handleScenarioChange">
      <font-awesome-icon class="fa-2x" :icon="['far', 'paper-plane']" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const detailInput = ref("");
const emit = defineEmits(["sendInput"]);

const handleScenarioChange = () => {
  if (!detailInput.value.trim()) {
    alert("내용을 입력해주세요.");
    return;
  }

  const request = {
    content: detailInput.value,
  };

  emit("sendInput", request, "revise");
  detailInput.value = "";
};
</script>

<style scoped>
.detail-container {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #d5c2b4;
  border-radius: 5px;
}

textarea {
  font-size: 15px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ebb687;
  color: white;
}

button {
  align-self: flex-end;
  padding: 4px 16px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #ebb687;
}

button:hover {
  background-color: #e0e0e0;
}
</style>
