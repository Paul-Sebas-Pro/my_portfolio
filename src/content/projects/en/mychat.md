---
title: "MyChat"
subtitle: "Real-time chat application with Markdown rendering"
stack: ["Svelte 5", "Vite", "PocketBase", "TypeScript"]
category: "Frontend & Real-time"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyChat"
devopsFeatures: ["PocketBase Backend", "Native Real-time", "Svelte 5 Runes"]
---

### ⚡ Svelte 5 Frontend

The UI is built with **Svelte 5** and its new reactivity system based on **Runes** (`$state`, `$derived`, `$effect`), delivering maximum performance with a minimal bundle size.

- **Svelte 5 Runes**: fine-grained reactivity without the compromises of classic stores
- **Markdown rendering**: messages support full Markdown syntax via `svelte-exmarkdown` and `github-markdown-css`
- Smooth UI with native Svelte transitions

### 🗄️ PocketBase Backend

**PocketBase** serves as the complete backend — database, authentication, and real-time in a single self-hostable Go binary.

- **Authentication**: native PocketBase sign-up and login
- **Collections**: structured messages with user relations
- **Real-time subscriptions**: new messages arrive via push without polling

### 🔄 Real-time Architecture

The application uses PocketBase's native subscription system. Each sent message triggers a PocketBase event that instantly pushes the update to all connected clients — no custom WebSocket server needed, no polling overhead.

PocketBase handles the entire backend stack: SQLite database, auth tokens, and real-time events over Server-Sent Events (SSE), all from a single binary that runs anywhere.
