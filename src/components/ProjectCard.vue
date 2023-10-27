<template>
  <div class="card-container" style="height: 450px">
    <div v-bind="containerProps">
      <div v-bind="wrapperProps">
        <div class="cards" style="height: 400px">
          <div
            class="card"
            v-for="item in list"
            :key="item.index"
            @click="openOverlay"
          >
            <img
              :src="require('@/images/Black/Bild1.png')"
              alt="Bild"
              class="card-image"
            />
            <div class="description">{{ name }}</div>
            <div class="price">{{ price }} €</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showOverlay" class="overlay">
      <div class="overlay-content">
        <div class="">
          <div style="height: 400px" class="bordered-div">
            <div class="slider">
              <div v-if="navy">
                <img
                  :src="require(`@/images/Black/${images[currentIndex]}`)"
                  alt="Bild"
                  class="img-responsive"
                  style="max-height: 350px; max-width: 100%"
                />
              </div>
              <div v-if="turquoise">
                <img
                  :src="require(`@/images/Blue/${images[currentIndex]}`)"
                  alt="Bild"
                  class="img-responsive"
                  style="max-height: 350px; max-width: 100%"
                />
              </div>
              <div v-if="olive">
                <img
                  :src="require(`@/images/Gray/${images[currentIndex]}`)"
                  alt="Bild"
                  class="img-responsive"
                  style="max-height: 350px; max-width: 100%"
                />
              </div>
            </div>
            <div class="slider-buttons">
              <button @click="prevSlide">&lt;</button>
              <button @click="nextSlide">&gt;</button>
            </div>

            <div class="description-box">
              <h2>Description</h2>
              <div class="info-box">
                <p>{{ name }}</p>
                <p>Preis: {{ price }} €</p>
                <p>Farbe:</p>

                <button
                  @click="selectNavy"
                  style="width: 40px; height: 40px; border-radius: 50%"
                >
                  <img
                    src="@/images/clothesIcons/navy.webp"
                    alt="navy"
                    style="width: 100%; border-radius: 50%"
                  />
                </button>
                <button
                  @click="selectTurquoise"
                  style="width: 40px; height: 40px; border-radius: 50%"
                >
                  <img
                    src="@/images/clothesIcons/turquoise.webp"
                    alt="turquoise"
                    style="width: 100%; border-radius: 50%"
                  />
                </button>
                <button
                  @click="selectOlive"
                  style="width: 40px; height: 40px; border-radius: 50%"
                >
                  <img
                    src="@/images/clothesIcons/olive.webp"
                    alt="olive"
                    style="width: 100%; border-radius: 50%"
                  />
                </button>

                <p>
                  Größe:
                  <button
                    :class="{ selected: selectedSize === 'S' }"
                    @click="selectSize('S')"
                  >
                    S
                  </button>
                  <button
                    :class="{ selected: selectedSize === 'M' }"
                    @click="selectSize('M')"
                  >
                    M
                  </button>
                  <button
                    :class="{ selected: selectedSize === 'L' }"
                    @click="selectSize('L')"
                  >
                    L
                  </button>
                  <button
                    :class="{ selected: selectedSize === 'XL' }"
                    @click="selectSize('XL')"
                  >
                    XL
                  </button>
                  <button
                    :class="{ selected: selectedSize === 'XXL' }"
                    @click="selectSize('XXL')"
                  >
                    XXL
                  </button>
                  <button
                    :class="{ selected: selectedSize === '3XL' }"
                    @click="selectSize('3XL')"
                  >
                    3XL
                  </button>
                </p>
              </div>
              <button @click="closeOverlay">Schließen</button>
            </div>
          </div>
          <div>
            <div class="info-field">
              <div class="bordered-div">
                <TabView style="width: 100%" />
              </div>
              <div class="bordered-div">
                <div class="footer">
                  <div class="footer-left">{{ name }}</div>
                  <div class="footer-right">
                    <button class="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TabView from "./DetailsView.vue";
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
const showOverlay = ref(false);
const name = ref("");
const price = ref("");
const turquoise = ref(false);
const navy = ref(true);
const olive = ref(false);
const selectedSize = ref("");

const allItems = Array.from(Array(20).keys());

const { list, containerProps, wrapperProps } = useVirtualList(allItems, {
  itemWidth: 200,
});

const selectSize = (size) => {
  selectedSize.value = size;
};

const selectTurquoise = () => {
  turquoise.value = true;
  navy.value = false;
  olive.value = false;
};

const selectNavy = () => {
  turquoise.value = false;
  navy.value = true;
  olive.value = false;
};

const selectOlive = () => {
  turquoise.value = false;
  navy.value = false;
  olive.value = true;
};

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

const fetchProductData = async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    const firstProduct = data.products[0];
    name.value = firstProduct.name;
    price.value = firstProduct.price;
    console.log("data:", data);
  } catch (error) {
    console.error("Fehler beim Abrufen der Produktinformationen:", error);
  }
};

onMounted(() => {
  fetchProductData();
  nextSlide();
});
</script>

<style scoped>
.info-box {
  outline: #ccc;
}

.selected {
  background-color: #b60505;
  color: #fff;
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

.full-width {
  width: 100%;
  margin-top: 100px;
  justify-content: center;
}

.overlay-content {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  max-height: 80vh;
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
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  color: #333;
}

.price {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
  color: #f00;
}

@media (max-width: 768px) {
  .overlay-content {
    max-width: 80%;
  }
}

@media (max-width: 768px) {
  .info-field {
    margin-top: 450px;
    justify-content: center;
  }
}

.info-field {
  justify-content: center;
  width: 100%;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
}

.footer-left {
  flex-grow: 1;
  text-align: left;
}

.add-to-cart {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
  }

  .footer-left {
    text-align: center;
    margin-bottom: 10px;
  }
}

.bordered-div {
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.description-box {
  flex-grow: 1;
  padding: 20px;
}

@media (max-width: 768px) {
  .bordered-div {
    flex-direction: column;
  }

  .description-box {
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
  }
}
</style>
