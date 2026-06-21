# PROJECT_STATE — my_portfolio

> Objectif : transformer ce portfolio technique en machine d'acquisition clients PME.  
> Cible : +1 000€/mois net via Malt + sous-traitance agences. Horizon 6-12 mois.  
> Source audit : `docs/optimisation.md` | Source business : `1.BUSINESS/CLAUDE.md`

---

## État technique actuel

| Élément                                  | État      |
| ---------------------------------------- | --------- |
| Astro 6.4.8 + Content Layer API          | ✅         |
| i18n FR (défaut) + EN + ES               | ✅         |
| 4 projets × 3 langues (12 markdown)      | ✅         |
| Sections About + Contact                 | ✅         |
| Switcher 3 langues                       | ✅         |
| OG tags + meta description               | ✅         |
| vercel.json (redirect / → /fr/)          | ✅         |
| Build statique 16 pages                  | ✅         |
| pnpm + Node 24                           | ✅         |
| Design system (tokens.css + Bunny Fonts) | ✅         |
| Homepage refonte PME                     | ✅         |
| Déploiement Vercel                       | ❌ à faire |

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
- [ ] Lien vers pages `/services/*` (Phase 2 non créée)

### Section "Pourquoi travailler avec moi" ✅
- [x] 3 arguments : Compréhension métier / Intervention rapide / Solutions durables
- [x] Composant `WhyCard.astro` créé
- [x] Décliné EN + ES

### Section Preuves sociales ✅
- [x] `TrustIndicators.astro` : "Réponse sous 24h" / "4 projets livrés" / "Disponible pour retainer"

### Section Projets → Case Studies ❌ (à faire)
- [ ] Reformuler chaque projet en angle business (problème → solution → résultat)
- [ ] Ajouter disclaimer "expérimentations perso"

### Section Contact ⚠️ (partiel)
- [x] Email `paul.sebas.freelance@free.fr` + GitHub
- [ ] Composant `ContactForm.astro` (Formspree — remplacer le mailto pur)
- [ ] CTA fort "Réponse sous 24h" intégré au formulaire

---

## Phase 2 — Architecture SEO (pages services) ❌

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

## Phase 3 — SEO Local (zones géographiques) ❌

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

## Phase 4 — SEO Sectoriel (pages secteurs) ❌

### Créer `src/pages/fr/secteurs/`

- [ ] `artisans.astro`
- [ ] `pme.astro`
- [ ] `associations.astro`
- [ ] `tourisme.astro`
- [ ] `independants.astro`
- [ ] `commerces-locaux.astro`

**Angle** : problème métier spécifique → solution adaptée (pas de jargon dev)

---

## Phase 5 — Blog SEO (acquisition froide) ❌

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

## Phase 6 — Case Studies (contenu business) ❌

> Complémentaire aux projets techniques existants — pour l'audience PME.

### Créer `src/content/case-studies/`

- [ ] `refonte-site-artisan.md` (fictif si pas de client encore)
- [ ] `automatisation-facturation-pme.md`
- [ ] `correction-bug-production.md`
- [ ] `integration-crm-site.md`

**Structure** : contexte → problème → solution → résultat → stack (en bas)

---

## Phase 7 — Composants manquants ✅

| Composant               | État | Priorité  | Description                                   |
| ----------------------- | ---- | --------- | --------------------------------------------- |
| `ServiceCard.astro`     | ✅    | 🔴 Haute   | Card service réutilisable                     |
| `WhyCard.astro`         | ✅    | 🔴 Haute   | Arguments différenciants                      |
| `TrustIndicators.astro` | ✅    | 🟡 Moyenne | Badges de confiance                           |
| `ContactForm.astro`     | ✅    | 🔴 Haute   | Formspree (à configurer: prop `formId`)       |
| `CTASection.astro`      | ✅    | 🔴 Haute   | Section CTA réutilisable (fin de chaque page) |
| `Testimonials.astro`    | ❌    | 🟡 Moyenne | Témoignages (fictifs → réels)                 |

---

## Phase 8 — SEO Technique ✅ (partiel)

- [x] Sitemap XML automatique — `@astrojs/sitemap` 3.7.3 (16 URLs, `sitemap-index.xml`)
- [x] `public/robots.txt` — `Allow: /` + pointeur sitemap
- [x] Schema.org `Person` JSON-LD dans MainLayout (jobTitle FR/EN/ES)
- [x] Canonical tag sur toutes les pages
- [x] Balises hreflang FR/EN/ES + x-default
- [x] OG meta : `og:url`, `og:image` (1200×630), `twitter:card` large
- [x] Meta descriptions refondues (axe PME, non dev-portfolio)
- [ ] Image OG par défaut (`public/og-default.png`, 1200×630) — **à créer manuellement** (PNG requis, pas SVG)
- [ ] `site:` dans `astro.config.mjs` = `https://paul-sebas.dev` — **à mettre à jour** avec le vrai domaine (Phase 9)
- [ ] Google Search Console — après déploiement (Phase 9)

---

## Phase 9 — Déploiement Vercel ⚠️ (prep code ✅ — actions manuelles restantes)

### ✅ Préparation technique (code, fait)

- [x] `vercel.json` — `framework:astro`, `buildCommand`, `outputDirectory:dist`, `installCommand:pnpm install`, redirect `/` → `/fr/` permanent (301)
- [x] `.node-version` — `24` (Vercel lit ce fichier)
- [x] `package.json` — `engines.node: ">=24"`
- [x] `astro.config.mjs` — `site: "https://paul-sebas.dev"` (placeholder — à mettre à jour avec le vrai domaine)

### ⚠️ Actions manuelles (dans l'ordre)

1. **Domaine** — choisir et acheter (budget 10-15€/an)
   - Option A : `paul-sebas.dev` ← recommandé (court, `.dev` = crédibilité tech)
   - Option B : `paul-sebas-pro.dev`
   - Option C : `artisanweb.fr` (niche PME — irréversible)

2. **Mettre à jour le domaine dans le code** (après choix) :
   - `astro.config.mjs` ligne 7 : `site: "https://DOMAINE_CHOISI"`
   - `public/robots.txt` ligne 3 : `Sitemap: https://DOMAINE_CHOISI/sitemap-index.xml`

3. **Vercel** — connecter GitHub :
   - Aller sur vercel.com → New Project → importer `Paul-Sebas-Pro/my_portfolio`
   - Build: `pnpm run build` | Output: `dist` | Node: **24** (auto-détecté via `.node-version`)
   - Configurer domaine custom dans Vercel dashboard

4. **Formspree** — activer le formulaire :
   - formspree.io → créer formulaire → copier ID
   - `src/pages/{fr,en,es}/index.astro` : ajouter `formId="VOTRE_ID"` sur `<ContactForm>`

5. **OG image** — créer `public/og-default.png` (1200×630 PNG)
   - Outil : Canva / export Figma / screenshot Pencil maquette

6. **Post-déploiement** :
   - [ ] Google Search Console — soumettre sitemap `https://DOMAINE/sitemap-index.xml`
   - [ ] Analytics : Vercel Analytics (gratuit, 1 ligne) ou Umami (auto-hébergé, RGPD strict)
   - [ ] Tester les 16 routes + redirect `/` → `/fr/`

---

## Phase 10 — Activation Canaux Acquisition ❌

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
✅ Phase 0 (branding) → ✅ Phase 1 (homepage)
    → Phase 7 partiel (ContactForm + CTASection)
    → Phase 2 (services FR) + Phase 8 (SEO tech)
    → Phase 9 (déploiement Vercel + domaine)
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
