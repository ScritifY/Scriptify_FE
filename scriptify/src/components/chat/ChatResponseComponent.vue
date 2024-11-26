<template>
  <div class="chat-container">
    <div v-for="(stage, index) in stages" :key="index" class="chat-message">
      <div class="chat-time">{{ stage.time }}</div>
      <div class="chat-description">
        <strong>{{ stage.name }}</strong
        >: {{ stage.description }}
      </div>
      <div class="chat-characters">
        <strong>등장인물:</strong>
        <ul>
          <li v-for="(character, idx) in stage.characters" :key="idx">
            {{ character.name }} (나이: {{ character.age }}세, 성격:
            {{ character.personality }})
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stages = ref([]);

defineProps({
  newScenario: {
    type: Object,
    required: true,
  },
});

watch(
  () => newScenario,
  (newScenario) => {
    stages.value = newScenario.stages;
  }
);
</script>

<style scoped>
.chat-container {
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  height: 60vh;
  overflow-y: auto;
  margin: 20px auto;
  width: 80%;
}

.chat-message {
  margin-bottom: 20px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 8px;
}

.chat-time {
  font-size: 12px;
  color: #888;
}

.chat-description {
  margin-top: 5px;
  font-size: 14px;
}

.chat-characters {
  margin-top: 10px;
  font-size: 12px;
  color: #555;
}

.chat-characters ul {
  padding-left: 20px;
}

.chat-characters li {
  list-style-type: circle;
}
</style>
