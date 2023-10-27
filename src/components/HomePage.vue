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
          class="img-responsive img-image"
        />
      </div>
    </div>
    <button class="so-button" @click="prevSlide" style="margin-right: 20px">
      &lt;
    </button>
    <button class="so-button" @click="nextSlide">&gt;</button>
  </div>
</template>

<script setup lang="ts">
import "@/assets/style/style.css";

import { ref, onMounted, onBeforeUnmount } from "vue";

const images = ["Bild.jpg", "Bild2.jpg", "Bild3.jpg"];
const currentIndex = ref(0);

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = images.length - 1;
  }
};

const nextSlide = () => {
  if (currentIndex.value < images.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
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
