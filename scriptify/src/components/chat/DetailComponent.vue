<template>
    <div class="detail-container">
      <textarea 
        v-model="detailInput" 
        placeholder="세부정보를 입력하세요..." 
        rows="5"
      ></textarea>
      <button @click="sendDetail">전송</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 사용자 입력 데이터를 저장
  const detailInput = ref('');
  const emit = defineEmits(['send-detail']);
  
  // 전송 버튼 클릭 시 입력 데이터를 부모로 전달
  const sendDetail = () => {
    if (!detailInput.value.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }
    // 부모 컴포넌트로 데이터 전달
    emit('send-detail', detailInput.value);
    detailInput.value = ''; // 입력란 초기화
  };
  
  </script>
  
  <style scoped>
  .detail-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  textarea {
    width: 100%;
    font-size: 14px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    align-self: flex-end;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
  }
  
  button:hover {
    background-color: #e0e0e0;
  }
  </style>
  