<script setup lang="ts">
import { computed, ref } from "vue";
import AppButton from "./components/AppButton.vue";
import Badge from "./components/Badge.vue";
import ExperienceItem from "./components/ExperienceItem.vue";
import Navbar from "./components/Navbar.vue";
import ProjectCard from "./components/ProjectCard.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import Section from "./components/Section.vue";
import { profiles } from "./content/profile";
import { useLocale } from "./composables/useLocale";
import { useMotionSafe } from "./composables/useMotionSafe";

const copied = ref(false);
const { motionSafe } = useMotionSafe();
const { locale, isRu } = useLocale();
const profile = computed(() => profiles[locale.value]);

const ui = computed(() => ({
  avatarAlt: isRu.value ? "Фото Никиты Ситливого" : "Photo of Nikita Sitlivy",
  highlightsTitle: isRu.value ? "Обо мне" : "Highlights",
  highlightsSubtitle: isRu.value
    ? "Коротко о том, где приношу максимальную пользу."
    : "A short snapshot of where I create the most value.",
  projectsTitle: isRu.value ? "Проекты" : "Projects",
  projectsSubtitle: isRu.value
    ? "Кейсы с результатом, стеком и быстрым контекстом."
    : "Cases with outcomes, stack, and quick context.",
  experienceTitle: isRu.value ? "Опыт" : "Experience",
  experienceSubtitle: isRu.value
    ? "Коммерческий опыт без перегруза деталями."
    : "Commercial experience without unnecessary detail.",
  skillsTitle: isRu.value ? "Навыки" : "Skills",
  skillsSubtitle: isRu.value
    ? "Технологии, которые использую в ежедневной работе."
    : "Technologies I use in day-to-day product work.",
  contactTitle: isRu.value ? "Контакты" : "Contact",
  contactSubtitle: isRu.value
    ? "Открыт к сильным продуктовым задачам и командам."
    : "Open to strong product teams and complex problems.",
  contactNote: isRu.value
    ? "Открыт к сильным продуктовым командам и сложным задачам."
    : "Open to high-impact product teams and complex challenges.",
  copyEmail: isRu.value ? "Скопировать email" : "Copy email",
  copied: isRu.value ? "Скопировано" : "Copied",
  copyEmailAria: isRu.value ? "Скопировать email" : "Copy email",
  footer: isRu.value
    ? `© ${new Date().getFullYear()} Никита Ситливый. Product-minded frontend.`
    : `© ${new Date().getFullYear()} Nikita Sitlivy. Product-minded frontend.`,
  toTopAria: isRu.value ? "Наверх" : "Back to top"
}));

const contactLinks = computed(() => [
  { label: profile.value.contacts.email, href: `mailto:${profile.value.contacts.email}` },
  { label: profile.value.contacts.phone, href: `tel:${profile.value.contacts.phone.replace(/[^\d+]/g, "")}` },
  { label: "Telegram", href: profile.value.contacts.telegram },
  { label: "GitHub", href: profile.value.contacts.github },
  { label: "HH", href: profile.value.contacts.hh }
].filter((item) => item.href));

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.value.contacts.email);
    copied.value = true;
    window.setTimeout(() => {
      copied.value = false;
    }, 1500);
  } catch {
    copied.value = false;
  }
}
</script>

<template>
  <Navbar />
  <main id="main">
    <div class="locale-content">
      <section class="hero container">
        <div class="hero-visual">
          <img src="/avatar.jpeg" :alt="ui.avatarAlt" loading="lazy" decoding="async" width="220" height="220" />
        </div>
        <div class="hero-copy" :class="{ stagger: motionSafe }">
          <p class="eyebrow">{{ profile.hero.location }}</p>
          <h1>{{ profile.hero.name }}</h1>
          <p class="hero-title">{{ profile.hero.title }}</p>
          <p class="hero-summary">{{ profile.hero.summary }}</p>
          <div class="hero-actions">
            <AppButton :href="profile.hero.ctaPrimary.href">{{ profile.hero.ctaPrimary.label }}</AppButton>
            <AppButton :href="profile.hero.ctaSecondary.href" variant="secondary">{{ profile.hero.ctaSecondary.label }}</AppButton>
          </div>
        </div>
      </section>

      <Section id="highlights" :title="ui.highlightsTitle" :subtitle="ui.highlightsSubtitle">
        <div class="grid highlights-list">
          <article v-for="item in profile.highlights" :key="item" class="highlight-item">
            <span class="highlight-mark" aria-hidden="true">•</span>
            <p>{{ item }}</p>
          </article>
        </div>
      </Section>

      <Section id="projects" :title="ui.projectsTitle" :subtitle="ui.projectsSubtitle">
        <div class="grid grid-projects">
          <ProjectCard v-for="project in profile.projects" :key="project.title" :project="project" />
        </div>
      </Section>

      <Section id="experience" :title="ui.experienceTitle" :subtitle="ui.experienceSubtitle">
        <div class="grid grid-experience">
          <ExperienceItem v-for="item in profile.experience" :key="item.company" :item="item" />
        </div>
      </Section>

      <Section id="skills" :title="ui.skillsTitle" :subtitle="ui.skillsSubtitle">
        <div class="skills-groups">
          <article v-for="group in profile.skills" :key="group.group" class="skills-group">
            <h3>{{ group.group }}</h3>
            <div class="badges">
              <Badge v-for="item in group.items" :key="item" :label="item" />
            </div>
          </article>
        </div>
      </Section>

      <Section id="contact" :title="ui.contactTitle" :subtitle="ui.contactSubtitle">
        <p class="contact-note">{{ ui.contactNote }}</p>
        <div class="contact-card">
          <div class="contact-links">
            <a
              v-for="item in contactLinks"
              :key="item.label"
              :href="item.href"
              :target="item.href.startsWith('http') ? '_blank' : undefined"
              :rel="item.href.startsWith('http') ? 'noreferrer noopener' : undefined"
            >
              {{ item.label }}
            </a>
          </div>
          <button class="btn btn-ghost" type="button" @click="copyEmail" :aria-label="ui.copyEmailAria">
            {{ copied ? ui.copied : ui.copyEmail }}
          </button>
        </div>
      </Section>

      <footer class="footer container">
        <p>{{ ui.footer }}</p>
      </footer>
    </div>
  </main>

  <ScrollToTop :aria-label="ui.toTopAria" />
</template>
