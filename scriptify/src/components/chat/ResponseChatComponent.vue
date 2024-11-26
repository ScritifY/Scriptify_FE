<template>
  <div class="response-chat">
    <div
      v-if="
        props.message.messageType === 'first' ||
        props.message.messageType === 'revise'
      "
      class="scenario-section"
    >
      <p v-if="props.message.messageType === 'first'" class="sub-title">
        시나리오 생성
      </p>
      <p v-else class="sub-title">시나리오 수정</p>
      <br />
      <br />
      <h2>발단</h2>
      <br />
      <p>{{ message.scenario.opening.scenery }}</p>
      <br />
      <p>{{ message.scenario.opening.content }}</p>
      <br />
      <h2>전개</h2>
      <br />
      <p>{{ message.scenario.prologue.scenery }}</p>
      <br />
      <p>{{ message.scenario.prologue.content }}</p>
      <br />
      <h2>위기</h2>
      <br />
      <p>{{ message.scenario.conflict.scenery }}</p>
      <br />
      <p>{{ message.scenario.conflict.content }}</p>
      <br />
      <h2>절정</h2>
      <br />
      <p>{{ message.scenario.climax.scenery }}</p>
      <br />
      <p>{{ message.scenario.climax.content }}</p>
      <br />
      <h2>결말</h2>
      <br />
      <p>{{ message.scenario.conclusion.scenery }}</p>
      <br />
      <p>{{ message.scenario.conclusion.content }}</p>
      <br />
      <br />
    </div>
    <div v-else-if="props.message.messageType === 'line'">
      <p class="sub-title">인물 별 대표 대사</p>
      <br />
      <div v-for="line in message.lines" :key="line.id" class="line">
        <p>
          <strong>{{ line.name }}:</strong> {{ line.content }}
        </p>
      </div>
    </div>
    <div v-else-if="props.message.messageType === 'detail'">
      <p class="sub-title">사건 세부 묘사</p>
      <br />
      <p>{{ message.content }}</p>
    </div>
    <div v-else>메시지 타입이 잘못되었습니다</div>

    <div
      v-if="
        props.message.messageType === 'first' ||
        props.message.messageType === 'revise'
      "
      class="characters-section"
    >
      <h2 class="character-title">등장인물</h2>
      <br />
      <div
        v-for="character in message.characters"
        :key="character.id"
        class="character"
      >
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
const props = defineProps({
  message: Object,
});

const rawMessage = props.message.data.content;
const message = JSON.parse(rawMessage);
</script>

<style scoped>
.response-chat {
  width: 80%;
  padding: 20px;
  background-color: #ccc;
  border-radius: 10px;
  color: #000;
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

.sub-title {
  color: chocolate;
  font-size: 1.3rem;
}

.character {
  margin-bottom: 15px;
  border: 1px solid black;
  padding: 10px;
  background-color: #e6e6e6;
  border-radius: 5px;
}

.line {
  margin-bottom: 15px;
  border: 1px solid black;
  padding: 10px;
  background-color: #e6e6e6;
  border-radius: 5px;
}

.character p {
  margin: 5px 0;
}

h2 {
  color: #0a6ecd;
}

.character-title {
  color: #cc47ad;
}
</style>
