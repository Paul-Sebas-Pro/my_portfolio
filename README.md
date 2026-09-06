# paul-sebas.fr — Portfolio & site d'acquisition

Site vitrine de Paul Sebas, développeur web freelance (React / Node / PostgreSQL / Docker).
Objectif : transformer un portfolio technique en machine d'acquisition pour PME et agences —
pages SEO par zone géographique et par secteur, blog, études de cas.

**En ligne :** https://paul-sebas.fr

## Stack

- **Astro 6** (build statique) + Content Layer API
- **Tailwind CSS 4** (via `@tailwindcss/vite`) + design system maison (`src/styles/tokens.css`)
- **i18n** : FR (défaut) · EN · ES — routage `/fr/`, `/en/`, `/es/`
- **@astrojs/sitemap** — `sitemap-index.xml` généré au build
- Hébergement **Vercel** · domaine **OVHcloud** · formulaire **Formspree** · **Vercel Analytics**
- Node ≥ 24 · gestionnaire **pnpm**

## Développement

```bash
pnpm install
pnpm dev        # serveur local (astro dev)
pnpm build      # build statique -> dist/ (46 pages)
pnpm preview    # prévisualiser le build
```

## Structure

```
src/
  pages/
    fr/ en/ es/        Pages par langue
      services/        7 pages service (SEO achat) — FR
      zones/           7 pages zone géo (France, Antilles, DOM) — FR
      secteurs/        6 pages secteur (PME, artisans, tourisme…) — FR
      projects/        Projets perso
      blog/  case-studies/
  content/             Markdown (blog, case-studies, projects) — content.config.ts
  layouts/             MainLayout + ServiceLayout / ZoneLayout / SectorLayout
  components/          Cartes, formulaire contact, indicateurs de confiance
  i18n/                Chaînes traduites
  styles/tokens.css    Design system (couleurs, typo, espacements)
```

EN / ES : homepage + about + contact traduits ; les pages services / zones / secteurs
sont FR uniquement pour l'instant (priorité SEO France).

## Déploiement

Push sur `main` → build automatique Vercel → `paul-sebas.fr`.
`site:` est fixé dans `astro.config.mjs` (`https://paul-sebas.fr`) pour l'URL canonique et le sitemap.

## Suivi projet

Voir `PROJECT_STATE.md` pour l'avancement détaillé par phase.
Contexte business : `/home/pablo/projects/pro/1.BUSINESS/`.
