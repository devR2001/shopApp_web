<template>
  <div class="card-container" style="height: 450px">
    <div v-bind="containerProps">
      <div v-bind="wrapperProps">
        <div class="cards" style="height: 400px">
          <div class="card" v-for="item in list" :key="item.index">
            <img
              :src="require('@/images/Black/Bild1.png')"
              alt="Bild"
              class="card-image"
            />
            <div class="description">{{ description }}</div>
            <div class="price">{{ price }} €</div>
            <div>
              <button @click="openOverlay">Mehr Informationen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showOverlay" class="overlay">
      <div class="overlay-content">
        <div class="overlay-left">
          <div class="slider">
            <img
              :src="require(`@/images/Black/${images[currentIndex]}`)"
              alt="Bild"
              class="img-responsive"
              style="max-height: 350px; max-width: 100%"
            />
          </div>
          <div class="slider-buttons">
            <button @click="prevSlide">&lt;</button>
            <button @click="nextSlide">&gt;</button>
          </div>
        </div>
        <div class="overlay-right">
          <h2>Overlay-Inhalt</h2>
          <div class="info-box">
            <p>{{ description }}</p>
            <p>Preis: {{ price }} €</p>
            <p>Farbe:</p>

            <button style="width: 40px; height: 40px; border-radius: 50%">
              <img
                src="@/images/clothesIcons/navy.webp"
                alt="navy"
                style="width: 100%; border-radius: 50%"
              />
            </button>
            <button style="width: 40px; height: 40px; border-radius: 50%">
              <img
                src="@/images/clothesIcons/turquoise.webp"
                alt="turquoise"
                style="width: 100%; border-radius: 50%"
              />
            </button>
            <button style="width: 40px; height: 40px; border-radius: 50%">
              <img
                src="@/images/clothesIcons/olive.webp"
                alt="olive"
                style="width: 100%; border-radius: 50%"
              />
            </button>

            <p>
              Größe: <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
              <button>3XL</button>
            </p>
          </div>
          <button @click="closeOverlay">Schließen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVirtualList } from "@vueuse/core";
import { ref, onMounted, onBeforeUnmount } from "vue";

const images = [
  "Bild1.png",
  "Bild2.png",
  "Bild3.png",
  "Bild4.png",
  "Bild5.png",
];
const currentIndex = ref(0);
const description = ref("Beschreibung hier einfügen");
const price = ref(0.0);
const showOverlay = ref(false);

const allItems = Array.from(Array(20).keys());

const { list, containerProps, wrapperProps } = useVirtualList(allItems, {
  itemWidth: 200,
});

const openOverlay = () => {
  showOverlay.value = true;
};

const closeOverlay = () => {
  showOverlay.value = false;
};

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

<style scoped>
.info-box {
  outline: #ccc;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.overlay-content {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.overlay-content h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.overlay-content button {
  margin: 10px;
}

.overlay-content input {
  width: 100%;
  padding: 10px;
  margin: 10px;
}

.overlay-content p {
  font-size: 16px;
}

.card-container {
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 300px;
  white-space: nowrap;
  padding: 10px;
}

.cards {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
}

.card {
  flex: 0 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  min-width: 180px;
  max-width: 200px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  max-height: 100%;
}

.description {
  font-size: 14px;
  margin: 10px 0;
}

.price {
  font-size: 18px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .overlay-content {
    max-width: 90%;
  }
}
</style>
