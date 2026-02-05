import { createApp } from "vue";
import App from "./App.vue";
import { initLocale } from "./composables/useLocale";
import { initTheme } from "./composables/useTheme";
import "./styles/global.css";

initLocale();
initTheme();
createApp(App).mount("#app");
