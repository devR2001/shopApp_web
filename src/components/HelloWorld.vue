<template>
  <div>
    <div class="slider">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="{ slide: index === currentIndex }"
      >
        <img
          :src="require(`@/images/${image}`)"
          alt="Bild"
          class="img-responsive"
        />
      </div>
    </div>
    <button @click="prevSlide">&lt;</button>
    <button @click="openModal">Shop new Things</button>
    <button @click="nextSlide">&gt;</button>
  </div>
  <div v-if="modalWindow">
    <div class="greyModal modalToggle"></div>
    <div class="modalContent modalToggle">
      This is the content of my modal dialog
      <button @click="closeModal">X</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const images = ["Bild.jpg", "Bild2.jpg", "Bild3.jpg"];
const currentIndex = ref(0);
const modalWindow = ref(false);

function openModal() {
  modalWindow.value = true;
}

function closeModal() {
  modalWindow.value = false;
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const nextSlide = () => {
  if (currentIndex.value < images.length - 1) {
    currentIndex.value++;
  }
};

onMounted(() => {
  const timer = setInterval(() => {
    nextSlide();
  }, 4000);

  onBeforeUnmount(() => {
    clearInterval(timer);
  });
});
</script>

<style scoped>
.slider {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.slide {
  flex: 0 0 100%;
  transition: transform 0.5s;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  margin: 10px;
  font-size: 24px;
}

div.greyModal {
  opacity: 0.7;
  background-color: grey;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

div.modalContent {
  opacity: 1;
  position: fixed;
  width: 75%;
  left: 50%;
  margin-left: -37.5%;
  height: 100px;
  background-color: white;
  border: solid 4px black;
  border-color: black;
}
</style>
