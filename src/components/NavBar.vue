<template>
  <nav class="navbar">
    <div>
      <img
        src="@/assets/sOliver.svg"
        alt="s.Oliver Logo"
        class="logo"
        href="#"
      />
    </div>
    <div class="links">
      <ul>
        <li class="search-input">
          <input type="text" placeholder="Suchen" />
        </li>
        <li class="li-element"><a href="#">Shops</a></li>
        <li class="li-element"><a href="#">Mein Konto</a></li>
        <li class="li-element"><a href="#">Wunschliste</a></li>
        <li class="li-element"><a href="#">Warenkorb</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import "@/assets/style/style.css";
</script>
