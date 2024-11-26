<template>
  <div class="overlay" @click="closeModal">
    <div class="modal" @click.stop>
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
          placeholder="공간적 배경을 입력해주세요."
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
        <div class="btn-container">
          <button class="btn-send-message" @click="handleSendMessage">
            요청
          </button>
          <button class="btn-close" @click="closeModal">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import GenreChoiceComponent from "./GenreChoiceComponent.vue";
import { GENRE_MAP } from "@/constants/constant";

const time = ref("");
const space = ref("");
const genre = ref("");
const showGenreChoice = ref(false);
const emit = defineEmits(["send-input", "close-modal"]);

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

// 모달을 닫는 함수
const closeModal = () => {
  emit("close-modal");
};
</script>

<style scoped>
/* 모달 오버레이 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); /* 어두운 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 모달 내용 */
.modal {
  position: relative;
  width: 400px;
  padding: 20px;
  background-color: #2a2a2a; /* 어두운 배경 */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1001; /* 다른 콘텐츠보다 위로 */
  color: #fff; /* 텍스트 흰색 */
}

/* 입력 컨테이너 */
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background-color: #333333; /* 어두운 배경 */
  font-size: 1rem;
  border-radius: 8px;
}

/* 입력 박스 스타일 */
.input-box {
  padding: 10px;
  width: 100%;
  height: 40px;
  font-size: 1rem;
  border: 2px solid #555555;
  background-color: #444444;
  color: #d5d5d5;
  border-radius: 5px;
}

/* 장르 선택 버튼 */
.genre-container {
  width: 100%;
  height: 46px;
  font-size: 1rem;
}

.btn-genre {
  width: 100%;
  height: 40px;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid #555555;
  background-color: #444444;
  color: #d5d5d5;
  border-radius: 5px;
  cursor: pointer;
}

.btn-container {
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
}

/* 전송 버튼 */
.btn-send-message {
  background-color: #346eeb;
  border-radius: 10px;
  border: none;
  color: white;
  padding: 10px;
}

.btn-close {
  background-color: #e50914;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 10px;
}

.btn-send-message:hover,
.btn-close:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>
