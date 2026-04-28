# Smart Parking — SPA (Vue 3 + Pinia + Vite)

Учебный проект «умной парковки» с картой мест, бронированием и **AI-first** чат-ассистентом (клиентский разбор намерений + оркестрация сторов).

## Возможности

- Карта 8×12 с статусами: свободно / занято / забронировано / снято с продажи (админ).
- Чат: «найди у входа №3», «паркуйся дешевле», «забронируй», «где моё бронирование?», «отмени бронирование».
- После поиска — подсветка места и кнопка **«Забронировать»**.
- `mockApi.js`: каждые 10 с случайно меняет 1–2 места (кроме `reserved` и неактивных).
- Админ (`/admin`, **ленивый** импорт): статистика, базовый тариф, добавить/удалить место.
- **Service Worker** (`public/sw.js`): прекэш shell, runtime-кэш GET, fallback на `index.html` (офлайн-оболочка). Регистрация только в **production** (`npm run build` + `npm run preview` / деплой).
- Оффлайн-баннер в UI при `navigator.onLine === false`.

## Запуск

```bash
npm install
npm run dev
```

Откройте `http://127.0.0.1:5173`.

## Сборка и превью

```bash
npm run build
npm run preview
```

## E2E (Playwright)

После установки зависимостей **один раз** загрузите браузеры Playwright:

```bash
npx playwright install chromium
npm run test:e2e
```

> В репозитории используется детерминированный режим тестов: перед загрузкой страницы выставляется `localStorage.E2E=1` (стабильная сетка мест, без симулятора датчиков).

## Структура артефактов курса

| Файл | Назначение |
|------|------------|
| `PRD.md` | Требования и user stories |
| `ARCHITECTURE.md` | Mermaid-диаграммы |
| `STATE_PLAN.md` | План Pinia-сторов |
| `KEY_PROMPTS.md` | 5–7 ключевых промптов (этап 1) |
| `PROMPT_LOG.md` | Промпт-дневник (этап 2) |
| `API_DOCS.md` | Внутренние API сторов и агента |
| `DEPLOYMENT_GUIDE.md` | Деплой (Vercel/Netlify + примечания) |
| `PRESENTATION.md` | Тезисы слайдов 5–7 |
| `FINAL_REPORT.md` | Итоговый отчёт (экспорт в PDF вручную) |
| `lighthouse/README.md` | Скриншоты Lighthouse: команда `npm run lighthouse:before` для **before** |

## Ссылки на деплой

Ссылки для проверки и отчёта:

- **Живой сайт (Netlify):** [https://stepik-ai-course.netlify.app/](https://stepik-ai-course.netlify.app/)
- **Репозиторий GitVerse:** [https://gitverse.ru/kizaru/AI-Course](https://gitverse.ru/kizaru/AI-Course)
- **Видеоотчёт (скринкаст):** [Google Drive — демо ассистента](https://drive.google.com/file/d/1_RcRpsgB4uf7atT7Xh7O1rsolqXqWuKx/view?usp=sharing)

### Экспорт `FINAL_REPORT.pdf`

Из файла **`FINAL_REPORT.md`** получите PDF любым способом:

1. **VS Code:** расширение «Markdown PDF» → открыть `FINAL_REPORT.md` → командная палитра → *Markdown PDF: Export (pdf)*.
2. **Типора / другой редактор** с экспортом в PDF.
3. **Google Docs:** вставить текст из `.md`, при необходимости поправить заголовки → Файл → Скачать → PDF.


### Артефакты Lighthouse

В репозитории должны лежать (или быть доступны по ссылкам из отчёта):

- `lighthouse/before.png` — отчёт Lighthouse **до** оптимизаций  
- `lighthouse/after.png` — отчёт Lighthouse **после** оптимизаций  

Как снять — см. `lighthouse/README.md`.

## Лицензия

Учебный проект — используйте свободно в рамках курса.
