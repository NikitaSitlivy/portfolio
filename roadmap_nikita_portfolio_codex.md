# Roadmap: сайт‑визитка/портфолио (Vue + React) для Никиты Ситливого
Дата: 2026‑02‑05 (Europe/Berlin)

Этот роадмап написан так, чтобы ты мог(ла) буквально скармливать шаги Codex’у (CLI/IDE) как задачи. Codex лучше всего работает, когда у задачи есть контекст + чёткое “готово”. См. официальные workflow‑паттерны Codex. citeturn0search1turn0search7turn0search15

---

## Цель
Сделать быстрый, минималистичный, “продуктовый” сайт‑визитку для найма:
- 1 страница (Landing) + опционально /projects и /resume
- русский по умолчанию + переключатель RU/EN (опционально)
- Lighthouse Performance/SEO/Accessibility: 90+ (цель)
- деплой за 1 команду, SSL, кастомный домен/субдомен

---

## Как использовать твои текущие сайты/домены
У тебя уже есть:
- **fingerclock** (как живой проект/витрина) - https://fingercloak.com/
- **eterium.space** (как основной бренд/платформа)- https://eterium.space/

Рекомендуемая схема:
1) Сайт‑визитка на **поддомене eterium.space**, например:
   - `nikita.eterium.space` (лучше всего для личного бренда)
   - или `cv.eterium.space` / `me.eterium.space`
2) fingerclock — как **первый проект в портфолио** (Demo + GitHub + краткое описание).
3) Eterium — как **второй проект/кейc** (если можно показать публично: что делал(а) на фронте, архитектура, деплой).

Почему поддомен: не конфликтует с основным сайтом, и выглядит “дорого”.

---

## Технологический выбор (рекомендовано)
### Вариант A (оптимум под найм)
- **Astro** (контент/скорость) + островки на **Vue** и/или **React**
- Markdown‑контент, сборка супербыстрая
- Легко держать 90–100 по Lighthouse

### Вариант B (проще, если хочешь только Vue)
- **Vue 3 + Vite** + Vue Router (если нужны /projects, /resume)
- SSR не обязателен, но SEO будет чуть хуже, чем у Astro/Next

### Вариант C (если хочешь “React‑ориентированно”)
- **Next.js** (App Router) + MDX

Если цель — максимальный перфоманс и “чистая витрина”, бери **A**.

---

## Инфраструктура деплоя
Выбирай любой из вариантов:
- **Cloudflare Pages** (часто быстрее + удобно с доменами)
- **Vercel** (очень просто, но иногда чуть тяжелее)
- **Netlify** (тоже просто)

Для поддомена на reg.ru:
- A/CNAME запись на провайдера
- автоматический SSL

---

# План работ (по этапам)

## Этап 0. Подготовка (30–60 минут)
**Outcome:** есть репозиторий + структура задач.

1) Создай новый репо: `nikita-portfolio`
2) Подготовь материалы:
   - 1 норм фото/аватар (или инициалы‑аватар)
   - список проектов (FingerClock, Eterium, ещё 1 — пет/коммерч без NDA)
   - контакты: email, Telegram - @Gatsby502, GitHub - https://github.com/NikitaSitlivy/, телефон - 89676617533


**Definition of done (DoD):**
- репозиторий создан
- черновик структуры контента есть в README

**Codex task prompt:**
> Create a repo plan for a one-page developer portfolio. Include sections, routes, and acceptance criteria. Keep it minimal and fast.

---

## Этап 1. Каркас контента (главное) (2–3 часа)
**Outcome:** текст готов, без дизайна.

Секции:
1) Hero: “Frontend Engineer (Vue 3 / React, TypeScript)”
2) Value: 3–5 сильных тезисов (ответственность за фронт, SPA, UX, API, прод)
3) Projects: 2–4 проекта
4) Experience: 2 места работы (Startup, FastLead)
5) Skills: компактно (без “Blender/3D”)
6) Contact: кнопки/ссылки

**DoD:**
- весь контент лежит в `content/` (md/json)
- тексты короткие, без простыней
- для каждого проекта есть: роль, стек, результат, ссылки

**Codex task prompt:**
> Turn the attached resume text into a concise portfolio content set (hero, about, experience, projects, skills, contacts) in Russian. Output as JSON or Markdown files under /content. Keep each section scannable.

---

## Этап 2. Инициализация проекта (1–2 часа)
### Если Astro (вариант A)
- `npm create astro@latest`
- интеграции: Vue + React (если нужно)
- структура:
  - `src/pages/index.astro`
  - `src/components/`
  - `src/content/`

### Если Vue (вариант B)
- `npm create vite@latest` (vue-ts)
- `src/views/`, `src/components/`

**DoD:**
- локально запускается (`npm run dev`)
- есть пустая страница с базовой типографикой

