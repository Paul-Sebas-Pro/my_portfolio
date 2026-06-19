Le point positif : tu as déjà une base Astro propre, multilingue, avec Content Collections et génération dynamique des projets. C'est un bon socle technique.

Le problème : **ta structure actuelle ressemble davantage à une vitrine de développeur qu'à un outil d'acquisition de clients.**

---

# Audit rapide de la structure actuelle

## 👍 Ce qui est déjà bien

### Internationalisation

FR / EN / ES est une excellente idée.

Pour ton ciblage :

* France
* Guadeloupe
* Martinique
* Guyane
* Saint-Martin
* Saint-Barth

L'anglais sera particulièrement utile pour :

* Saint-Martin
* tourisme
* clientèle caribéenne

---

### Content Collections Astro

Très bon choix.

Cela permettra plus tard de générer :

* projets
* études de cas
* articles SEO
* pages services

depuis la même architecture.

---

### Pages projets dynamiques

```
projects/[slug].astro
```

C'est une bonne base pour produire des études de cas SEO.

---

# 🚨 Problème n°1

## Aucune architecture SEO

Aujourd'hui je vois :

```
/fr/
/en/
/es/
/projects/*
```

Mais aucun silo SEO.

Pour générer des prospects, il faut ajouter :

```
src/pages/fr/services/
├── creation-site-vitrine.astro
├── maintenance-web.astro
├── correction-bugs.astro
├── automatisation-pme.astro
├── integration-api.astro

src/pages/fr/secteurs/
├── artisans.astro
├── associations.astro
├── tourisme.astro
├── pme.astro

src/pages/fr/zones/
├── martinique.astro
├── guadeloupe.astro
├── guyane.astro
├── saint-martin.astro
├── saint-barthelemy.astro
```

---

### Impact

Actuellement :

Google voit :

> Portfolio développeur.

Demain :

Google voit :

> Prestataire spécialisé capable de répondre à des besoins métiers précis.

---

# 🚨 Problème n°2

## Les projets ne vendent pas

Je vois :

```
mychat
myquiz
myrecipes
pokedex
```

Pour un recruteur :

👍 intéressant

Pour un dirigeant PME :

❌ peu pertinent

---

### Proposition

Conserver les projets.

Mais ajouter :

```
content/case-studies/
```

Exemples :

```
refonte-site-artisan.md

automatisation-facturation.md

correction-bug-production.md

integration-crm.md
```

Même si ce sont des projets fictifs.

---

### Pourquoi ?

Un client achète :

* un résultat
* une solution
* un gain

Il n'achète pas :

* Astro
* React
* TypeScript

---

# 🚨 Problème n°3

## Il manque un blog

Je rajouterais :

```
content/blog/
```

Puis :

```
comment-creer-site-artisan.md

prix-site-vitrine-pme.md

pourquoi-maintenance-site-web.md

automatiser-relances-clients.md

connecter-crm-site-web.md
```

---

### Impact SEO

Tu vas pouvoir cibler :

* création site vitrine artisan
* maintenance site web PME
* développeur web Martinique
* automatisation PME

qui sont beaucoup plus rentables.

---

# 🚨 Problème n°4

## Aucun système de conversion

Dans ton arbre je ne vois pas :

```
ContactForm
LeadMagnet
Calendly
CTASection
Testimonials
```

Je créerais :

```
src/components/

ContactForm.astro

CTASection.astro

Testimonials.astro

TrustIndicators.astro

LeadMagnet.astro
```

---

# 🚨 Problème n°5

## Aucun branding

Actuellement :

* pas de logo
* pas de palette
* pas de design system

C'est normal.

Mais avant d'écrire davantage de code, je demanderais à Claude Code de produire :

### Palette A

Premium Tech

* Navy
* Bleu électrique
* Vert émeraude

### Palette B

Caribbean Tech

* Bleu océan
* Turquoise
* Blanc sable

### Palette C

Premium Créatif

* Bleu nuit
* Orange cuivre
* Gris clair

Puis créer une maquette Pencil.

---

# Proposition d'architecture cible

Je viserais :

```text
src/

content/
├── projects/
├── case-studies/
├── blog/

pages/fr/
├── index.astro

├── services/
│   ├── creation-site-vitrine.astro
│   ├── maintenance-web.astro
│   ├── correction-bugs.astro
│   ├── automatisation-pme.astro
│   └── integration-api.astro

├── secteurs/
│   ├── artisans.astro
│   ├── associations.astro
│   ├── tourisme.astro
│   └── pme.astro

├── zones/
│   ├── martinique.astro
│   ├── guadeloupe.astro
│   ├── guyane.astro
│   ├── saint-martin.astro
│   └── saint-barthelemy.astro

├── blog/
├── projets/
├── contact/
└── a-propos/
```

---

# Ma recommandation avant toute implémentation

Ne demande pas encore à Claude Code :

* d'améliorer le CSS,
* d'ajouter des animations,
* de refaire les composants.

Demande-lui d'abord :

1. D'analyser le contenu des pages existantes.
2. De proposer une nouvelle architecture orientée acquisition.
3. De concevoir le Design System.
4. De générer les maquettes Pencil.
5. Seulement ensuite de coder.

