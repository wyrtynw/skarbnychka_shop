# Скарбничка покупок — готовий проєкт

Це мінімальний проєкт на Vue 3 + TypeScript + Vite + Pinia, що реалізує "скарбничку покупок".

Компоненти:
- `ItemCard.vue` — універсальний простий компонент (як ProductCard і CartItem).
- `CartPanel.vue` — панель, що з'являється при натисканні кнопки.
- `useCartStore.ts` — Pinia store з `items`, `addItem`, `removeItem`, `totalItemsCount`, `totalAmount`.

Запуск:
1. `npm install`
2. `npm run dev`
Проєкт запуститься на `http://localhost:5173`.

Файлова структура — див. архітектурну діаграму `docs/architecture.svg` або `docs/architecture.md`.

Технічні вимоги виконано:
- TypeScript присутній.
- Логіка розділена (стор, компоненти, відображення).
- CartPanel показується умовно (не завжди відображається).

Автор: згенеровано ChatGPT
