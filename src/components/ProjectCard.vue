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
              <button class="tab-button" @click="prevSlide">&lt;</button>
              <button class="tab-button" @click="nextSlide">&gt;</button>
            </div>

            <div class="description-box">
              <h2>Description</h2>
              <div class="info-box">
                <p>{{ name }}</p>
                <p>Preis: {{ price }} €</p>
                <p>Farbe: {{ selectedColor }}</p>

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
                <div>
                  <p v-if="availableSizes1color">
                    Verfügbare Größen:
                    <span v-if="Array.isArray(productData[0].sizes)">
                      {{ productData[1].sizes.join(", ") }}
                    </span>
                    <span v-else>Keine verfügbaren Größen</span>
                  </p>
                  <p v-if="availableSizes2color">
                    Verfügbare Größen:
                    <span v-if="Array.isArray(productData[0].sizes)">
                      {{ productData[2].sizes.join(", ") }}
                    </span>
                    <span v-else>Keine verfügbaren Größen</span>
                  </p>
                  <p v-if="availableSizes3color">
                    Verfügbare Größen:
                    <span v-if="Array.isArray(productData[0].sizes)">
                      {{ productData[0].sizes.join(", ") }}
                    </span>
                    <span v-else>Keine verfügbaren Größen</span>
                  </p>
                </div>
                <p>
                  Größe:
                  <button
                    class="tab-button"
                    :class="{ selected: selectedSize === 'S' }"
                    @click="selectSize('S')"
                  >
                    S
                  </button>
                  <button
                    class="tab-button"
                    :class="{ selected: selectedSize === 'M' }"
                    @click="selectSize('M')"
                  >
                    M
                  </button>
                  <button
                    class="tab-button"
                    :class="{ selected: selectedSize === 'L' }"
                    @click="selectSize('L')"
                  >
                    L
                  </button>
                  <button
                    class="tab-button"
                    :class="{ selected: selectedSize === 'XL' }"
                    @click="selectSize('XL')"
                  >
                    XL
                  </button>
                  <button
                    class="tab-button"
                    :class="{ selected: selectedSize === 'XXL' }"
                    @click="selectSize('XXL')"
                  >
                    XXL
                  </button>
                  <button
                    class="tab-button"
                    :class="{ selected: selectedSize === '3XL' }"
                    @click="selectSize('3XL')"
                  >
                    3XL
                  </button>
                </p>
              </div>
              <button class="tab-button" @click="closeOverlay">
                Schließen
              </button>
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
import "@/assets/style/style.css";

import TabView from "./DetailsView.vue";
import { useVirtualList } from "@vueuse/core";
import { ref, onMounted } from "vue";

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
const selectedColor = ref("navy");
const productData = ref([]);
const availableSizes1color = ref(true);
const availableSizes2color = ref(false);
const availableSizes3color = ref(false);

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
  selectedColor.value = "turquoise";
  availableSizes1color.value = false;
  availableSizes2color.value = true;
  availableSizes3color.value = false;
};

const selectNavy = () => {
  turquoise.value = false;
  navy.value = true;
  olive.value = false;
  selectedColor.value = "navy";
  availableSizes1color.value = true;
  availableSizes2color.value = false;
  availableSizes3color.value = false;
};

const selectOlive = () => {
  turquoise.value = false;
  navy.value = false;
  olive.value = true;
  selectedColor.value = "olive";
  availableSizes1color.value = false;
  availableSizes2color.value = false;
  availableSizes3color.value = true;
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

    // Speichere die Produktinformationen im Ref-Objekt
    productData.value = data.products;

    console.log("data:", data);
    data.products.forEach((product) => {
      console.log(
        `Produkt: ${product.colors} ` + "Verfügbare Größen:",
        product.sizes
      );
    });
  } catch (error) {
    console.error("Fehler beim Abrufen der Produktinformationen:", error);
  }
};

onMounted(() => {
  fetchProductData();
  nextSlide();
});
</script>