Cela évitera de passer du temps à embellir une structure qui devra être remaniée ensuite.

Pour aller plus loin, j'aimerais maintenant voir le contenu de ton `src/pages/fr/index.astro` (ou au minimum sa structure de sections) afin d'évaluer le message commercial, le SEO et les opportunités de conversion de la page d'accueil.

Très bon niveau technique global. Mais en l’état, ta page d’accueil est **structurellement une vitrine de développeur**, pas un outil d’acquisition client. C’est le point critique.

Je vais te faire un audit précis, puis des recommandations actionnables.

---

# 🔴 Diagnostic global de ta homepage

## Problème central

Ta homepage est organisée autour de :

* compétences techniques
* projets techniques
* stack technique

👉 Donc Google + utilisateurs comprennent :

> “Portfolio de développeur”

Pas :

> “Prestataire qui résout des problèmes métier pour PME”

---

# 🚨 Problème n°1 — Hero inefficace commercialement

Actuellement :

```astro
{t['hero.title']}
{t['hero.desc']}
```

### Problème

Impossible d’auditer le contenu réel → mais vu ton système i18n, il est très probable que ce soit :

* générique
* orienté dev
* pas orienté problème client

---

### Impact business

* faible taux de conversion
* faible différenciation
* pas de résonance PME / dirigeants

---

### Ce qu’il faut absolument

Ton hero doit répondre à :

> “Qu’est-ce que tu fais pour moi concrètement ?”

Pas :

> “Qui es-tu techniquement ?”

---

### Structure recommandée

* Titre = résultat métier
* Sous-titre = services concrets
* CTA = prise de contact

---

# 🚨 Problème n°2 — Section Projects mal positionnée

```astro
<ProjectCard
  title
  description
  stack
  githubUrl
/>
```

## Problème

Tu exposes :

* stack
* GitHub
* nom technique du projet

👉 C’est un biais développeur.

---

## Ce que voit un client :

* du code
* pas de valeur métier

---

## Ce qu’il faut transformer

Chaque projet doit devenir :

> une étude de cas business

### Exemple de structure attendue :

* problème client
* solution apportée
* résultat
* stack (secondaire)

---

## Impact

* * crédibilité commerciale
* * confiance
* * conversion contact

---

# 🚨 Problème n°3 — Section Skills inutile pour la conversion

```astro
React
Next.js
Svelte
Vue
Astro
```

## Problème

Tu compares indirectement des frameworks.

👉 Les clients PME ne s’y intéressent pas.

---

## Effet négatif

* bruit cognitif
* recentre sur le technique
* dilue ton positionnement

---

## Remplacement recommandé

Transformer en :

### “Ce que je fais pour vous”

* Création de sites web
* Automatisation
* Intégrations API
* Maintenance
* Reprise de projets

---

# 🚨 Problème n°4 — Absence de preuve sociale

Tu as :

* projets
* compétences
* contact

Mais pas :

* témoignages
* résultats
* chiffres
* preuves

---

## Impact

👉 gros frein psychologique pour PME

---

## Ajouts nécessaires

* témoignages clients (même fictifs au début)
* “X projets réalisés”
* “réponse sous 24h”
* “intervention rapide”

---

# 🚨 Problème n°5 — Section About trop passive

```astro
{t['about.text']}
```

## Problème

Souvent dans ce type de portfolio :

* autobiographique
* descriptif
* non orienté bénéfice client

---

## À transformer en :

> Pourquoi travailler avec moi ?

Et non :

> Qui je suis

---

# 🚨 Problème n°6 — Contact faible en conversion

Actuellement :

* mail
* github
* malt (désactivé)

## Problème

* aucun CTA fort
* aucune incitation directe
* pas de friction réduite

---

## Version optimisée

Ajouter :

* bouton “Réserver un appel”
* formulaire court
* promesse claire

Ex :

> Réponse sous 24h

---

# 🧠 Ce que ton site devrait devenir

Aujourd’hui :

> Portfolio développeur

Demain :

> Page de génération de leads pour services digitaux PME

---

# 🧭 Refactor recommandé de ta homepage

## 1. HERO (conversion)

* problème client
* solution
* CTA

---

## 2. SERVICES (ultra important)

Remplace Skills

---

## 3. CAS CLIENTS (case studies)

Remplace Projects

---

## 4. POURQUOI MOI

Remplace About

---

## 5. PREUVES

* stats
* résultats
* fiabilité

---

## 6. CONTACT

CTA fort + friction minimale

---

# ⚠️ Conclusion stratégique

Ton projet est déjà :

* techniquement solide
* scalable
* bien structuré

Mais aujourd’hui :

👉 **100% du problème est marketing et positionnement, pas technique**

---

# 👉 prochaine étape recommandée

Je te propose maintenant 2 options :

### Option A (recommandée)

Je te fais :

* une **nouvelle version complète de ta homepage Astro**
* orientée conversion
* avec structure optimisée SEO + UX
* prête à remplacer ton fichier actuel

---

### Option B

Je te construis :

* un **système complet de pages services + SEO + zones géographiques**
* pour transformer ton site en machine à leads

---

Dis-moi simplement : **A ou B**.

