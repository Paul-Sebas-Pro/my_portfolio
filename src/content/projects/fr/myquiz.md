---
title: "MyQuiz : Architecture SaaS & CI/CD"
description: "Plateforme complète de création de quiz avec automatisation du déploiement."
stack: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Docker", "Zod", "Vitest", "GitHub Actions"]
github: "https://github.com/ton-pseudo/myquiz"
category: "DevOps & Full-stack"
---

### 🚀 Le Challenge

Développer une application capable de supporter des auteurs de contenu tout en garantissant la stabilité du code via des tests rigoureux.

### 🛠 Ma Solution

- **Backend :** API REST avec Express et Prisma.
- **DevOps :** Mise en place d'un pipeline CI/CD : à chaque `push`, les tests unitaires et d'intégration sont lancés dans un container Docker.
- **Déploiement :** Automatisation du déploiement sur serveur distant après succès des tests.