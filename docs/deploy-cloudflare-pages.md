# Deploy: Cloudflare Pages + reg.ru

## 1) Cloudflare Pages
1. Подключи репозиторий в Cloudflare Pages.
2. Framework preset: `Astro`.
3. Build command: `npm run build`.
4. Build output directory: `dist`.
5. Node.js version: `20`.

## 2) DNS в reg.ru
1. В зоне `eterium.space` создай CNAME:
   - Host: `nikita`
   - Value: `<project>.pages.dev`
2. Сохрани запись и дождись DNS propagation.
3. В Cloudflare Pages добавь custom domain `nikita.eterium.space`.
4. Убедись, что SSL статус `Active`.

## 3) Проверка
- Открывается `https://nikita.eterium.space`
- `https://nikita.eterium.space/sitemap.xml` доступен
- `https://nikita.eterium.space/robots.txt` доступен
