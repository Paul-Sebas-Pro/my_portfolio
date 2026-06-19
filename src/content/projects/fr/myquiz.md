---
title: "MyQuizz"
subtitle: "Architecture SaaS full-stack robuste avec CI/CD"
stack: ["Svelte 5", "Node.js", "Express 5", "Prisma 7", "PostgreSQL", "Docker", "Vitest"]
category: "Full-Stack & DevOps"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyQuizz"
devopsFeatures: ["Docker / Docker Compose", "90 Tests Vitest+Supertest", "GitHub Actions CI"]
---

### 🏗️ Architecture Backend

Le backend est construit avec **Node.js** et **Express**, structuré selon une architecture en couches pour séparer la logique métier des accès aux données.

L'utilisation de **Prisma ORM** est centrale :

- **Type-safety** : Utilisation du client généré pour éviter les erreurs de requêtes.
- **Migrations** : Gestion rigoureuse du schéma PostgreSQL.
- **Relations** : Gestion complexe des Quiz, Questions et Réponses.

### ♾️ Le Pilier DevOps & Qualité

C'est le cœur de la fiabilité du projet. Aucun code n'est déployé sans passer par notre suite de validation.

#### 🐳 Isolation avec Docker

L'application et sa base de données sont isolées. Cela permet de garantir que le bug "mais ça marche sur ma machine" n'existe plus.

#### 🧪 Stratégie de Tests

J'ai implémenté une double couche de tests :

1. **Tests Unitaires (Vitest)** : Validation des calculs de scores et des règles métier.
2. **Tests d'Intégration (Supertest)** : On simule des appels API réels sur une base de données de test pour valider les flux (ex: "Un utilisateur peut-il répondre deux fois au même quiz ?").

#### 🚀 Pipeline CI/CD (GitHub Actions)

À chaque Pull Request, un workflow automatique :

- Monte un service **PostgreSQL** éphémère.
- Exécute les migrations Prisma.
- Lance la suite complète de tests.
- Build l'image Docker pour valider la compilation.
- Analyse de sécurité des dépendances.