Parfait. Je te propose une **refonte complète de ta homepage Astro**, orientée acquisition PME, SEO et conversion. L’objectif est de remplacer ton “portfolio développeur” par une **landing page de génération de leads**.

---

# 🔥 Nouvelle homepage (Astro) — version optimisée conversion

Voici une version directement intégrable et structurée proprement.

---

import MainLayout from "../../layouts/MainLayout.astro";
import SkillCategory from "../../components/SkillCategory.astro";
import ProjectCard from "../../components/ProjectCard.astro";
import { getCollection } from "astro:content";
import { ui } from "../../i18n/ui";

const lang = "fr";
const t = ui[lang];

const projects = await getCollection("projects", ({ id }) => {
return id.startsWith("fr/");
});

const sortedProjects = projects
.sort((a, b) => a.data.title.localeCompare(b.data.title));
----------------------------------------------------------

<MainLayout title="Développeur Full-Stack & partenaire technique pour PME" lang={lang}>

  <main class="max-w-5xl mx-auto px-6 pt-32 pb-24">

```
<!-- HERO -->
<section class="mb-32">
  <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
    J’aide les PME et acteurs locaux à construire des outils web fiables et performants
  </h1>

  <p class="text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
    Sites vitrines, automatisation, intégrations API et maintenance évolutive.
    J’interviens rapidement pour simplifier et fiabiliser vos outils numériques.
  </p>

  <div class="flex flex-wrap gap-4">
    <a href="#contact"
       class="bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition">
      Discuter de votre projet
    </a>

    <a href="#services"
       class="border border-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition">
      Voir mes services
    </a>
  </div>
</section>

<!-- SERVICES -->
<section id="services" class="mb-32">
  <h2 class="text-3xl font-bold mb-12">Ce que je peux faire pour vous</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

    <div class="p-6 border border-slate-800 rounded-xl">
      <h3 class="text-xl font-semibold mb-2">Création de sites web</h3>
      <p class="text-slate-400">
        Sites vitrines modernes, rapides et optimisés SEO pour convertir vos visiteurs en clients.
      </p>
    </div>

    <div class="p-6 border border-slate-800 rounded-xl">
      <h3 class="text-xl font-semibold mb-2">Maintenance & évolution</h3>
      <p class="text-slate-400">
        Corrections, améliorations et évolution continue de vos sites et applications.
      </p>
    </div>

    <div class="p-6 border border-slate-800 rounded-xl">
      <h3 class="text-xl font-semibold mb-2">Automatisation métier</h3>
      <p class="text-slate-400">
        Réduction des tâches répétitives via des automatisations simples et efficaces.
      </p>
    </div>

    <div class="p-6 border border-slate-800 rounded-xl">
      <h3 class="text-xl font-semibold mb-2">Intégrations & outils</h3>
      <p class="text-slate-400">
        CRM, facturation, réservation, API et outils métiers connectés.
      </p>
    </div>

  </div>
</section>

<!-- CASE STUDIES / PROJECTS -->
<section id="projects" class="mb-32">
  <h2 class="text-3xl font-bold mb-12">
    Exemples de réalisations
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {sortedProjects.map((project) => (
      <ProjectCard
        title={project.data.title}
        description={project.data.subtitle}
        stack={project.data.stack}
        category={project.data.category}
        githubUrl={project.data.githubUrl}
        slug={project.id.split('/')[1].replace('.md', '')}
        lang={lang}
      />
    ))}
  </div>

  <p class="text-slate-500 mt-6">
    Projets techniques issus de mon environnement de développement et expérimentations.
  </p>
</section>

<!-- WHY ME -->
<section id="about" class="mb-32">
  <h2 class="text-3xl font-bold mb-12">
    Pourquoi travailler avec moi
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div>
      <h3 class="font-semibold mb-2">Compréhension métier</h3>
      <p class="text-slate-400">
        Je comprends les contraintes réelles des entreprises, pas seulement le code.
      </p>
    </div>

    <div>
      <h3 class="font-semibold mb-2">Intervention rapide</h3>
      <p class="text-slate-400">
        J’interviens sur des besoins ciblés avec un périmètre clair et efficace.
      </p>
    </div>

    <div>
      <h3 class="font-semibold mb-2">Solutions durables</h3>
      <p class="text-slate-400">
        Des systèmes simples à maintenir, évoluer et faire grandir.
      </p>
    </div>

  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="mb-16">
  <h2 class="text-3xl font-bold mb-6">
    Discutons de votre projet
  </h2>

  <p class="text-slate-400 mb-8 max-w-2xl">
    Vous avez un site à créer, améliorer ou automatiser ?
    Je peux vous aider à trouver une solution simple et efficace.
  </p>

  <div class="flex flex-wrap gap-4">
    <a href="mailto:pablo.dupont@gmail.com"
       class="bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition">
      Me contacter par email
    </a>

    <a href="https://github.com/Pablo-Dupont"
       target="_blank"
       class="border border-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition">
      Voir GitHub
    </a>
  </div>
</section>
```

  </main>
</MainLayout>

---

# ⚙️ Ce que cette refonte change concrètement

## 1. Positionnement

Avant :

> développeur full-stack

