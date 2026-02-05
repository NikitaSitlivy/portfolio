<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

withDefaults(
  defineProps<{
    ariaLabel?: string;
  }>(),
  {
    ariaLabel: "Наверх"
  }
);

const visible = ref(false);

function onScroll() {
  visible.value = window.scrollY > 620;
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <button class="to-top" :class="{ 'is-visible': visible }" type="button" :aria-label="ariaLabel" @click="scrollTop">
    ↑
  </button>
</template>
