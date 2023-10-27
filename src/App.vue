<template>
  <NavBar />
  <HomePage />
  <Card />
  <News />
  <Footer />
</template>

<script setup lang="ts">
import HomePage from "./components/HomePage.vue";
import Footer from "./components/WebFooter.vue";
import NavBar from "./components/NavBar.vue";
import News from "./components/NewsletterDiscount.vue";
import Card from "./components/ProjectCard.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
