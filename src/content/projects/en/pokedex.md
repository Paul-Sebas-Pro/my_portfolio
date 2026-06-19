---
title: "MyPokédex"
subtitle: "Full-stack Pokémon browser application"
stack: ["Vue 3.5", "Node.js", "Express 5", "Sequelize", "PostgreSQL", "Tailwind v4", "shadcn-vue"]
category: "Full-Stack"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyPokedex"
devopsFeatures: ["GitHub Actions CI", "Sequelize Migrations", "npm audit security"]
---

### 🎨 Vue 3.5 Frontend

The UI is built with **Vue 3.5** and the Composition API, leveraging the latest reactivity improvements from the framework.

The design system is powered by **shadcn-vue 2.7** and **Tailwind CSS v4**, providing accessible components and a modern styling approach using Tailwind v4's CSS-first configuration.

- **Headless components** via shadcn-vue for full accessibility
- **Tailwind v4** with Vite plugin (`@import "tailwindcss"` CSS-first)
- Pokémon card display with sprites, stats, and types

### 🏗️ Express 5 Backend

The backend is a REST API built with **Express 5** and **Sequelize ORM**, consuming data from the **PokéAPI** and storing it locally.

- **Sequelize**: typed models, strict migrations, associations
- **PostgreSQL**: persistent storage for seeded Pokémon data
- Clean MVC architecture separating routes, controllers, and models

### ♾️ CI & Quality

#### 🔗 Continuous Integration (GitHub Actions)

The CI pipeline checks on every push:

- Dependency installation in the **target environment** (x64 Linux)
- Security audit via `npm audit`
- Build validation

#### 🔀 ARM64 → x64 Challenge

A binary compatibility issue between the development machine (ARM64) and GitHub Actions runners (x64) was identified and resolved by properly configuring build environments for each architecture.
