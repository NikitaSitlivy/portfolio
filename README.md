# Nikita Portfolio (Vue 3 + Vite + TypeScript)

Одностраничный сайт-визитка в стиле Product / SaaS minimal.

## Команды

```bash
npm i
npm run dev
npm run build
npm run preview
```

## Где менять контент

Весь контент находится в одном файле: `src/content/profile.ts`.

Там редактируются:
- Hero
- Highlights
- Projects
- Experience
- Skills
- Contacts

## Ключевые фичи

- Light/Dark theme toggle с сохранением в `localStorage`
- Первый выбор темы по `prefers-color-scheme`
- Motion-safe анимации (CSS + IntersectionObserver)
- Полная поддержка `prefers-reduced-motion`
- Семантическая верстка и доступность (focus styles, aria-label)

## Деплой

Любой статический хостинг (Cloudflare Pages / Vercel / Netlify):
- Build command: `npm run build`
- Output directory: `dist`

