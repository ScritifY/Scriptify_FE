<template>
    <div class="detail-container">
      <textarea 

        v-model="detailInput" 
        placeholder="시나리오를 작성해주세요!" 
        rows="5"
      ></textarea>
      <button class="btn" @click="handleScenarioChange">
        <font-awesome-icon class = "fa-2x" :icon="['far', 'paper-plane']" /></button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  // 사용자 입력 데이터를 저장
  const detailInput = ref('');
  const emit = defineEmits(['handle-scenario-change']);
  
  // 전송 버튼 클릭 시 입력 데이터를 부모로 전달
  const handleScenarioChange = () => {
    if (!detailInput.value.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }
    console.log(detailInput.value)
    // 부모 컴포넌트로 데이터 전달
    emit('handle-scenario-change', detailInput.value);
    detailInput.value = ''; // 입력란 초기화
  };
  
  </script>
  
  <style scoped>
  .detail-container {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* padding: 10px; */
    background-color: #d5c2b4;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
  }
  
  textarea {
    /* width: 100%; */
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
  