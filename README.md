# 🎓 Good Teacher — LMS Mobile App

<p align="left">
  <img src="https://shields.io" alt="Vue.js">
  <img src="https://shields.io" alt="TypeScript">
  <img src="https://shields.io" alt="CapacitorJS">
  <img src="https://shields.io🚀-646cff?style=flat-square&logo=vite&logoColor=white" alt="Vite">
</p>

Кроссплатформенное мобильное приложение для образовательной LMS-платформы (онлайн-школы). Позволяет пользователям получать доступ к личному кабинету, интерактивному расписанию и учебным материалам напрямую со смартфона. 

Проект разработан с сохранением единой кодовой базы для Web и Mobile (Android) платформ.

---

## 🛠 Технологический стек

- **Frontend Core:** Vue 3 (Composition API, Script Setup), TypeScript.
- **Сборщик & Инструменты:** Vite, ESLint, Prettier.
- **Мобильная адаптация:** CapacitorJS (плагины для интеграции с нативной OS).
- **Стилизация:** Сomponent-based CSS / Скоростной адаптивный UI.

---

## 🚀 Ключевой функционал и архитектура

- **Кроссплатформенность:** Кодовая база адаптирована под Android устройства через конфигурацию Capacitor.
- **Производительность:** Использование Vite обеспечивает моментальный Hot Module Replacement (HMR) при разработке и оптимизированный production-билд.
- **Безопасность и Типизация:** Сквозная типизация интерфейсов данных на TypeScript снижает количество runtime-ошибок.

---

## 📂 Структура проекта

```text
├── android/               # Нативные файлы и конфигурация для Android Studio
├── assets/                # Статические ресурсы приложения (изображения, шрифты)
├── public/                # Публичные статические файлы
├── src/                   # Исходный код приложения (компоненты, логика, роутинг)
├── capacitor.config.ts    # Конфигурационный файл среды CapacitorJS
├── vite.config.ts         # Конфигурация сборщика Vite
└── package.json           # Зависимости и скрипты запуска
```

