<template>
  <div class="input-container">
    <input
      class="input-box"
      type="text"
      v-model="time"
      placeholder="시대적 배경을 입력해주세요."
    />
    <input
      class="input-box"
      type="text"
      v-model="space"
      placeholder="공간적 배경을 넣어주세요."
    />
    <div class="genre-container">
      <button class="btn-genre" @click="toggleGenreChoice">
        {{ genre ? GENRE_MAP[genre] : "장르를 골라주세요!" }}
      </button>
    </div>

    <GenreChoiceComponent
      v-if="showGenreChoice"
      @select-genre="handleChoiceGenre"
    />
    <button class="btn-send-message" @click="handleSendMessage">
      <font-awesome-icon class="fa-2x" :icon="['fas', 'pen']" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import GenreChoiceComponent from "./GenreChoiceComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { GENRE_MAP } from "@/constants/constant";

const time = ref("");
const space = ref("");
const genre = ref("");
const showGenreChoice = ref(false);
const emit = defineEmits(["send-input"]);

const toggleGenreChoice = () => {
  showGenreChoice.value = !showGenreChoice.value;
};

const handleChoiceGenre = (selectedGenre) => {
  genre.value = selectedGenre;
  showGenreChoice.value = false;
};

const handleSendMessage = () => {
  const isEmpty = !time.value || !space.value || !genre.value;
  if (isEmpty) {
    alert("모든 항목을 입력해주세요.");
    return;
  }

  const input = {
    time: time.value,
    space: space.value,
    genreId: genre.value,
  };

  emit("send-input", input, "first");

  time.value = "";
  space.value = "";
  genre.value = "";
};
</script>

<style scoped>
input {
  margin: 7px;
  padding: 5px;
  width: 100%;
  max-width: 300px;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 3px double #f0e5dd;
  background-color: #d5c2b4;
  font-size: 1rem;
}
.input-box {
  border-right: none;
  border-left: none;
  border-top: none;
  width: 220px;
  height: 30px;
  font-size: 1rem;
  border: 2px ridge #eea57b;
  color: #d59b69;
  background-color: #f7e5d5;
}
.genre-container {
  width: 236px;
  height: 46px;
  font-size: 1rem;
}
.btn-genre {
  width: 236px;
  height: 40px;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 2px ridge #eea57b;
  background-color: #f7e5d5;
  color: #9b9b9b;
}
button {
  margin-top: 5px;
  padding: 5px;
  color: white;
  border: none;
  cursor: pointer;
}
.btn-send-message {
  width: 50px;
  margin-top: 20px;
  background-color: #414345;
  background-color: #f7e5d5;
  border-radius: 10px;
}
</style>
