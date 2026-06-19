---
title: "MyQuizz"
subtitle: "Arquitectura SaaS full-stack robusta con CI/CD"
stack: ["Svelte 5", "Node.js", "Express 5", "Prisma 7", "PostgreSQL", "Docker", "Vitest"]
category: "Full-Stack & DevOps"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyQuizz"
devopsFeatures: ["Docker / Docker Compose", "90 Tests Vitest+Supertest", "GitHub Actions CI"]
---

### 🏗️ Arquitectura Backend

El backend está construido con **Node.js** y **Express 5**, estructurado en capas para separar la lógica de negocio del acceso a datos.

El uso de **Prisma 7 ORM** es central:

- **Type-safety**: uso del cliente generado para evitar errores de consultas
- **Migraciones**: gestión rigurosa del esquema PostgreSQL
- **Relaciones**: manejo complejo de Quizzes, Preguntas y Respuestas

### 🎨 Frontend Svelte 5

La interfaz de usuario está construida con **Svelte 5** y su nuevo sistema de reactividad basado en **Runes** (`$state`, `$derived`), conectada a la API REST del backend.

- Experiencia fluida con mínimo JavaScript en el bundle
- Formularios de quiz reactivos con validación en tiempo real
- Resultados y puntuaciones calculados por el backend

### ♾️ El Pilar DevOps & Calidad

#### 🐳 Aislamiento con Docker

La aplicación y su base de datos están aisladas en contenedores. Esto garantiza que el bug "en mi máquina funciona" ya no existe.

#### 🧪 Estrategia de Tests

Doble capa de tests:

1. **Tests unitarios (Vitest)**: validación de cálculos de puntuación y reglas de negocio
2. **Tests de integración (Supertest)**: llamadas API reales sobre una base de datos de test

#### 🚀 Pipeline CI/CD (GitHub Actions)

En cada Pull Request, un workflow automático ejecuta los 90 tests, las migraciones Prisma, y valida la compilación Docker.