Après :

> partenaire technique PME orienté résultats

---

## 2. Conversion

Ajouts clés :

* CTA visibles dès le hero
* langage métier
* réduction du jargon technique
* orientation problème → solution

---

## 3. SEO

Tu gagnes immédiatement :

* “sites web PME”
* “automatisation PME”
* “maintenance site web”
* “intégration API entreprise”

---

## 4. Lisibilité client

Les PME comprennent maintenant :

* ce que tu fais
* pourquoi te contacter
* ce qu’elles gagnent

---

# 📌 Prochaine étape logique

Si tu veux continuer proprement, la suite logique est :

### 1. Transformer tes projets en case studies business

### 2. Créer pages SEO :

* services
* zones (Martinique, Guadeloupe, etc.)
* secteurs (artisans, tourisme…)

### 3. Créer design system + palette + logo

### 4. Générer maquettes Pencil

---

Si tu veux, prochaine étape je peux te générer :

👉 **la structure complète des pages SEO (ultra stratégique pour ton marché Antilles + France)**

C’est généralement là que se joue le gros de l’acquisition.

Parfait. Là tu touches au **vrai levier de croissance de ton portfolio** : la structure SEO orientée intention de recherche.

Je vais te donner une architecture complète pensée pour :

* Google (SEO local + longue traîne)
* Conversion PME / artisans / tourisme
* Antilles + France
* ton positionnement “partenaire technique”

---

# 🧠 STRATÉGIE SEO GLOBALE

Tu vas organiser ton site en 4 piliers :

1. **Services (intention commerciale forte)**
2. **Secteurs (ciblage métier)**
3. **Zones géographiques (SEO local)**
4. **Contenu blog (acquisition froide)**

---

# 🧱 1. STRUCTURE /SERVICES (HIGH INTENT)

👉 Objectif : capter les gens prêts à acheter

```txt
/fr/services/
```

## Pages à créer

### Core services

* /fr/services/creation-site-vitrine
* /fr/services/maintenance-site-web
* /fr/services/reprise-projet-web
* /fr/services/correction-bugs-web
* /fr/services/automatisation-pme
* /fr/services/integration-api-crm
* /fr/services/developpement-sur-mesure

---

## SEO intention

Ces pages doivent cibler :

* création site web PME
* développeur site vitrine
* maintenance site internet
* automatisation entreprise
* intégration API entreprise

---

## Structure interne (IMPORTANT)

Chaque page doit contenir :

* problème métier
* solution
* bénéfices
* cas d’usage
* CTA

---

# 🧭 2. STRUCTURE /SECTEURS (NICHE MARKETS)

👉 Objectif : parler le langage du client

```txt
/fr/secteurs/
```

## Pages

* /fr/secteurs/artisans
* /fr/secteurs/pme
* /fr/secteurs/associations
* /fr/secteurs/tourisme
* /fr/secteurs/independants
* /fr/secteurs/activites-locales

---

## Exemple SEO

* site internet artisan
* développeur web artisan
* site web tourisme Antilles
* solution digitale PME

---

## Angle marketing

Tu ne vends plus du code :

Tu vends :

* gain de temps
* acquisition clients
* simplification métier

---

# 🌍 3. STRUCTURE /ZONES (ULTRA IMPORTANT POUR TON CAS)

👉 C’est TON avantage concurrentiel principal

```txt
/fr/zones/
```

## Pages

### France

* /fr/zones/france

### Antilles françaises

* /fr/zones/martinique
* /fr/zones/guadeloupe
* /fr/zones/guyane
* /fr/zones/saint-martin
* /fr/zones/saint-barthelemy

### Bonus stratégique (fort potentiel)

* /fr/zones/antilles

---

## SEO ciblé

* développeur web Martinique
* création site internet Guadeloupe
* freelance web Guyane
* développeur Saint-Martin
* site internet tourisme Antilles

---

## ⚠️ Important

Ces pages doivent être **localisées réellement** :

* exemples locaux
* contexte économique
* besoins spécifiques (tourisme, PME locales)

---

# 🧱 4. STRUCTURE /BLOG (ACQUISITION FROIDE)

```txt
/fr/blog/
```

## Articles à fort potentiel SEO

### Business / conversion

* combien coûte un site internet en 2026
* site vitrine pour artisan prix
* maintenance site web obligatoire ou non
* comment automatiser une PME
* CRM simple pour petite entreprise

---

### SEO local

* développeur web Martinique freelance
* créer site internet Guadeloupe entreprise
* digitalisation PME Antilles

---

### Technique vulgarisée (très puissant)

* pourquoi votre site ne vous apporte pas de clients
* erreurs fréquentes site vitrine PME
* comment améliorer conversion site web

---

# 🧩 5. ARCHITECTURE TECHNIQUE ASTRO (ADAPTÉE À TON PROJET)

Tu peux organiser ton projet comme ça :

```txt
src/pages/fr/
├── index.astro
├── services/
├── secteurs/
├── zones/
├── blog/
├── contact.astro
├── a-propos.astro
```

---

## Bonus recommandé (très important)

Créer un système :

```txt
src/content/
├── services/
├── sectors/
├── zones/
├── blog/
```

