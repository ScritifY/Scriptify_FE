<template>
  <div class="genre-choice">
    <div class="grid">
      <button
        class="genre-btn"
        v-for="(genre, index) in GENRE_MAP"
        :key="index"
        @click="selectGenre(index)"
      >
        {{ genre }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { GENRE_MAP } from "@/constants/constant";

const emit = defineEmits(["selectGenre"]);

const selectGenre = (genreId) => {
  emit("selectGenre", genreId);
};
</script>

<style scoped>
.genre-choice {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

button {
  padding: 15px;
  font-size: 14px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
}
.genre-btn {
  background-color: #9f8d80;
}
</style>
