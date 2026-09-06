# PROJECT_STATE — my_portfolio

> Objectif : transformer ce portfolio technique en machine d'acquisition clients PME.  
> Cible : +1 000€/mois net via Malt + sous-traitance agences. Horizon 6-12 mois.  
> Source business : `/home/pablo/projects/pro/1.BUSINESS/` (roadmap, suivi, 3.ACQUISITION)

---

## Reprise septembre 2026

Projet en pause de juin à septembre 2026, repris le 2026-09-06.
- README réécrit, `package.json` complété (description, auteur, `private`)
- Argument facturation électronique passé au présent sur toutes les pages FR
  (services / secteurs / zones / case-study) — obligation à la réception en vigueur depuis le 1er sept. 2026
- Build OK : 46 pages
- `Testimonials.astro` : composant prêt mais **non câblé** et hors design system (classes `slate-*` au lieu des tokens) — à réintégrer proprement ou retirer quand de vrais témoignages existent

---

## État technique actuel

| Élément                                   | État       |
| ----------------------------------------- | ---------- |
| Astro 6.4.8 + Content Layer API           | ✅          |
| i18n FR (défaut) + EN + ES                | ✅          |
| 4 projets × 3 langues (12 markdown)       | ✅          |
| Sections About + Contact                  | ✅          |
| Switcher 3 langues                        | ✅          |
| OG tags + meta description                | ✅          |
| vercel.json (redirect / → /fr/)           | ✅          |
| Build statique 46 pages                   | ✅          |
| pnpm + Node 24                            | ✅          |
| Design system (tokens.css + Bunny Fonts)  | ✅          |
| Homepage refonte PME                      | ✅          |
| Déploiement Vercel                        | ✅ en ligne |
| Domaine paul-sebas.fr (OVHCloud)          | ✅          |
| Formspree contact (ID xkolnlgd)           | ✅          |
| Vercel Analytics                          | ✅          |
| Nav + footer enrichis (Blog/Réalisations) | ✅          |

---

## ⚠️ BLOQUANT LÉGAL (priorité absolue)

- [ ] Vérifier clause exclusivité du nouveau contrat CDI avant toute création micro-entreprise
- [ ] Si OK → créer micro-entreprise BNC sur guichet-entreprises.fr (gratuit, 30 min)
- [ ] Demander ACRE à l'Urssaf dans les 60j (50% exo si avant juillet 2026)

---

## Phase 0 — Branding & Design System ✅

- [x] Choisir palette définitive : **Ocean Tech Premium**
  
  ```text
  Primary   #1D4ED8  (bleu confiance)
  Secondary #0EA5E9  (cyan tech)
  Accent    #10B981  (vert solution)
  BG        #0B1220
  Surface   #111827
  Border    #1F2937
  ```

- [x] Choisir typographie : Inter (body) + Space Grotesk (titres) via Bunny Fonts
- [x] Créer `src/styles/tokens.css` (variables CSS design system)
- [x] Logo SVG : `public/logo.svg` + `public/favicon.svg` (prompt Nano Banana — voir `docs/optimisation.md` section 5)
- [x] Maquettes Pencil : homepage desktop + mobile + page service (`docs/maquettes.pen`)

---

## Phase 1 — Refonte Homepage (conversion PME) ✅ (partiel)

### Hero ✅
- [x] Titre PME : "J'aide les PME et acteurs locaux à construire des outils web fiables et performants"
- [x] Sous-titre : services concrets (pas stack technique)
- [x] 2 CTA : "Discuter de votre projet" + "Voir mes services"
- [x] Décliné EN + ES

### Section Services ✅
- [x] 4 cartes : Création de sites web / Maintenance & évolution / Automatisation métier / Intégrations & outils
- [x] Composant `ServiceCard.astro` créé
- [x] Décliné EN + ES
- [x] Lien vers pages `/fr/services/*` (Phase 2 ✅)

### Section "Pourquoi travailler avec moi" ✅
- [x] 3 arguments : Compréhension métier / Intervention rapide / Solutions durables
- [x] Composant `WhyCard.astro` créé
- [x] Décliné EN + ES

### Section Preuves sociales ✅
- [x] `TrustIndicators.astro` : "Réponse sous 24h" / "4 projets livrés" / "Disponible pour retainer"

### Section Projets → Case Studies ❌ (à faire)
- [ ] Reformuler chaque projet en angle business (problème → solution → résultat)
- [ ] Ajouter disclaimer "expérimentations perso"

### Section Contact ✅

- [x] Email `paul.sebas.freelance@free.fr` + GitHub
- [x] Composant `ContactForm.astro` (Formspree — prop `formId` à configurer)
- [x] TrustIndicators "Réponse sous 24h" au-dessus du formulaire

---

## Phase 2 — Architecture SEO (pages services) ✅