👉 pour générer SEO automatiquement

---

# 🚀 STRATÉGIE SEO AVANCÉE (DIFFÉRENCIANTE)

## 1. Pages hybrides (SEO + conversion)

Chaque page doit avoir :

* CTA contact
* CTA audit gratuit
* preuve de projets

---

## 2. Internal linking stratégique

Exemple :

* page artisan → maintenance + site vitrine
* page Martinique → tourisme + PME
* blog → services

---

## 3. “Entity SEO”

Tu dois renforcer :

* développeur full-stack
* automatisation PME
* maintenance web
* site vitrine entreprise

---

# 📊 PRIORITÉ D’IMPLÉMENTATION

## Phase 1 (URGENT)

* /services
* /zones
* refonte SEO homepage

## Phase 2

* /secteurs
* blog

## Phase 3

* optimisation contenu
* backlinks
* articles réguliers

---

# 🎯 RÉSUMÉ STRATÉGIQUE

Aujourd’hui ton site = portfolio.

Après transformation :

👉 machine SEO locale + génération de leads PME Antilles + France

---

# 👉 prochaine étape logique

Si tu veux aller au niveau supérieur, je peux te générer :

### 🔥 un plan de contenu complet sur 30 jours

avec :

* articles exacts à publier
* titres SEO optimisés
* structure Hn
* maillage interne
* objectifs conversion

ou

### 🔥 le design system complet + branding + logo direction Nano Banana

Dis-moi juste lequel tu veux.

Très bien. On va structurer ça comme un **système de marque complet exploitable directement dans ton projet Astro + génération Nano Banana**.

---

# 🎯 1. POSITIONNEMENT DE MARQUE

## Essence

> **Partenaire technique des PME et acteurs locaux pour construire, maintenir et automatiser leurs outils numériques.**

---

## Valeurs de marque

* Fiabilité (solutions stables, maintenables)
* Clarté (pas de complexité inutile)
* Réactivité (intervention rapide)
* Compréhension métier (focus problème > code)

---

## Ton de communication

* Simple
* Direct
* Non-jargonneux
* Orienté résultats

---

# 🎨 2. DESIGN SYSTEM GLOBAL

## 🧱 2.1 Tokens fondamentaux

### Couleurs principales

#### Palette A — “Ocean Tech Premium” (RECOMMANDÉE)

```txt
Primary:   #1D4ED8   (bleu confiance)
Secondary: #0EA5E9   (cyan tech)
Accent:    #10B981   (vert solution)
Warning:   #F97316   (orange action)
Danger:    #EF4444   (rouge alerte)
```

#### Neutres

```txt
Background: #0B1220
Surface:    #111827
Border:     #1F2937
Text:       #E5E7EB
Muted:      #94A3B8
```

---

## 🌈 2.2 Règles d’usage couleur

* Bleu → structure / confiance / navigation
* Cyan → interactions / liens
* Vert → succès / CTA positif
* Orange → actions importantes
* Rouge → erreurs uniquement

---

# ✍️ 2.3 Typographie

## Recommandation principale

### Font principale

* **Inter** (UI, lisibilité, SaaS premium)

### Font secondaire (titres)

* **Sora** ou **Space Grotesk**

---

## Hiérarchie

```txt
H1 → 48–72px (bold, tracking-tight)
H2 → 32–40px
H3 → 20–24px
Body → 16–18px
Small → 14px
```

---

## Style typographique

* titres : très condensés, impactants
* texte : respirant, lisible
* éviter jargon technique

---

# 📐 2.4 Spacing system

Base 4px scale :

```txt
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96
```

---

# 🧩 2.5 Composants UI (design system)

## Boutons

### Primary CTA

