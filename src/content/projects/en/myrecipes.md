---
title: "MyRecipes"
subtitle: "Recipe browser with API proxy and full test coverage"
stack: ["React 19", "Node.js", "Express 5", "Sequelize", "PostgreSQL", "Tailwind v4", "shadcn/ui"]
category: "Full-Stack & API"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyRecipes"
devopsFeatures: ["20/20 Tests Vitest", "TheMealDB Proxy", "GitHub Actions CI"]
---

### 🍽️ React 19 Frontend

The UI leverages the latest features of **React 19** to display cooking recipes sourced from the TheMealDB API.

The design system is built with **shadcn/ui** and **Tailwind CSS v4**, following mockups designed in Pencil before development — a design-first approach that ensures visual consistency from day one.

- **shadcn/ui**: accessible components without abstraction overhead
- **Tailwind v4**: CSS-first configuration with Vite plugin
- French translations via a dedicated `translations.ts` file

### 🏗️ Express 5 Backend (ESM / MVC)

The backend adopts **native ESM** syntax (`import/export`) and a strict **MVC architecture**:

- **TheMealDB Proxy**: external API calls route through the backend, preventing key exposure and CORS issues
- **Sequelize**: user favorites persisted in PostgreSQL
- **MVC architecture**: routes → controllers → services → models

### 🧪 Testing Strategy — 20/20

Full test suite with **Vitest** and **Supertest**:

1. **Unit tests**: business logic and data transformations
2. **Integration tests**: complete API flows on an isolated test database

All 20 tests pass in CI on every Pull Request via **GitHub Actions**.

### 🎨 Design-First

Mockups were created in **Pencil** before writing any code, defining the page structure and user experience upstream of development.
