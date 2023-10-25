<template>
  <div class="newsletter-form">
    <h2>10% Newsletter-Rabatt</h2>
    <p>
      Abonnieren Sie den Newsletter und sparen Sie 10% bei Ihrem nächsten
      Einkauf.
    </p>
    <div class="form-group">
      <div class="input-wrapper">
        <input class="search-input" type="text" placeholder="Vorname" />
      </div>
      <div class="input-wrapper">
        <input class="search-input" type="text" placeholder="Nachname" />
      </div>
      <div class="input-wrapper">
        <input class="search-input" type="text" placeholder="E-Mail-Adresse" />
      </div>
    </div>
    <button>Abonnieren</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.form-group {
  display: flex;
  justify-content: space-between;
}

.input-wrapper {
  flex: 1;
  padding: 20px;
}
.newsletter-form {
  background-color: #e4e3e3;
  padding: 20px;
  border-radius: 5px;
  text-align: center; /* Hier bleibt die Textzentrierung */
  margin: 0 auto;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 10px;
}

.search-input input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 200px;
  transition: border-color 0.3s;
}

.search-input input:focus {
  border-color: #000;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #aaa;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 3px;
}

button {
  background-color: #b60505;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #000;
}
</style>
