<template>
  <div class="container">
    <div class="tab-buttons">
      <button
        class="tab-button"
        @click="activeTab = 'details'"
        :class="{ active: activeTab === 'details' }"
      >
        DETAILS
      </button>
      <button
        class="tab-button"
        @click="activeTab = 'fit'"
        :class="{ active: activeTab === 'fit' }"
      >
        FIT
      </button>
      <button
        class="tab-button"
        @click="activeTab = 'materialCare'"
        :class="{ active: activeTab === 'materialCare' }"
      >
        MATERIAL & CARE
      </button>
    </div>

    <div v-if="activeTab === 'details'">
      <h2>{{ $t("DetailsView.details.elementHeader") }}</h2>
      <ul>
        <li>{{ $t("DetailsView.details.elementCollar") }}</li>
        <li>{{ $t("DetailsView.details.elementFastener") }}</li>
        <li>{{ $t("DetailsView.details.elementSleeves") }}</li>
        <li>{{ $t("DetailsView.details.elementPockets") }}</li>
        <li>{{ $t("DetailsView.details.elementDetails") }}</li>
        <li>{{ $t("DetailsView.details.elementHem") }}</li>
        <li>{{ $t("DetailsView.details.elementEAN") }}</li>
        <li>{{ $t("DetailsView.details.elementArtNum") }}</li>
      </ul>
    </div>

    <div v-if="activeTab === 'fit'">
      <h2>{{ $t("DetailsView.fit.elementHeader") }}</h2>
      <ul>
        <li>{{ $t("DetailsView.fit.elementFit") }}</li>
        <li>{{ $t("DetailsView.fit.elementbl") }}</li>
      </ul>
    </div>

    <div v-if="activeTab === 'materialCare'">
      {{ $t("DetailsView.m&c.elementHeader") }}
      <h2></h2>
      <ul>
        <p>{{ $t("DetailsView.m&c.elementMaterial") }}</p>
        <p>{{ $t("DetailsView.m&c.elementQuality") }}</p>
        <p>{{ $t("DetailsView.m&c.elementFilling") }}</p>
        <p>{{ $t("DetailsView.m&c.elementLevel") }}</p>
      </ul>
      <h3>{{ $t("DetailsView.m&c.elementComposition") }}</h3>
      <p>{{ $t("DetailsView.m&c.elementOuter") }}</p>
      <h3>{{ $t("DetailsView.m&c.elementCare") }}</h3>
      <p>{{ $t("DetailsView.m&c.elementChlore") }}</p>
      <p>{{ $t("DetailsView.m&c.elementWash") }}</p>
      <p>{{ $t("DetailsView.m&c.elementDry") }}</p>
      <p>{{ $t("DetailsView.m&c.elementIron") }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "@/assets/style/style.css";

const activeTab = ref("details");
</script>
