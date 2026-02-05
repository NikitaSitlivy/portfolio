<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  id: string;
  title: string;
  subtitle?: string;
}>();

const root = ref<HTMLElement | null>(null);

onMounted(() => {
  const el = root.value;
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || typeof IntersectionObserver === "undefined") {
    el.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -12% 0px" }
  );

  observer.observe(el);
});
</script>

<template>
  <section :id="props.id" ref="root" class="section reveal container">
    <header class="section-head">
      <h2>{{ props.title }}</h2>
      <p v-if="props.subtitle">{{ props.subtitle }}</p>
    </header>
    <slot />
  </section>
</template>
