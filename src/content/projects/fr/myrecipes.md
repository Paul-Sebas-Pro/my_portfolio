---
title: "MyRecipes"
subtitle: "Recettes de cuisine avec proxy API et tests complets"
stack: ["React 19", "Node.js", "Express 5", "Sequelize", "PostgreSQL", "Tailwind v4", "shadcn/ui"]
category: "Full-Stack & API"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyRecipes"
devopsFeatures: ["20/20 Tests Vitest", "Proxy TheMealDB", "GitHub Actions CI"]
---

### 🍽️ Frontend React 19

L'interface exploite les dernières fonctionnalités de **React 19** pour afficher des recettes de cuisine issues de l'API TheMealDB.

Le système de design est construit avec **shadcn/ui** et **Tailwind CSS v4**, en suivant des maquettes conçues dans Pencil avant le développement — une approche design-first qui garantit la cohérence visuelle.

- **shadcn/ui** : composants accessibles, sans surcouche d'abstraction
- **Tailwind v4** : configuration CSS-first avec Vite plugin
- Traductions FR via un fichier `translations.ts` dédié

### 🏗️ Backend Express 5 (ESM / MVC)

Le backend adopte la syntaxe **ESM native** (`import/export`) et une architecture **MVC stricte** :

- **Proxy TheMealDB** : les appels API externes transitent par le backend, évitant l'exposition de clés et les problèmes CORS
- **Sequelize** : favoris utilisateurs persistés en PostgreSQL
- **Architecture MVC** : routes → contrôleurs → services → modèles

### 🧪 Stratégie de Tests — 20/20

Suite complète avec **Vitest** et **Supertest** :

1. **Tests unitaires** : logique métier et transformations de données
2. **Tests d'intégration** : flux API complets sur une base de test isolée

Tous les 20 tests passent en CI sur chaque Pull Request via **GitHub Actions**.

### 🎨 Design-First

Les maquettes ont été créées dans **Pencil** avant le code, définissant la structure des pages et l'expérience utilisateur en amont du développement.
