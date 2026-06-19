# PROJECT_STATE — my_portfolio

> Objectif : transformer ce portfolio technique en machine d'acquisition clients PME.  
> Cible : +1 000€/mois net via Malt + sous-traitance agences. Horizon 6-12 mois.  
> Source audit : `docs/optimisation.md` | Source business : `1.BUSINESS/CLAUDE.md`

---

## État technique actuel ✅

| Élément                             | État      |
| ----------------------------------- | --------- |
| Astro 6.4.8 + Content Layer API     | ✅         |
| i18n FR (défaut) + EN + ES          | ✅         |
| 4 projets × 3 langues (12 markdown) | ✅         |
| Sections About + Contact            | ✅         |
| Switcher 3 langues                  | ✅         |
| OG tags + meta description          | ✅         |
| vercel.json (redirect / → /fr/)     | ✅         |
| Build statique 16 pages             | ✅         |
| pnpm uniquement                     | ✅         |
| Déploiement Vercel                  | ❌ à faire |

---

## ⚠️ BLOQUANT LÉGAL (priorité absolue)

- [ ] Vérifier clause exclusivité du nouveau contrat CDI avant toute création micro-entreprise
- [ ] Si OK → créer micro-entreprise BNC sur guichet-entreprises.fr (gratuit, 30 min)
- [ ] Demander ACRE à l'Urssaf dans les 60j (50% exo si avant juillet 2026)

---

## Phase 0 — Branding & Design System

> À faire AVANT tout nouveau développement. Définit l'identité visuelle de tout le site.

- [ ] Choisir palette définitive (recommandée : "Ocean Tech Premium")
  
  ```text
  Primary   #1D4ED8  (bleu confiance)
  Secondary #0EA5E9  (cyan tech)
  Accent    #10B981  (vert solution)
  BG        #0B1220
  Surface   #111827
  Border    #1F2937
  ```

- [ ] Choisir typographie : Inter (body) + Space Grotesk (titres)
- [ ] Générer logo avec prompt Nano Banana (voir `docs/optimisation.md` section 5)
- [ ] Créer `src/styles/tokens.css` (variables CSS design system)
- [ ] Créer maquettes Pencil : homepage desktop + mobile + page service
- [ ] Valider design système avant d'écrire du CSS

---

## Phase 1 — Refonte Homepage (conversion PME)

> Problème actuel : "portfolio dev" → doit devenir "page de génération de leads PME".

### Hero (remplace le titre actuel)

- [ ] Titre orienté résultat client : "J'aide les PME et acteurs locaux à construire des outils web fiables et performants"
- [ ] Sous-titre : services concrets (pas stack technique)
- [ ] 2 CTA visibles : "Discuter de votre projet" + "Voir mes services"
- [ ] Décliner EN + ES

### Section Services (remplace Expertise Technique)

- [ ] 4 cartes : Création de sites web / Maintenance & évolution / Automatisation métier / Intégrations & outils
- [ ] Langage métier uniquement (pas de frameworks)
- [ ] Lien vers pages `/services/*` une fois créées
- [ ] Décliner EN + ES

### Section Projets → Case Studies

- [ ] Reformuler chaque projet en angle business (problème → solution → résultat)
- [ ] Stack en bas de page, pas en titre de card
- [ ] Ajouter disclaimer : "expérimentations perso" pour les projets techniques actuels
- [ ] Décliner EN + ES

### Section "Pourquoi travailler avec moi" (remplace About autobiographique)

- [ ] 3 arguments métier : Compréhension métier / Intervention rapide / Solutions durables
- [ ] Pas autobiographique — orienté bénéfice client
- [ ] Décliner EN + ES

### Section Preuves sociales (nouveau)

- [ ] Indicateurs de confiance : "Réponse sous 24h" / "X projets livrés" / "Disponible pour retainer"
- [ ] Témoignages (fictifs acceptables au lancement, à remplacer dès 1er client)
- [ ] Composant `TrustIndicators.astro`

