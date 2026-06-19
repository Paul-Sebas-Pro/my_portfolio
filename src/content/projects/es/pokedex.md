---
title: "MyPokédex"
subtitle: "Aplicación full-stack de consulta de Pokémon"
stack: ["Vue 3.5", "Node.js", "Express 5", "Sequelize", "PostgreSQL", "Tailwind v4", "shadcn-vue"]
category: "Full-Stack"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyPokedex"
devopsFeatures: ["GitHub Actions CI", "Sequelize Migrations", "npm audit seguridad"]
---

### 🎨 Frontend Vue 3.5

La interfaz está construida con **Vue 3.5** y la Composition API, aprovechando las últimas mejoras de reactividad del framework.

El sistema de diseño se basa en **shadcn-vue 2.7** y **Tailwind CSS v4**, ofreciendo componentes accesibles y un estilo moderno con la configuración CSS-first de Tailwind v4.

- **Componentes headless** via shadcn-vue para accesibilidad completa
- **Tailwind v4** con Vite plugin (configuración `@import "tailwindcss"`)
- Visualización de cartas Pokémon con sprites, estadísticas y tipos

### 🏗️ Backend Express 5

El backend es una API REST construida con **Express 5** y **Sequelize ORM**, que consume datos de la **PokéAPI** y los almacena localmente.

- **Sequelize**: modelos tipados, migraciones estrictas, asociaciones
- **PostgreSQL**: almacenamiento persistente de datos Pokémon
- Arquitectura MVC limpia separando rutas, controladores y modelos

### ♾️ CI & Calidad

#### 🔗 Integración Continua (GitHub Actions)

El pipeline CI verifica en cada push la instalación de dependencias, el audit de seguridad y la validación del build.

#### 🔀 Desafío ARM64 → x64

Se identificó y resolvió un problema de compatibilidad binaria entre el entorno de desarrollo (ARM64) y los runners de GitHub Actions (x64), configurando correctamente los entornos de build para cada arquitectura.
