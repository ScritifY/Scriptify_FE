<template>
  <div class="response-chat">
    <!-- Scenario 표시 -->
    <div v-if="props.message.messageType === 'first' || props.message.messageType === 'revise'" class="scenario-section">
      <h2>발단</h2>
      <p><strong>Scenery:</strong> {{ message.scenario.opening.scenery }}</p>
      <p><strong>Content:</strong> {{ message.scenario.opening.content }}</p>
      <br>
      <h2>전개</h2>
      <p><strong>Scenery:</strong> {{ message.scenario.prologue.scenery }}</p>
      <p><strong>Content:</strong> {{ message.scenario.prologue.content }}</p>
      <br>
      <h2>위기</h2>
      <p><strong>Scenery:</strong> {{ message.scenario.conflict.scenery }}</p>
      <p><strong>Content:</strong> {{ message.scenario.conflict.content }}</p>
      <br>
      <h2>절정</h2>
      <p><strong>Scenery:</strong> {{ message.scenario.climax.scenery }}</p>
      <p><strong>Content:</strong> {{ message.scenario.climax.content }}</p>
      <br>
      <h2>결말</h2>
      <p><strong>Scenery:</strong> {{ message.scenario.conclusion.scenery }}</p>
      <p><strong>Content:</strong> {{ message.scenario.conclusion.content }}</p>
    </div>
    <div v-else-if="props.message.messageType === 'line'">
      <div v-for="line in message.lines" :key="line.id">
        <p><strong>{{ line.name }}:</strong> {{ line.content }}</p>
      </div>
    </div>
    <div v-else-if="props.message.messageType === 'detail'">
      {{ message.content }}
    </div>
    <div v-else>메시지 타입이 잘못되었습니다</div>

    <!-- Characters 배열 표시 -->
    <div v-if="props.message.messageType === 'first' || props.message.messageType === 'revise'" class="characters-section">
      <h2 class="character-title">등장인물</h2>
      <div v-for="character in message.characters" :key="character.id" class="character">
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
import { defineProps } from 'vue';

const props = defineProps({
  message: Object,
});
const rawMessage = props.message.data.content
const message = JSON.parse(rawMessage)

console.log('응답데스네', props.message)
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
