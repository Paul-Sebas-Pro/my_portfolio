---
title: "MyQuizz"
subtitle: "Robust full-stack SaaS architecture with CI/CD"
stack: ["Svelte 5", "Node.js", "Express 5", "Prisma 7", "PostgreSQL", "Docker", "Vitest"]
category: "Full-Stack & DevOps"
githubUrl: "https://github.com/Paul-Sebas-Pro/MyQuizz"
devopsFeatures: ["Docker / Docker Compose", "90 Tests Vitest+Supertest", "GitHub Actions CI"]
---

### 🏗️ Backend Architecture

The backend is built with **Node.js** and **Express**, structured using a layered architecture to decouple business logic from data access.

The use of **Prisma ORM** is central:

- **Type-safety**: Using the generated client to prevent query errors.
- **Migrations**: Strict management of the PostgreSQL schema.
- **Relations**: Complex handling of Quizzes, Questions, and Answers.

### ♾️ The DevOps & Quality Pillar

This is the heart of the project's reliability. No code is deployed without passing our validation suite.

#### 🐳 Isolation with Docker

The application and its database are isolated. This ensures that the "but it works on my machine" bug no longer exists.

#### 🧪 Testing Strategy

I implemented a double testing layer:

1. **Unit Tests (Vitest)**: Validation of score calculations and business rules.
2. **Integration Tests (Supertest)**: Real API calls are simulated on a test database to validate flows.

#### 🚀 CI/CD Pipeline (GitHub Actions)

For every Pull Request, an automated workflow:

- Spun up an ephemeral **PostgreSQL** service.
- Executes Prisma migrations.
- Runs the complete test suite.
- Builds the Docker image to validate compilation.
- Dependency security analysis.
