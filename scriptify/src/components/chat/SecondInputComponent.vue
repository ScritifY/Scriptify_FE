<template>
  <div class="second-input-container">
    <!-- 버튼 3개 -->
    <button @click="$emit('handle-line')">대사를 추가하고 싶으신가요?</button>
    <button @click="showInput = true">시나리오를 수정하고 싶으신가요?</button>
    <button @click="$emit('handle-detail')">사건의 세부정보가 필요하신가요?</button>
    <!-- DetailComponent를 동적으로 렌더링 -->
    <RequestChatScenarioChangeComponent 
      v-if="showInput" 
      @handle-change-scenario="$emit('handle-change-scenario', $event)" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RequestChatScenarioChangeComponent from './RequestChatScenarioChangeComponent.vue';

const showInput = ref(false);
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
  