### Section Contact (renforcer)

- [ ] Remplacer "mailto:" pur par formulaire court (nom + email + message)
- [ ] Composant `ContactForm.astro` (Netlify Forms ou Formspree — gratuit)
- [ ] CTA fort : "Réponse sous 24h"
- [ ] Garder email + GitHub + Malt (quand actif)
- [ ] Décliner EN + ES

---

## Phase 2 — Architecture SEO (pages services)

> Objectif : capter les clients en phase d'achat via Google.

### Créer `src/pages/fr/services/`

- [ ] `creation-site-vitrine.astro`
- [ ] `maintenance-site-web.astro`
- [ ] `correction-bugs.astro`
- [ ] `automatisation-pme.astro`
- [ ] `integration-api-crm.astro`
- [ ] `developpement-sur-mesure.astro`
- [ ] `reprise-projet-web.astro`

**Structure de chaque page :** problème métier → solution → bénéfices → process → CTA  
**EN + ES** : à décliner en phase 3 (FR prioritaire)

---

## Phase 3 — SEO Local (zones géographiques)

> Avantage concurrentiel fort : connexion Antilles françaises + France.

### Créer `src/pages/fr/zones/`

- [ ] `france.astro`
- [ ] `martinique.astro`
- [ ] `guadeloupe.astro`
- [ ] `guyane.astro`
- [ ] `saint-martin.astro`
- [ ] `saint-barthelemy.astro`
- [ ] `antilles.astro` (agrégateur SEO)

**Contenu** : contexte économique local, besoins PME/tourisme, CTA fort  
**Mots-clés ciblés** : "développeur web Martinique", "création site Guadeloupe", etc.

---

## Phase 4 — SEO Sectoriel (pages secteurs)

### Créer `src/pages/fr/secteurs/`

- [ ] `artisans.astro`
- [ ] `pme.astro`
- [ ] `associations.astro`
- [ ] `tourisme.astro`
- [ ] `independants.astro`
- [ ] `commerces-locaux.astro`

**Angle** : problème métier spécifique → solution adaptée (pas de jargon dev)

---

## Phase 5 — Blog SEO (acquisition froide)

### Créer `src/content/blog/` + `src/pages/fr/blog/`

- [ ] Architecture Content Layer (collection `blog` dans `src/content.config.ts`)
- [ ] Page liste `src/pages/fr/blog/index.astro`
- [ ] Page article `src/pages/fr/blog/[slug].astro`

### Articles prioritaires (Semaine 1-2)

- [ ] combien-coute-site-vitrine-2026.md
- [ ] maintenance-site-web-entreprise.md
- [ ] pourquoi-site-ne-convertit-pas.md
- [ ] developpeur-web-martinique-freelance.md

### Articles phase 2

- [ ] automatisation-pme-simple.md
- [ ] site-vitrine-artisan.md
- [ ] freelance-web-guadeloupe.md
- [ ] erreurs-site-web-pme.md

---

## Phase 6 — Case Studies (contenu business)

> Complémentaire aux projets techniques existants — pour l'audience PME.

### Créer `src/content/case-studies/`

- [ ] `refonte-site-artisan.md` (fictif si pas de client encore)
- [ ] `automatisation-facturation-pme.md`
- [ ] `correction-bug-production.md`
- [ ] `integration-crm-site.md`

**Structure** : contexte → problème → solution → résultat → stack (en bas)

---

## Phase 7 — Composants manquants

| Composant               | Priorité  | Description                                    |
| ----------------------- | --------- | ---------------------------------------------- |
| `ContactForm.astro`     | 🔴 Haute   | Formulaire court (Formspree gratuit)           |
| `CTASection.astro`      | 🔴 Haute   | Section CTA réutilisable (fin de chaque page)  |
| `TrustIndicators.astro` | 🟡 Moyenne | Badges de confiance (délai, expérience, dispo) |
| `Testimonials.astro`    | 🟡 Moyenne | Témoignages (fictifs → réels)                  |
| `ServiceCard.astro`     | 🟡 Moyenne | Card service réutilisable (pages /services/)   |

