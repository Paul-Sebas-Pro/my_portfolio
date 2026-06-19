---
title: "MyPokédex"
subtitle: "Application full-stack de consultation Pokémon"
stack: ["Vue 3.5", "Node.js", "Express 5", "Sequelize", "PostgreSQL", "Tailwind v4", "shadcn-vue"]
category: "Full-Stack"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyPokedex"
devopsFeatures: ["GitHub Actions CI", "Sequelize Migrations", "npm audit sécurité"]
---

### 🎨 Frontend Vue 3.5

L'interface est construite avec **Vue 3.5** et la **Composition API**, en tirant parti des dernières améliorations de réactivité du framework.

Le système de design repose sur **shadcn-vue 2.7** et **Tailwind CSS v4**, offrant des composants accessibles et un styling moderne avec la configuration CSS-first de Tailwind v4.

- **Composants headless** via shadcn-vue pour l'accessibilité
- **Tailwind v4** avec Vite plugin (configuration `@import "tailwindcss"`)
- Affichage des cartes Pokémon avec sprites, stats et types

### 🏗️ Backend Express 5

Le backend est une API REST construite avec **Express 5** et **Sequelize ORM**, qui consomme les données de la **PokéAPI** pour les stocker localement.

- **Sequelize** : modèles typés, migrations rigoureuses, associations
- **PostgreSQL** : stockage persistant des données Pokémon seedées
- Architecture MVC claire séparant routes, contrôleurs et modèles

### ♾️ CI & Qualité

#### 🔗 Intégration Continue (GitHub Actions)

Le pipeline CI vérifie à chaque push :

- Installation des dépendances sur **l'environnement cible** (x64 Linux)
- Audit de sécurité des dépendances via `npm audit`
- Validation du build

#### 🔀 Défi ARM64 → x64

Un problème de compatibilité binaire entre ma machine de développement (ARM64) et les runners GitHub Actions (x64) a été identifié et résolu en configurant correctement les environnements de build pour chaque architecture.
