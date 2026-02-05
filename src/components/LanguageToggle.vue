<script setup lang="ts">
import { useLocale } from "../composables/useLocale";

const { locale, setLocale } = useLocale();
</script>

<template>
  <div class="lang-toggle" :class="locale === 'ru' ? 'is-ru' : 'is-en'" role="group" aria-label="Language switch">
    <span class="lang-thumb" aria-hidden="true" />
    <button
      class="lang-item"
      :class="{ active: locale === 'ru' }"
      type="button"
      :aria-pressed="locale === 'ru'"
      @click="setLocale('ru')"
    >
      RU
    </button>
    <button
      class="lang-item"
      :class="{ active: locale === 'en' }"
      type="button"
      :aria-pressed="locale === 'en'"
      @click="setLocale('en')"
    >
      EN
    </button>
  </div>
</template>
