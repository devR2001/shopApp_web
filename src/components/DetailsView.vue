<template>
  <div class="container">
    <div class="tab-buttons">
      <button
        class="tab-button"
        @click="activeTab = 'details'"
        :class="{ active: activeTab === 'details' }"
      >
        {{ $t("DetailsView.details") }}
      </button>
      <button
        class="tab-button"
        @click="activeTab = 'fit'"
        :class="{ active: activeTab === 'fit' }"
      >
        {{ $t("DetailsView.fit") }}
      </button>
      <button
        class="tab-button"
        @click="activeTab = 'materialCare'"
        :class="{ active: activeTab === 'materialCare' }"
      >
        {{ $t("DetailsView.m&c") }}
      </button>
    </div>

    <div v-if="activeTab === 'details'">
      <h2>{{ $t("DetailsView.details") }}</h2>
      <p>
        Collar: stand-up collar <br />
        Fastener: zip <br />
        Sleeves: long sleeves <br />
        Pockets: inside pocket <br />
        Details: logo <br />
        Hem: elasticated hem <br />
        EAN: 4099973786727 <br />
        Article Number: 2131770.6290.S
      </p>
    </div>

    <div v-if="activeTab === 'fit'">
      <h2>{{ $t("DetailsView.fit") }}</h2>
      <ul>
        <li>Fit: Regular Fit</li>
        <li>Back length: approx. 71 cm in size L</li>
      </ul>
    </div>

    <div v-if="activeTab === 'materialCare'">
      {{ $t("DetailsView.m&c") }}
      <h2></h2>
      <ul>
        <li>Material: woven fabric</li>
        <li>Quality: soft</li>
        <li>Filling: slightly padded</li>
        <li>Level of warmth: Slightly warm</li>
      </ul>
      <h3>MATERIAL COMPOSITION</h3>
      <p>Outer fabric: 100% Polyester</p>
      <h3>CARE INSTRUCTIONS</h3>
      <ul>
        <li>Do not chlore</li>
        <li>Gentle wash cycle 30°</li>
        <li>No dry cleaning</li>
        <li>Do not iron</li>
        <li>Tumble with reduced thermical pressure</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "@/assets/style/style.css";

const activeTab = ref("details");
</script>
