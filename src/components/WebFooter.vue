<template>
  <footer class="footer-web">
    <div class="footer-web-links">
      <div class="footer-web-section">
        <h3>{{ $t("WebFooter.service") }}</h3>
        <ul>
          <li>
            <a href="#">{{ $t("WebFooter.contact") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("WebFooter.help") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("WebFooter.size") }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-web-section">
        <h3>{{ $t("WebFooter.more") }}</h3>
        <ul>
          <li>
            <a href="#">{{ $t("WebFooter.newsletter") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("WebFooter.sog") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("WebFooter.career") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("WebFooter.wishlist") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("WebFooter.sustainability") }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-web-section">
        <h3>{{ $t("WebFooter.pay") }}</h3>
        <ul>
          <li>
            <a href="#">{{ $t("WebFooter.credit") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("WebFooter.paypal") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("WebFooter.payia") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("WebFooter.protocol") }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-web-section">
        <h3>{{ $t("WebFooter.shipment") }}</h3>
        <ul>
          <li>
            <a href="#">{{ $t("WebFooter.ots") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("WebFooter.dhl") }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import "@/assets/style/style.css";
</script>
