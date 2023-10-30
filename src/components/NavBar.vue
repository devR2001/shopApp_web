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
        <li class="li-element">
          <a href="#"> {{ $t("NavBar.shops") }} </a>
        </li>
        <li class="li-element">
          <a href="#">{{ $t("NavBar.acc") }}</a>
        </li>
        <li class="li-element">
          <a href="#">{{ $t("WebFooter.wishlist") }}</a>
        </li>
        <li class="li-element">
          <a href="#">{{ $t("NavBar.sc") }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import "@/assets/style/style.css";
</script>