> Objectif : capter les clients en phase d'achat via Google.

- [x] `creation-site-vitrine.astro`
- [x] `maintenance-site-web.astro`
- [x] `correction-bugs.astro`
- [x] `automatisation-pme.astro`
- [x] `integration-api-crm.astro` (angle facturation électronique 2026 intégré)
- [x] `developpement-sur-mesure.astro`
- [x] `reprise-projet-web.astro`
- [x] `src/layouts/ServiceLayout.astro` (layout réutilisable)
- [x] `ServiceCard.astro` — prop `href` optionnel ajouté

**EN + ES** : à décliner en Phase 3 ultérieure (FR prioritaire)

---

## Phase 3 — SEO Local (zones géographiques) ✅

> Avantage concurrentiel fort : connexion Antilles françaises + France.

- [x] `france.astro` — remote-first, toutes PME françaises
- [x] `martinique.astro` — tourisme, commerce, artisanat créole
- [x] `guadeloupe.astro` — multi-îles, agriculture, tourisme
- [x] `guyane.astro` — spatial, industrie, croissance DOM
- [x] `saint-martin.astro` — bilingue FR/EN, tourisme insulaire
- [x] `saint-barthelemy.astro` — luxe premium, clientèle internationale
- [x] `antilles.astro` — agrégateur SEO (avantage concurrentiel clé)
- [x] `src/layouts/ZoneLayout.astro` (layout réutilisable zones)

---

## Phase 4 — SEO Sectoriel (pages secteurs) ✅

- [x] `artisans.astro` — site vitrine + devis, galerie travaux
- [x] `pme.astro` — automatisation, facturation 2026, intégrations
- [x] `associations.astro` — adhésion, dons, événements, budget adapté
- [x] `tourisme.astro` — bilingue FR/EN, réservation directe, OTA
- [x] `independants.astro` — personal branding, portfolio, RDV
- [x] `commerces-locaux.astro` — click & collect, Google Maps, fidélisation
- [x] `src/layouts/SectorLayout.astro` (layout réutilisable secteurs)

---

## Phase 5 — Blog SEO (acquisition froide) ✅

### `src/content/blog/` + `src/pages/fr/blog/`

- [x] Collection `blog` dans `src/content.config.ts` (import `z` depuis `astro/zod`)
- [x] `src/layouts/BlogLayout.astro` (layout articles : header, prose, CTA)
- [x] Page liste `src/pages/fr/blog/index.astro` (grille 2 col, tri par date)
- [x] Page article `src/pages/fr/blog/[slug].astro` (getStaticPaths + render)

### Articles prioritaires ✅

- [x] `combien-coute-site-vitrine-2026.md` — tarifs, fourchettes marché, signaux d'alarme
- [x] `maintenance-site-web-entreprise.md` — sécurité, performance, modèles de contrat
- [x] `pourquoi-site-ne-convertit-pas.md` — 7 raisons, diagnostic, CTA
- [x] `developpeur-web-martinique-freelance.md` — local vs remote, évaluation, pièges

### Articles phase 2 ❌ (à rédiger)

- [ ] automatisation-pme-simple.md
- [ ] site-vitrine-artisan.md
- [ ] freelance-web-guadeloupe.md
- [ ] erreurs-site-web-pme.md

---

## Phase 6 — Case Studies (contenu business) ✅

> Complémentaire aux projets techniques existants — pour l'audience PME.

- [x] Collection `caseStudies` dans `src/content.config.ts`
- [x] `src/layouts/CaseStudyLayout.astro` (metadata, résultats clés, stack badges)
- [x] `src/pages/fr/case-studies/index.astro` + `[slug].astro`
- [x] `refonte-site-artisan.md` — électricien Martinique, +40% devis, score 38→91
- [x] `automatisation-facturation-pme.md` — 8h/semaine éliminées, ROI < 1 mois
- [x] `correction-bug-production.md` — webhooks Stripe silencieux, corrigé en 24h
- [x] `integration-crm-site.md` — leads → HubSpot auto, délai contact -52%

**Structure appliquée** : contexte → problème → solution → résultat → stack

---

## Phase 7 — Composants manquants ✅

| Composant               | État | Priorité  | Description                                   |
| ----------------------- | ---- | --------- | --------------------------------------------- |
| `ServiceCard.astro`     | ✅    | 🔴 Haute   | Card service réutilisable                     |
| `WhyCard.astro`         | ✅    | 🔴 Haute   | Arguments différenciants                      |
| `TrustIndicators.astro` | ✅    | 🟡 Moyenne | Badges de confiance                           |
| `ContactForm.astro`     | ✅    | 🔴 Haute   | Formspree (à configurer: prop `formId`)       |
| `CTASection.astro`      | ✅    | 🔴 Haute   | Section CTA réutilisable (fin de chaque page) |
| `Testimonials.astro`    | ✅    | 🟡 Moyenne | Témoignages — composant prêt, à peupler avec vrais clients |

