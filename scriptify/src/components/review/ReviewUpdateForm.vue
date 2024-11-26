<template>
  <div class="overlay" @click="cancelEdit">
    <div class="review-form" @click.stop>
      <form @submit.prevent="updateReview">
        <div>
          <label class="star" for="rank">별점</label>
          <select v-model="newReview.rank" id="rank">
            <option v-for="n in 6" :key="n" :value="n - 1">{{ n - 1 }}</option>
          </select>
        </div>
        <div>
          <label for="content">코멘트:</label>
          <textarea
            class="content"
            v-model="newReview.content"
            id="content"
            placeholder="코멘트 입력"
            required
          ></textarea>
        </div>
        <div class="btn-container">
          <button class="btn-send" type="submit">수정</button>
          <button class="btn-close" type="button" @click="cancelEdit">
            닫기
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// props로 기존 데이터 받기
const props = defineProps({
  review: {
    type: Object,
    required: true,
  },
});

// emit을 통해 부모에게 이벤트 전송
const emit = defineEmits(["update-review", "cancel-edit"]);

// 기존 데이터와 변경될 데이터 저장
const newReview = ref({
  rank: props.review.rank || 0,
  content: props.review.content || "",
});

// 기존 데이터가 변경되었는지 확인
const originalReview = ref({
  rank: props.review.rank || 0,
  content: props.review.content || "",
});

const updateReview = () => {
  if (
    newReview.value.rank === originalReview.value.rank &&
    newReview.value.content === originalReview.value.content
  ) {
    alert("변경된 내용이 없습니다.");
    return;
  }

  emit("update-review", newReview.value);
  originalReview.value = { ...newReview.value }; // 변경된 데이터 업데이트
  newReview.value.rank = 0;
  newReview.value.content = "";
};

const cancelEdit = () => {
  emit("cancel-edit");
  newReview.value.rank = 0;
  newReview.value.content = "";
};
</script>

<style scoped>
/* 화면 바깥 딤처리 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 딤 처리 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 폼 스타일 */
.review-form {
  position: relative;
  width: 300px;
  padding: 20px;
  background-color: #3a3a3a; /* 어두운 회색 배경 */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1001; /* 다른 콘텐츠보다 위로 */
}

form div {
  margin-bottom: 10px;
}

form label {
  display: block;
  margin-bottom: 5px;
  color: #fff;
}

form input,
form select,
form textarea {
  width: 100%;
  padding: 5px;
  border: 2px ridge #d0d0d0; /* 연한 회색 */
  border-radius: 4px;
  background-color: #333; /* 입력 필드 배경 */
  color: #fff; /* 텍스트 색상 */
}

button {
  display: inline-block;
  padding: 10px;
  background-color: #8a7f73; /* 어두운 베이지색 */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #7a695d;
}

.content {
  height: 50px;
}

.btn-container {
  display: flex;
  justify-content: end;
  gap: 10px;
}

.btn-send {
  background-color: #8a7f73;
}

.btn-send:hover {
  background-color: #7a695d;
}

.btn-close {
  background-color: #e74c3c; /* 빨간색 */
}

.btn-close:hover {
  background-color: #c0392b;
}
</style>