---

## Phase 8 — SEO Technique

- [ ] Sitemap XML automatique (`@astrojs/sitemap` — intégration native Astro)
- [ ] `public/robots.txt`
- [ ] Image OG par défaut (`public/og-default.png`, 1200×630)
- [ ] Schema.org `LocalBusiness` + `Person` dans MainLayout
- [ ] Canonical tag sur toutes les pages
- [ ] Balises hreflang FR/EN/ES (i18n SEO)
- [ ] Google Search Console après déploiement

---

## Phase 9 — Déploiement Vercel

- [ ] Choisir nom de domaine (budget 10-15€/an max)
  - Option A : `paul-sebas.dev`
  - Option B : `paul-sebas-pro.dev`
  - Option C : nom-service (ex: `artisanweb.fr` — si positionnement niche)
- [ ] Connecter repo GitHub à Vercel
- [ ] Configurer domaine custom dans Vercel
- [ ] Vérifier build prod (Node 22 sur Vercel — OK natif)
- [ ] Tester les 16 routes statiques + redirections
- [ ] Analytics : ajouter Umami (gratuit, RGPD) ou Vercel Analytics (gratuit tier)

---

## Phase 10 — Activation Canaux Acquisition

> À démarrer dès portfolio en ligne.

### Malt (priorité 1)

- [ ] Créer profil Malt avec photo professionnelle
- [ ] Titre : "Développeur Full-Stack | Sites web et automatisation pour PME"
- [ ] Description orientée résultats (pas stack)
- [ ] Lien portfolio Vercel
- [ ] Mots-clés niche : React, Node.js, PostgreSQL, Docker, maintenance, API
- [ ] Tarif journalier : définir (benchmark Malt ~350-500€/j profil intermédiaire)

### LinkedIn (priorité 2 — activation J60+)

- [ ] Optimiser profil : titre orienté PME, résumé business
- [ ] Lien portfolio
- [ ] 1ère publication : présentation + portfolio
- [ ] Plan contenu : 2 posts/semaine (tips, cas, avant/après)

### Agences web sous-traitance (priorité 1 — cash rapide)

- [ ] Liste 10-15 agences web FR (Martinique, Guadeloupe, France)
- [ ] Email court de présentation (template dans `1.BUSINESS/1.ROADMAP/roadmap.md`)
- [ ] Profil GitHub polish (README projets)

### Facebook groupes Antilles (priorité 3)

- [ ] Rejoindre groupes entrepreneurs Martinique/Guadeloupe
- [ ] Participation utile 2-3 semaines avant toute promotion

---

## Argument commercial 2026 à intégrer dans les pages services

> **Facturation électronique obligatoire à la réception pour toutes les entreprises : 1er septembre 2026.**  
> Angle : "Je vous aide à mettre en place les bons outils avant l'échéance, simplement."  
> Intégrer dans : page services/integration-api-crm + page secteurs/pme

---

## Ordre d'exécution recommandé

```text
BLOQUANT LÉGAL → Phase 0 (branding) → Phase 1 (homepage)
    → Phase 2 (services) + Phase 8 (SEO tech) → Phase 9 (déploiement)
    → Phase 10 (Malt + agences) — PREMIER CLIENT CIBLE J60
    → Phase 3 (zones) → Phase 4 (secteurs) → Phase 5 (blog)
    → Phase 6 (case studies) → Phase 10 (LinkedIn activation J60+)
```

---

## Stack technique cible (inchangée)

```text
Astro 6     — framework SSG
Tailwind v4 — styling CSS-first
Content Layer — projets, case studies, blog
i18n Astro  — FR (défaut) + EN + ES
Formspree   — formulaire contact (gratuit)
Vercel      — hébergement SSG (gratuit)
Umami       — analytics RGPD (gratuit)
pnpm        — gestionnaire de paquets
Node 24     — runtime
```
