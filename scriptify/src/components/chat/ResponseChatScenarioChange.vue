<template>
    <div class="response-chat">
      <div class="scenario-section">
        <h2>발단</h2>
        <p><strong>Scenery:</strong> {{ scenario.response.data.scenario.opening.scenery }}</p>
        <p><strong>Content:</strong> {{ scenario.response.data.scenario.opening.content }}</p>
        <br>
        <h2>전개</h2>
        <p><strong>Scenery:</strong> {{ scenario.response.data.scenario.prologue.scenery }}</p>
        <p><strong>Content:</strong> {{ scenario.response.data.scenario.prologue.content }}</p>
        <br>
        <h2>위기</h2>
        <p><strong>Scenery:</strong> {{ scenario.response.data.scenario.conflict.scenery }}</p>
        <p><strong>Content:</strong> {{ scenario.response.data.scenario.conflict.content }}</p>
        <br>
        <h2>절정</h2>
        <p><strong>Scenery:</strong> {{ scenario.response.data.scenario.climax.scenery }}</p>
        <p><strong>Content:</strong> {{ scenario.response.data.scenario.climax.content }}</p>
        <br>
        <h2>결말</h2>
        <p><strong>Scenery:</strong> {{ scenario.response.data.scenario.conclusion.scenery }}</p>
        <p><strong>Content:</strong> {{ scenario.response.data.scenario.conclusion.content }}</p>
      </div>
  
      <div class="characters-section">
        <h2 class="character-title">등장인물</h2>
        <div v-for="character in scenario.response.data.characters" :key="character.id" class="character">
          <p><strong>이름:</strong> {{ character.name }}</p>
          <p><strong>나이:</strong> {{ character.age }}</p>
          <p><strong>성별:</strong> {{ character.gender }}</p>
          <p><strong>외모:</strong> {{ character.appearance }}</p>
          <p><strong>특징:</strong> {{ character.personality }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    scenario: Object,
  });
  </script>
  
  <style scoped>
  .response-chat {
    width: 80%;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 10px
  }
  
  .scenario-section {
    margin-bottom: 20px;
  }
  
  .scenario-section h3 {
    margin-top: 10px;
  }
  
  .characters-section {
    margin-top: 20px;
  }
  
  .character {
    margin-bottom: 15px;
  
  }
  
  .character p {
    margin: 5px 0;
  }
  h2{
    color:#0A6ECD	;
  }
  .character-title{
    color: #CC47AD;
  }
  </style>
  