---

## Phase 8 — SEO Technique ✅ (partiel)

- [x] Sitemap XML automatique — `@astrojs/sitemap` 3.7.3 (16 URLs, `sitemap-index.xml`)
- [x] `public/robots.txt` — `Allow: /` + pointeur sitemap
- [x] Schema.org `Person` JSON-LD dans MainLayout (jobTitle FR/EN/ES)
- [x] Canonical tag sur toutes les pages
- [x] Balises hreflang FR/EN/ES + x-default
- [x] OG meta : `og:url`, `og:image` (1200×630), `twitter:card` large
- [x] Meta descriptions refondues (axe PME, non dev-portfolio)
- [x] Image OG par défaut (`public/og-default.png`, 1200×630) ✅
- [x] `site:` dans `astro.config.mjs` = `https://paul-sebas.fr` ✅
- [ ] Google Search Console — sitemap soumis, en attente d'indexation (erreur temporaire DNS propagation)

---

## Phase 9 — Déploiement Vercel ✅ (site en ligne)

- [x] `vercel.json` — redirect `/` → `/fr/` permanent (301)
- [x] `.node-version` 24 + `engines.node >=24`
- [x] `astro.config.mjs` — `site: "https://paul-sebas.fr"`
- [x] `public/robots.txt` — sitemap `paul-sebas.fr`
- [x] Domaine `paul-sebas.fr` — OVHCloud, DNS A `76.76.21.21` + CNAME `www`
- [x] Vercel — GitHub connecté, build automatique sur push
- [x] Formspree `xkolnlgd` — activé FR + EN + ES
- [x] OG image `public/og-default.png` 1200×630
- [x] Vercel Analytics — script injecté dans MainLayout
- [x] Nav enrichi : Services / Réalisations / Blog / Contact (liens absolus)
- [x] Footer 4 colonnes : Services, Contenu, Zones, liens sociaux
- [x] Google Search Console — sitemap soumis `https://paul-sebas.fr/sitemap-index.xml`
  → en attente d'indexation (erreur temporaire, vérifier demain)
- [x] Tester formulaire contact (envoyer un message test)
- [x] Vérifier redirect `paul-sebas.fr` → `paul-sebas.fr/fr/`

---

## Phase 10 — Activation Canaux Acquisition ❌

> À démarrer dès portfolio en ligne.

### Malt (priorité 1)

> Contrainte : CDI France métropolitaine + freelance ~10h/semaine. Remote uniquement. Missions courtes, tarification forfait.  
> Contenu profil préparé dans `1.BUSINESS/malt-profil.md`

- [ ] Créer profil Malt avec photo professionnelle
- [ ] Titre : "Développeur Full-Stack | Sites web et automatisation pour PME"
- [ ] Description orientée résultats (pas stack) — voir `1.BUSINESS/malt-profil.md`
- [ ] Lien portfolio paul-sebas.fr
- [ ] Mots-clés niche : React, Node.js, PostgreSQL, Docker, maintenance, API
- [ ] TJM fictif Malt : 420€/j (pour filtres) — facturer en forfait réel
- [ ] Renseigner disponibilité partielle + missions courtes

### LinkedIn (priorité 2 — activation J60+)

- [ ] Optimiser profil : titre orienté PME, résumé business
- [ ] Lien portfolio
- [ ] 1ère publication : présentation + portfolio
- [ ] Plan contenu : 2 posts/semaine (tips, cas, avant/après)

### Agences web sous-traitance (priorité 1 — cash rapide)

- [x] Liste 15 agences (Martinique, Guadeloupe, France) — `1.BUSINESS/liste-agences.md`
- [x] Templates email — `1.BUSINESS/email-agences.md` (2 versions : Antilles + France)
- [ ] Envoyer emails semaine 1 : Martinique + Guadeloupe (angle origine martiniquaise)
- [ ] Envoyer emails semaine 2 : France métropolitaine (volume)
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
✅ Phase 0 (branding) → ✅ Phase 1 (homepage) → ✅ Phase 7 (composants)
→ �� Phase 2 (7 services FR) → ✅ Phase 8 (SEO tech) → ✅ Phase 3 (7 zones)
→ ✅ Phase 9 prep code (Vercel config)
→ ✅ Phase 4 (6 secteurs) → ✅ Phase 5 (blog, 4 articles) → ✅ Phase 6 (4 case studies)
→ Phase 9 déploiement réel (domaine à choisir)
→ Phase 10 (Malt + agences) — PREMIER CLIENT CIBLE J60
→ Phase 10 (LinkedIn activation J60+)

Build actuel : 46 pages statiques
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
