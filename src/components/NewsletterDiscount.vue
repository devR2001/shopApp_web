<template>
  <div class="newsletter-form">
    <div class="custom-heading">{{ $t("NewsletterDiscount.discount") }}</div>
    <p>
      {{ $t("NewsletterDiscount.advantage") }}
    </p>
    <div class="form-group">
      <div class="custom-input">
        <input type="text" placeholder="Vorname" />
      </div>
      <div class="custom-input">
        <input type="text" placeholder="Nachname" />
      </div>
      <div class="custom-input">
        <input type="text" placeholder="E-Mail-Adresse" />
      </div>
    </div>
    <button class="custom-button">
      {{ $t("NewsletterDiscount.subscribe") }}
    </button>
  </div>
</template>

<script setup lang="ts">
import "@/assets/style/style.css";
</script>
