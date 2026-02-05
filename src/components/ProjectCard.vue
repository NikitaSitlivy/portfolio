<script setup lang="ts">
import Badge from "./Badge.vue";
import Card from "./Card.vue";
import type { ProfileData } from "../content/profile";

defineProps<{
  project: ProfileData["projects"][number];
}>();
</script>

<template>
  <Card>
    <h3>{{ project.title }}</h3>
    <p class="muted">{{ project.description }}</p>
    <div class="badges">
      <Badge v-for="item in project.stack" :key="item" :label="item" />
    </div>
    <ul class="card-bullets">
      <li v-for="item in project.bullets" :key="item">{{ item }}</li>
    </ul>
    <div v-if="project.links.length" class="inline-links">
      <a
        v-for="link in project.links"
        :key="link.label"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noreferrer noopener' : undefined"
      >
        {{ link.label }}
      </a>
    </div>
  </Card>
</template>
