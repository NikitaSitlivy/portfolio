<script setup lang="ts">
import type { ProfileData } from "../content/profile";

defineProps<{
  item: ProfileData["experience"][number];
}>();
</script>

<template>
  <article class="experience-item">
    <div class="experience-head">
      <h3>{{ item.company }}</h3>
      <span>{{ item.period }}</span>
    </div>
    <p class="experience-role">{{ item.role }}</p>
    <p class="muted">{{ item.description }}</p>
  </article>
</template>
