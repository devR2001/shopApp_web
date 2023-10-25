<template>
  <footer class="footer">
    <div class="footer-links">
      <div class="footer-section">
        <h3>SERVICE</h3>
        <ul>
          <li><a href="#">Kontakt</a></li>
          <li><a href="#">Hilfe & FAQ</a></li>
          <li><a href="#">Größenberatung</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>ÜBER S.OLIVER</h3>
        <ul>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">s.Oliver Gruppe</a></li>
          <li><a href="#">Karriere</a></li>
          <li><a href="#">Wunschliste</a></li>
          <li><a href="#">Nachhaltigkeit</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>ZAHLUNG</h3>
        <ul>
          <li><a href="#">Kreditkarte</a></li>
          <li><a href="#">PayPal</a></li>
          <li><a href="#">Vorkasse</a></li>
          <li><a href="#">SSL-Protokoll</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>VERSAND</h3>
        <ul>
          <li><a href="#">Online-Verfolgungssystem</a></li>
          <li><a href="#">DHL International</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.footer-section {
  flex: 1;
  margin: 10px;
  text-align: left;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 500px) {
  .footer-links {
    flex-direction: column;
  }
}
</style>
