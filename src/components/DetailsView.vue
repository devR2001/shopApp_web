<template>
  <div class="container">
    <div class="tab-buttons">
      <button @click="activeTab = 'details'">Details</button>
      <button @click="activeTab = 'fit'">FIT</button>
      <button @click="activeTab = 'materialCare'">MATERIAL & CARE</button>
    </div>

    <div v-if="activeTab === 'details'">
      <h2>DETAILS</h2>
      <ul>
        <li>Collar: stand-up collar</li>
        <li>Fastener: zip</li>
        <li>Sleeves: long sleeves</li>
        <li>Pockets: inside pocket</li>
        <li>Details: logo</li>
        <li>Hem: elasticated hem</li>
        <li>EAN: 4099973786727</li>
        <li>Article Number: 2131770.6290.S</li>
      </ul>
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
  background-color: #bebebe;
  padding: 20px;
}

.tab-content {
  margin-top: 10px;
}
</style>
