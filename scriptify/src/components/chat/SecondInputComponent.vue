<template>
  <div class="second-input-container">
    <!-- 버튼 3개 -->
    <button @click="$emit('handle-line')">대사를 추가하고 싶으신가요?</button>
    <button @click="$emit('handle-scenario-change')">시나리오를 수정하고 싶으신가요?</button>
    <button @click="showDetailInput = true">사건의 세부정보가 필요하신가요?</button>

    <!-- DetailComponent를 동적으로 렌더링 -->
    <DetailComponent 
      v-if="showDetailInput" 
      @send-detail="$emit('send-detail', $event)" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DetailComponent from './DetailComponent.vue';

const showDetailInput = ref(false);
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
  