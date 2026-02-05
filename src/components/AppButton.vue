<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
    external?: boolean;
    ariaLabel?: string;
  }>(),
  {
    href: "",
    variant: "primary",
    external: false,
    ariaLabel: ""
  }
);
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="btn"
    :class="`btn-${variant}`"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noreferrer noopener' : undefined"
    :aria-label="ariaLabel || undefined"
  >
    <slot />
  </a>
</template>
