<script setup lang="ts">
import { computed } from "vue";
import { useLocale } from "../composables/useLocale";
import { useTheme } from "../composables/useTheme";

const { isDark, toggleTheme } = useTheme();
const { isRu } = useLocale();
const ariaLabel = computed(() => {
  if (isRu.value) return isDark.value ? "Включить светлую тему" : "Включить темную тему";
  return isDark.value ? "Enable light theme" : "Enable dark theme";
});
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    @click="toggleTheme"
    :aria-label="ariaLabel"
    :aria-pressed="isDark"
  >
    <span class="theme-knob" />
  </button>
</template>
