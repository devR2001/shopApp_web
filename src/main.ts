import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: true,
  locale: "en",
  messages: {
    en: require("./locales/en.json"),
  },
});

createApp(App).use(i18n).mount("#app");