**Codex task prompt:**
> Initialize an Astro project with Vue + React integrations. Add a clean layout, typography scale, and a single index page that renders content from /src/content.

---

## Этап 3. Дизайн‑система “без дизайнера” (1–2 часа)
Цель: ощущение SaaS‑продукта, минимализм.

- Шрифт: system UI или Inter
- Цвета: нейтральные + 1 акцент
- Сетка: max‑width 960–1100px
- Отступы: 16/24/32
- Тёмная тема (опционально, но даёт “вау”)

**DoD:**
- единые компоненты: Button, Tag, Card, SectionTitle
- адаптив: mobile first

**Codex task prompt:**
> Build a minimal design system for a developer portfolio: spacing, typography, light/dark themes, buttons, links, tags, cards. No heavy animations. Keep CSS small.

---

## Этап 4. Секции и компоненты (4–8 часов)
Собираем страницу из секций:

- `Hero`
- `Highlights`
- `ProjectsGrid`
- `Experience`
- `Skills`
- `Contact`

**ProjectsGrid** (ключевой блок):
- карточка проекта
- 2 ссылки: Demo / GitHub
- 2–3 коротких bullets “что сделал”
- бейджи стека

**DoD:**
- страница полностью заполнена
- все ссылки рабочие (пока можно заглушки)

**Codex task prompt:**
> Implement the portfolio sections as components, using content files as data. Ensure all sections are responsive and accessible. Provide semantic HTML and aria labels where needed.

---

## Этап 5. SEO, скорость, доверие (2–3 часа)
- Title/description/meta (OpenGraph)
- favicon
- sitemap
- robots
- структурированные данные (Person / WebSite) — опционально
- Lazy‑load для картинок
- `prefers-reduced-motion` (если есть анимации)

**DoD:**
- Lighthouse 90+ по Perf/SEO/A11y
- страницы не прыгают (no CLS)

**Codex task prompt:**
> Add SEO metadata, OpenGraph tags, sitemap, robots, and performance best practices. Run Lighthouse and fix any low scores (do not add heavy dependencies).

---

## Этап 6. Деплой (1–2 часа)
Выбери провайдера (Cloudflare Pages / Vercel / Netlify).  
Подключи домен `nikita.eterium.space`.

**DoD:**
- сайт доступен по домену
- SSL активен
- CI билдится на пуш

**Codex task prompt:**
> Create deployment instructions for Cloudflare Pages (or Vercel). Include domain setup steps for a subdomain on reg.ru, environment variables (if any), and a minimal CI workflow.

---

## Этап 7. “Воронка откликов” (самый недооценённый этап) (1–2 часа)
Сайт сам по себе не даёт “отбоя”, если им не пользоваться правильно.

Сделай:
- короткую “подачу” на 4–5 строк для отклика
- шаблон сообщения рекрутеру (TG/HH)
- UTM‑метки (опционально) на ссылке резюме

**DoD:**
- 2 шаблона сообщений готовы
- ссылка на сайт стоит в HH (“О себе” + “Портфолио”)

**Codex task prompt:**
> Write two concise recruiter messages in Russian: one for Vue вакансии, one for React вакансии. Mention the portfolio link and 2 strongest points. Keep it under 700 characters.

---

# Рекомендованная структура репозитория
```
nikita-portfolio/
  content/
    ru/
      hero.md
      experience.md
      projects.md
      skills.md
      contacts.md
    en/ (optional)
  src/
    components/
    pages/ (or pages in Astro)
    styles/
  public/
  README.md
```

---

# Контент: что обязательно показать (твои 2 “якоря”)
## Project 1: FingerClock
- что это (1 строка)
- твоя роль (ты автор)
- стек (Vue/React/TS)
- 2 результата (например: адаптив, перфоманс, архитектура)
- Demo + GitHub

## Project 2: Eterium
- что это за платформа (1 строка)
- что именно делал(а) на фронте (SPA/архитектура/компоненты/UX)
- если нельзя показывать код — сделай публичный “case study” без NDA

---

# Checklist финального качества
- [ ] Мобильная версия выглядит не хуже десктопа
- [ ] Первый экран отвечает “кто ты и чем полезен” за 5 секунд
- [ ] Проекты кликабельны и понятны без объяснений
- [ ] Нет лишних технологий в skills
- [ ] Контакты видны и вверху, и внизу
- [ ] 90+ Lighthouse

---

# Мини‑шпаргалка по Codex (как ставить задачи)
Codex любит:
- конкретный “done”
- ограничения (“no heavy deps”, “keep CSS small”)
- референсы (папки/файлы/скрин)

Официально: Codex CLI ставится через `npm i -g @openai/codex`, а workflow‑паттерны есть в документации. citeturn0search7turn0search1turn0search15
