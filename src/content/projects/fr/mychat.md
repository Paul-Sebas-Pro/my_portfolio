---
title: "MyChat"
subtitle: "Application de chat temps réel avec rendu Markdown"
stack: ["Svelte 5", "Vite", "PocketBase", "TypeScript"]
category: "Frontend & Temps réel"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyChat"
devopsFeatures: ["PocketBase Backend", "Temps réel natif", "Svelte 5 Runes"]
---

### ⚡ Frontend Svelte 5

L'interface est construite avec **Svelte 5** et son nouveau système de réactivité par **Runes** (`$state`, `$derived`, `$effect`), offrant des performances maximales avec un bundle minimal.

- **Runes Svelte 5** : réactivité fine-grained, sans les compromis des stores classiques
- **Rendu Markdown** : les messages supportent la syntaxe Markdown complète via `svelte-exmarkdown` et `github-markdown-css`
- UI fluide avec transitions natives Svelte

### 🗄️ Backend PocketBase

**PocketBase** sert de backend complet — base de données, authentification et temps réel en un seul binaire Go auto-hébergeable.

- **Authentification** : inscription et connexion natives PocketBase
- **Collections** : messages structurés avec relations utilisateurs
- **Subscriptions temps réel** : les nouveaux messages arrivent en push sans polling

### 🔄 Architecture Temps réel

```
Client Svelte 5
    │
    ├── PocketBase SDK (subscribe)
    │       └── SSE / WebSocket natif
    │
    └── PocketBase Server
            ├── Auth (email/password)
            ├── Collections (messages)
            └── Realtime events
```

Chaque message envoyé déclenche une subscription PocketBase qui pousse instantanément la mise à jour à tous les clients connectés, sans besoin de WebSocket custom.