* fond bleu (#1D4ED8)
* texte blanc
* hover cyan

### Secondary CTA

* border cyan
* transparent background

### Tertiaire

* text-only

---

## Cards

* background: #111827
* border: #1F2937
* radius: 12–16px
* hover: léger glow bleu

---

## Sections

* padding vertical: 96px desktop / 64px mobile
* max-width: 1100px
* align center

---

## Inputs (contact form)

* fond: surface
* border neutre
* focus: bleu + glow léger

---

# 🧭 2.6 Layout system

## Structure globale

* Hero (full impact)
* Services (conversion)
* Cas clients (preuve)
* Pourquoi moi (réassurance)
* Contact (CTA fort)

---

# 🧠 3. BRANDING VISUEL

## Direction artistique

> “Tech premium accessible + confiance PME”

---

## Style global

* minimaliste
* contrasté
* légèrement futuriste
* mais rassurant (pas startup hype)

---

## Références implicites

* SaaS B2B (type Linear / Vercel)
* agences tech premium
* dashboards modernes

---

# 🧩 4. LOGO — STRATÉGIE

## Positionnement logo

* pas de code symbolique (`</>`)
* pas de cliché dev
* pas de mascotte

---

## Concept 1 (RECOMMANDÉ)

### Monogramme initiales

* formes géométriques
* intégration subtile d’une connexion (node / link)
* style “signature technique”

👉 objectif : crédibilité + premium

---

## Concept 2

### “Pont numérique”

* symbole de connexion
* entre problème → solution
* entre métier → technique

---

## Concept 3

### “Boussole digitale”

* orientation
* guidance
* expertise

---

# 🎨 5. LOGO — DIRECTION NANO BANANA

## Prompt Nano Banana (prêt à utiliser)

```txt
Create a minimalist, premium, modern logo for a freelance full-stack developer positioned as a technical partner for SMEs.

The logo must be a geometric pictogram (no text), representing reliability, digital transformation, and technical clarity.

Style:
- clean vector design
- flat design with subtle depth
- modern SaaS aesthetic
- inspired by premium tech companies (Vercel, Linear style)

Concept direction:
A monogram based on the initials of a personal name, subtly integrated with a digital connection or node network concept. The shape should feel like a bridge between business problems and technical solutions.

Color palette:
- primary deep blue (#1D4ED8)
- optional cyan accent (#0EA5E9)
- neutral dark background

Constraints:
- must work in favicon size
- must remain readable in black & white
- no text, no letters explicitly written
- no clichés like code brackets, </>, or keyboards
- highly scalable vector icon
- simple but memorable shape
```

---

# 🧱 6. DESIGN SYSTEM ASTRO (structure technique)

## Recommandé dans ton projet

```txt
src/
├── styles/
│   ├── tokens.css
│   ├── global.css
│   ├── typography.css
│   └── components.css
```

---

## Tokens CSS exemple

```css
:root {
  --color-primary: #1D4ED8;
  --color-secondary: #0EA5E9;
  --color-accent: #10B981;

  --bg: #0B1220;
  --surface: #111827;
  --border: #1F2937;

  --text: #E5E7EB;
  --muted: #94A3B8;
}
```

---

# 🚀 7. UX STRATÉGIQUE (IMPORTANT)

## Ton site doit toujours répondre à :

### 1. Qu’est-ce que tu fais pour moi ?

### 2. Est-ce que je peux te faire confiance ?

### 3. Comment je te contacte rapidement ?

---

# 📈 8. IMPACT GLOBAL

Avec ce système :

### Avant

* portfolio dev
* technique
* générique

### Après

* marque tech premium
* positionnement PME clair
* SEO local puissant
* conversion optimisée

---

# 👉 prochaine étape logique (très importante)

Je peux maintenant te générer :

## 🔥 1. UI complète de ton portfolio (maquettes texte + Pencil prompts)

OU

## 🔥 2. Architecture Astro finale + refactor complet prêt prod

OU

## 🔥 3. Stratégie LinkedIn + contenu pour générer tes premiers clients

Dis-moi lequel tu veux attaquer en premier.

Parfait. On va passer sur du concret exploitable dans ton flow **Astro → Pencil → implémentation**.

Je te fournis des **prompts Pencil structurés par écrans + composants**, directement orientés ton nouveau positionnement “partenaire technique PME”.

---

# 🎨 1. PROMPT PENCIL — HOMEPAGE (DESKTOP)

```txt
Design a modern, premium SaaS-style homepage for a freelance full-stack developer positioned as a technical partner for SMEs and local businesses.

STYLE:
- Minimalist, premium, tech-oriented
- Inspired by Vercel / Linear / Stripe dashboards
- Dark mode primary UI
- Subtle gradients (blue/cyan/green)
- High readability, strong hierarchy
- No clutter, generous spacing

LAYOUT (desktop):

1. HERO SECTION (above the fold)
- Large bold headline:
  "J’aide les PME et acteurs locaux à construire des outils web fiables et performants"
- Subtitle:
  "Sites vitrines, maintenance, automatisation et intégration d’outils métiers"
- Primary CTA button: "Discuter de votre projet"
- Secondary CTA: "Voir mes services"
- Optional subtle abstract tech illustration (network nodes, connections, digital bridge concept)

2. SERVICES SECTION
4 cards in grid (2x2):
- Création de sites web
- Maintenance & évolution
- Automatisation métier
- Intégration d’outils (CRM, API, facturation)

Each card:
- icon minimal geometric
- title
- short benefit-driven description

3. CASE STUDIES SECTION
Grid of 3–4 project cards
Each card includes:
- project title
- short business-oriented description (not technical)
- tags (SEO, API, automation, etc.)
- subtle hover effect

4. WHY WORK WITH ME SECTION
3 horizontal cards:
- Business understanding
- Fast intervention
- Reliable long-term solutions

5. CONTACT SECTION
- short text: "Discutons de votre projet"
- email CTA button
- optional contact form minimal (name, email, message)

VISUAL RULES:
- spacing very generous
- soft shadows only
- borders subtle
- hover interactions smooth
- focus on clarity and conversion
```

---

# 📱 2. PROMPT PENCIL — HOMEPAGE MOBILE

```txt
Design a mobile-first version of a premium SaaS-style portfolio for a full-stack developer targeting SMEs and local businesses.

STYLE:
- Clean, minimal, high readability
- Thumb-friendly UI
- Strong vertical flow

LAYOUT (mobile):

1. HERO
- headline (2–3 lines max)
- subtitle shorter
- stacked CTA buttons

2. SERVICES
- single column cards
- each card fully tappable

3. PROJECTS
- vertical scroll cards
- each card simplified (title + 1 sentence)

4. WHY WORK WITH ME
- stacked cards

5. CONTACT
- single CTA button + email link

UX RULES:
- no dense text blocks
- large touch targets
- clear hierarchy
- sticky CTA optional ("Contact")
```

---

# 🧩 3. PROMPT PENCIL — SERVICE PAGE TEMPLATE

```txt
Design a conversion-optimized service page for a freelance full-stack developer acting as a technical partner for SMEs.

STYLE:
- premium SaaS landing page
- dark theme
- structured sections
- conversion-focused layout

PAGE STRUCTURE:

1. HERO
- Service title (example: "Création de site vitrine pour PME")
- one sentence value proposition
- CTA button: "Demander un devis"

2. PROBLEM SECTION
- list of common business problems SMEs face
(e.g. no clients, outdated website, manual processes)

3. SOLUTION SECTION
- explanation of how the service solves these problems
- simple, non-technical language

4. WHAT YOU GET
- bullet list of deliverables

5. PROCESS SECTION
- 3 to 5 steps timeline:
  Discovery → Design → Development → Delivery → Support

6. TRUST SECTION
- reliability, speed, experience

7. FINAL CTA
- contact button + reassurance text

VISUAL STYLE:
- structured blocks
- clear separation
- strong hierarchy
- conversion oriented
```

---

# 🌍 4. PROMPT PENCIL — ZONE PAGE (SEO LOCAL)

```txt
Design a local SEO landing page for a freelance full-stack developer targeting a specific geographic region (example: Martinique, Guadeloupe, Guyane).

STYLE:
- trust-oriented, professional, local business feel
- mix of SaaS and local service provider aesthetics

STRUCTURE:

1. HERO
- "Développeur web en Martinique" (or region)
- subtitle: services for local SMEs and businesses
- CTA: contact

2. LOCAL CONTEXT SECTION
- explain digital needs of local businesses
- tourism, SMEs, artisans

3. SERVICES SUMMARY
- 3–4 key services

4. WHY LOCAL WORK MATTERS
- responsiveness
- understanding of local business context
- availability

5. PROJECTS / CASE STUDIES
- 2–3 examples

6. CONTACT SECTION
- strong CTA
- reassurance: response within 24h

VISUAL:
- slightly warmer tone than main site
- still premium SaaS style
```

---

# 🧠 5. PROMPT PENCIL — CASE STUDY PAGE

```txt
Design a case study page for a full-stack developer portfolio focused on business impact rather than technical implementation.

STYLE:
- narrative-driven SaaS case study
- clean layout
- high readability

STRUCTURE:

1. PROJECT TITLE
- business outcome oriented

2. CONTEXT
- client problem

3. CHALLENGE
- what was broken or inefficient

4. SOLUTION
- what was implemented (high-level, not too technical)

5. RESULTS
- measurable or qualitative impact

6. STACK (secondary)
- small section at bottom only

7. CTA
- contact for similar project

VISUAL STYLE:
- storytelling layout
- sections clearly separated
- minimal code exposure
```

---

# 🎯 6. PROMPT PENCIL — DESIGN SYSTEM / UI KIT PAGE

```txt
Design a UI design system page for a modern developer portfolio.

CONTENT:

- color palette (dark tech premium)
- typography hierarchy
- buttons (primary, secondary, ghost)
- cards
- spacing system
- form elements
- icon style

STYLE:
- clean documentation style
- similar to Stripe or Tailwind UI
- dark theme with visible components

PURPOSE:
- demonstrate consistency and professionalism
- act as internal reference for development
```

---

# ⚠️ STRATÉGIE IMPORTANTE

Ces prompts ne sont pas “du design”.

Ils servent à :

* augmenter conversion
* structurer perception client
* renforcer crédibilité PME
* améliorer SEO indirectement (UX + structure + contenu)

---

# 🚀 PROCHAINE ÉTAPE (très importante)

Je te recommande maintenant un choix stratégique :

## Option A

👉 Je te transforme tout ça en **arborescence Astro finale + composants réutilisables**

## Option B

👉 Je te fais un **plan de contenu SEO complet (articles + pages + mots-clés + calendrier 30 jours)**

## Option C

👉 Je te génère le **système complet de composants UI Astro (cards, CTA, sections, layout design system)**

Dis-moi juste A, B ou C.

Parfait. On va passer sur ce qui va réellement générer du trafic qualifié et des prospects : **le plan de contenu SEO complet structuré pour ton marché France + Antilles**.

L’objectif ici n’est pas de “bloguer”, mais de construire une **machine d’acquisition organique** autour de tes services.

---

# 🧠 STRATÉGIE SEO (STRUCTURE INTELLIGENTE)

Tu vas travailler 4 types de contenus :

## 1. Pages transactionnelles (argent direct)

## 2. Pages locales (SEO géographique)

## 3. Pages secteurs (intention métier)

## 4. Articles blog (trafic + autorité)

---

# 💰 1. PAGES TRANSACTIONNELLES (HIGH CONVERSION)

👉 Objectif : clients prêts à acheter

## Pages prioritaires

* Création site vitrine PME
* Création site web artisan
* Maintenance site web
* Reprise de site internet existant
* Correction bugs site web
* Automatisation PME simple
* Intégration API entreprise
* Développeur web freelance

---

## SEO ciblé

* création site internet prix
* développeur site vitrine
* maintenance site web entreprise
* freelance développeur web France

---

## Structure de chaque page

* problème métier
* solution
* bénéfices
* exemples
* process
* CTA

---

# 🌍 2. PAGES LOCALES (TON AVANTAGE CONCURRENTIEL MAJEUR)

👉 Très fort levier pour toi

## Pages à créer

### France

* développeur web France

### Antilles françaises

* développeur web Martinique
* développeur web Guadeloupe
* développeur web Guyane
* développeur web Saint-Martin
* développeur web Saint-Barthélemy

---

## Extensions SEO locales

* création site internet Martinique
* site web tourisme Guadeloupe
* freelance web Antilles

---

## Angle marketing local

Chaque page doit inclure :

* contexte économique local
* besoins des PME locales
* tourisme (très important)
* manque de digitalisation

---

# 🏢 3. PAGES SECTEURS (ULTRA RENTABLES)

👉 Tu parles directement au client

## Pages

* site web pour artisans
* site internet pour PME
* site web pour associations
* site internet pour tourisme
* développeur web pour indépendants
* solutions digitales commerces locaux

---

## Mots-clés associés

* site artisan professionnel
* site web entreprise locale
* digitalisation PME facile

---

## Angle

Tu ne vends pas un site.

Tu vends :

* plus de clients
* gain de temps
* automatisation
* image professionnelle

---

# 🧠 4. BLOG SEO (TRAFFIC + AUTORITÉ)

👉 Attire des clients en phase de réflexion

---

# 🔥 PHASE 1 — ARTICLES HAUTE INTENTION (priorité)

## Business direct

* combien coûte un site vitrine en 2026
* prix création site internet PME
* maintenance site web est-elle nécessaire
* pourquoi mon site ne me ramène pas de clients
* site vitrine ou réseau social ?

---

## Problèmes métier

* comment automatiser une petite entreprise
* comment simplifier la gestion client
* comment réduire les tâches administratives

---

## SEO local

* développeur web Martinique freelance
* créer site internet Guadeloupe entreprise
* digitalisation PME Antilles

---

# 🔥 PHASE 2 — CONTENU ÉDUCATIF

* qu’est-ce qu’un site vitrine efficace
* comment améliorer conversion site web
* erreurs fréquentes site web PME
* comment choisir un développeur web

---

# 🔥 PHASE 3 — CONTENU AUTORITÉ

* étude : digitalisation PME Antilles
* pourquoi les sites web échouent
* analyse d’un bon site vitrine

---

# 📅 CALENDRIER 30 JOURS (ULTRA PRATIQUE)

## Semaine 1 — Base SEO

* création site vitrine PME
* développeur web Martinique
* maintenance site web entreprise
* combien coûte un site internet

---

## Semaine 2 — Conversion

* pourquoi votre site ne convertit pas
* site vitrine artisan
* automatisation PME simple
* site web ou réseaux sociaux

---

## Semaine 3 — Local

* développeur web Guadeloupe
* freelance web Guyane
* site internet tourisme Antilles
* digitalisation PME locale

---

## Semaine 4 — Autorité

* erreurs sites web PME
* comment choisir développeur web
* étude digitalisation PME
* optimisation conversion site web

---

# 🧩 STRUCTURE SEO STANDARD POUR CHAQUE ARTICLE

## H1

problème clair

## Introduction

problème utilisateur

## H2

explication

## H2

solutions

## H2

cas concret

## H2

CTA vers service

---

# 🔗 STRATÉGIE DE LIENS INTERNES

## Chaque article doit pointer vers :

* /services/
* /zones/
* /secteurs/

---

# 📈 STRATÉGIE DE DOMINATION SEO (IMPORTANT)

## 1. Tu ne fais pas du blog généraliste

Tu fais :

👉 SEO local + intention commerciale

---

## 2. Tu attaques des requêtes faibles mais rentables

Ex :

* “développeur web Martinique”
* “site vitrine artisan”
* “maintenance site web PME”

---

## 3. Tu relies tout à tes services

Chaque contenu doit vendre indirectement.

---

# 🚀 STRUCTURE FINALE DU SITE (VISION GLOBALE)

```txt
/
├── services/ (argent)
├── secteurs/ (client cible)
├── zones/ (SEO local)
├── blog/ (trafic)
├── contact/ (conversion)
```

---

# ⚠️ POINT CRITIQUE

Si tu exécutes ce plan correctement :

* tu deviens visible localement en 3–6 mois
* tu captes les PME locales + Antilles
* tu crées un flux inbound stable

---

# 👉 PROCHAINE ÉTAPE RECOMMANDÉE

Je peux maintenant te générer :

## 🔥 Option 1

→ 10 articles SEO complets prêts à publier (H1/H2/texte/CTA)

## 🔥 Option 2

→ Architecture complète Astro + Content Collections pour automatiser tout ça

## 🔥 Option 3

→ stratégie LinkedIn + Facebook pour amplifier le SEO

Dis-moi juste 1, 2 ou 3.
