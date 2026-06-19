---
title: "MyChat"
subtitle: "Aplicación de chat en tiempo real con renderizado Markdown"
stack: ["Svelte 5", "Vite", "PocketBase", "TypeScript"]
category: "Frontend & Tiempo real"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyChat"
devopsFeatures: ["PocketBase Backend", "Tiempo real nativo", "Svelte 5 Runes"]
---

### ⚡ Frontend Svelte 5

La interfaz está construida con **Svelte 5** y su nuevo sistema de reactividad basado en **Runes** (`$state`, `$derived`, `$effect`), ofreciendo el máximo rendimiento con un bundle mínimo.

- **Runes Svelte 5**: reactividad fine-grained sin los compromisos de los stores clásicos
- **Renderizado Markdown**: los mensajes soportan sintaxis Markdown completa via `svelte-exmarkdown` y `github-markdown-css`
- UI fluida con transiciones nativas de Svelte

### 🗄️ Backend PocketBase

**PocketBase** sirve como backend completo — base de datos, autenticación y tiempo real en un único binario Go auto-hospedable.

- **Autenticación**: registro e inicio de sesión nativos de PocketBase
- **Colecciones**: mensajes estructurados con relaciones de usuarios
- **Suscripciones en tiempo real**: los nuevos mensajes llegan por push sin polling

### 🔄 Arquitectura en Tiempo Real

La aplicación utiliza el sistema de suscripciones nativo de PocketBase. Cada mensaje enviado desencadena un evento que envía instantáneamente la actualización a todos los clientes conectados — sin servidor WebSocket personalizado ni overhead de polling.

PocketBase gestiona toda la pila backend: base de datos SQLite, tokens de autenticación y eventos en tiempo real sobre Server-Sent Events (SSE), todo desde un único binario que funciona en cualquier entorno.
