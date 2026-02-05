import { computed, ref } from "vue";
import type { Locale } from "../content/profile";

const LOCALE_KEY = "portfolio-locale";
const locale = ref<Locale>("ru");
let initialized = false;

function applyLocale(next: Locale) {
  locale.value = next;
  document.documentElement.lang = next;
}

function browserLocale(): Locale {
  const lang = window.navigator.language.toLowerCase();
  return lang.startsWith("ru") ? "ru" : "en";
}

export function initLocale() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  const saved = window.localStorage.getItem(LOCALE_KEY) as Locale | null;
  applyLocale(saved ?? browserLocale());
}

export function useLocale() {
  const isRu = computed(() => locale.value === "ru");

  function setLocale(next: Locale) {
    applyLocale(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_KEY, next);
    }
  }

  function toggleLocale() {
    setLocale(locale.value === "ru" ? "en" : "ru");
  }

  return {
    locale,
    isRu,
    setLocale,
    toggleLocale
  };
}
