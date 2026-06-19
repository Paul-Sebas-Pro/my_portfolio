---
title: "MyRecipes"
subtitle: "Buscador de recetas con proxy API y cobertura de tests completa"
stack: ["React 19", "Node.js", "Express 5", "Sequelize", "PostgreSQL", "Tailwind v4", "shadcn/ui"]
category: "Full-Stack & API"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyRecipes"
devopsFeatures: ["20/20 Tests Vitest", "Proxy TheMealDB", "GitHub Actions CI"]
---

### 🍽️ Frontend React 19

La interfaz aprovecha las últimas funcionalidades de **React 19** para mostrar recetas de cocina procedentes de la API TheMealDB.

El sistema de diseño está construido con **shadcn/ui** y **Tailwind CSS v4**, siguiendo maquetas diseñadas en Pencil antes del desarrollo — un enfoque design-first que garantiza coherencia visual desde el primer día.

- **shadcn/ui**: componentes accesibles sin sobrecarga de abstracción
- **Tailwind v4**: configuración CSS-first con Vite plugin
- Traducciones en francés via un fichero `translations.ts` dedicado

### 🏗️ Backend Express 5 (ESM / MVC)

El backend adopta la sintaxis **ESM nativa** (`import/export`) y una arquitectura **MVC estricta**:

- **Proxy TheMealDB**: las llamadas a la API externa pasan por el backend, evitando la exposición de claves y los problemas de CORS
- **Sequelize**: recetas favoritas persistidas en PostgreSQL
- **Arquitectura MVC**: rutas → controladores → servicios → modelos

### 🧪 Estrategia de Tests — 20/20

Suite completa con **Vitest** y **Supertest**:

1. **Tests unitarios**: lógica de negocio y transformaciones de datos
2. **Tests de integración**: flujos API completos sobre una base de datos de test aislada

Los 20 tests pasan en CI en cada Pull Request via **GitHub Actions**.

### 🎨 Diseño Primero

Las maquetas fueron creadas en **Pencil** antes de escribir código, definiendo la estructura de las páginas y la experiencia de usuario antes del desarrollo.
