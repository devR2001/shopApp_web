<template>
  <div class="container">
    <div class="tab-buttons">
      <button
        class="tab-button"
        @click="activeTab = 'details'"
        :class="{ active: activeTab === 'details' }"
      >
        Details
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
      <h2>DETAILS</h2>
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
      <h2>FIT</h2>
      <ul>
        <li>Fit: Regular Fit</li>
        <li>Back length: approx. 71 cm in size L</li>
      </ul>
    </div>

    <div v-if="activeTab === 'materialCare'">
      <h2>MATERIAL & CARE</h2>
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

const activeTab = ref("details");
</script>

<style scoped>
.container {
  background-color: #e7e6e6;
  padding: 20px;
}

.tab-content {
  margin-top: 10px;
}

.tab-button {
  background-color: #6d6d6d;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s;
}

.tab-button.active {
  background-color: #b60505;
}

.tab-button.active span {
  color: #fff;
}

.tab-button:hover {
  background-color: #b60505;
}

.tab-buttons {
  margin-top: 10px;
}

.tab-button span {
  color: #b60505;
  font-weight: bold;
}

.tab-button.active span {
  color: #fff;
}
</style>
