import { computed, ref } from "vue";

export type Theme = "light" | "dark";

const THEME_KEY = "portfolio-theme";
const theme = ref<Theme>("light");
let initialized = false;

function applyTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  theme.value = next;
}

function preferredTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function initTheme() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  const saved = window.localStorage.getItem(THEME_KEY) as Theme | null;
  applyTheme(saved ?? preferredTheme());
}

export function useTheme() {
  const isDark = computed(() => theme.value === "dark");

  function toggleTheme() {
    const next: Theme = theme.value === "dark" ? "light" : "dark";
    applyTheme(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_KEY, next);
    }
  }

  return {
    isDark,
    toggleTheme
  };
}

