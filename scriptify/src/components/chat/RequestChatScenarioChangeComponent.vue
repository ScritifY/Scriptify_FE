<template>
  <div class="detail-container">
    <textarea
      v-model="detailInput"
      placeholder="개선사항을 입력해주세요!"
      rows="5"
    ></textarea>
    <button class="btn" @click="handleScenarioChange">요청</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #333333; /* 어두운 배경 */
  border-radius: 8px;
  font-size: 1rem;
  color: #fff;
}

textarea {
  font-size: 15px;
  padding: 10px;
  border: 2px solid #555555;
  border-radius: 5px;
  background-color: #444444;
  color: #d5d5d5;
  resize: none;
  min-height: 100px;
}

/* 버튼 스타일 */
button {
  align-self: flex-end;
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: #346eeb; /* 파란색 */
  color: white;
  border-radius: 8px;
}

button:hover {
  background-color: #285db3; /* 클릭 시 어두운 파란색 */
}
</style>
