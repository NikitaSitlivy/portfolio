<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useLocale } from "../composables/useLocale";
import LanguageToggle from "./LanguageToggle.vue";
import ThemeToggle from "./ThemeToggle.vue";

const scrolled = ref(false);
const ready = ref(false);
const activeSection = ref("highlights");
const sections = ["highlights", "projects", "experience", "skills", "contact"];
const { isRu } = useLocale();
const navLabel = computed(() => ({
  highlights: isRu.value ? "Обо мне" : "Highlights",
  projects: isRu.value ? "Проекты" : "Projects",
  experience: isRu.value ? "Опыт" : "Experience",
  skills: isRu.value ? "Навыки" : "Skills",
  contact: isRu.value ? "Контакты" : "Contact"
}));
const ariaLabel = computed(() => (isRu.value ? "Главная навигация" : "Main navigation"));

function onScroll() {
  scrolled.value = window.scrollY > 24;

  const offset = 140;
  let current = sections[0];
  for (const id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.offsetTop - offset <= window.scrollY) {
      current = id;
    }
  }

  const pageBottom = window.scrollY + window.innerHeight;
  const documentBottom = document.documentElement.scrollHeight;
  if (documentBottom - pageBottom < 24) {
    current = sections[sections.length - 1];
  }

  activeSection.value = current;
}

function onBrandClick() {
  window.scrollTo({ top: 0, behavior: "auto" });
}

onMounted(() => {
  requestAnimationFrame(() => {
    ready.value = true;
  });
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header class="navbar" :class="{ 'is-scrolled': scrolled, 'is-ready': ready }">
    <div class="container nav-inner">
      <a class="brand-link" href="#top" aria-label="Nikita Sitlivy" @click.prevent="onBrandClick">
        <svg class="brand-mark" viewBox="0 0 48 48" role="img" aria-hidden="true">
          <circle cx="24" cy="24" r="23" />
          <path d="M14 31V17h3l14 10V17h3v14h-3L17 21v10h-3z" />
        </svg>
        <span class="brand-text">Nikita Sitlivy</span>
      </a>
      <nav :aria-label="ariaLabel">
        <a href="#highlights" :class="{ active: activeSection === 'highlights' }">{{ navLabel.highlights }}</a>
        <a href="#projects" :class="{ active: activeSection === 'projects' }">{{ navLabel.projects }}</a>
        <a href="#experience" :class="{ active: activeSection === 'experience' }">{{ navLabel.experience }}</a>
        <a href="#skills" :class="{ active: activeSection === 'skills' }">{{ navLabel.skills }}</a>
        <a href="#contact" :class="{ active: activeSection === 'contact' }">{{ navLabel.contact }}</a>
      </nav>
      <div class="nav-controls">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
