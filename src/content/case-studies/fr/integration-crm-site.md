---
title: "Intégration CRM — Leads site web → HubSpot automatiquement"
description: "Les formulaires du site web généraient des leads qui étaient copiés manuellement dans HubSpot. Intégration webhook en 5 jours : 100% des leads capturés, temps de réponse commercial divisé par 2."
clientType: "PME services B2B (12 salariés)"
sector: "Services & Conseil"
duration: "5 jours"
results:
  - "100% des leads web capturés automatiquement"
  - "Délai de premier contact commercial : -52%"
  - "Zéro perte de lead depuis le déploiement"
  - "3h/semaine de saisie manuelle éliminées"
stack: ["Node.js", "Webhook", "HubSpot API", "Zod", "Vercel Functions"]
pubDate: 2026-01-25
---

## Contexte

Cabinet de conseil RH basé en Martinique, 12 collaborateurs, clientèle PME locales et quelques clients hexagonaux. Deux canaux d'acquisition principaux : recommandations (60%) et site web (40%).

Le site web générais entre 8 et 15 formulaires de contact par semaine. Ces formulaires étaient reçus par email sur l'adresse de la directrice commerciale, qui les transférait à la bonne commerciale et les saisissait dans HubSpot (leur CRM) pour le suivi.

## Le problème

Trois points de friction identifiés lors d'un premier échange :

### 1. Perte de leads

Sur un mois, 4 leads avaient disparu dans les limbes : l'email avait été lu sur mobile, marqué comme "à traiter" mentalement, et jamais saisi dans HubSpot. Ces 4 contacts n'avaient jamais été rappelés.

### 2. Délai de premier contact

La saisie dans HubSpot se faisait par batch — souvent une fois par jour, parfois deux fois par semaine. Résultat : un prospect remplissant un formulaire le vendredi soir pouvait ne recevoir un appel que le mercredi suivant. Dans le conseil RH, un concurrent qui rappelle en 2h gagne souvent la mission.

### 3. Qualité des données CRM

La saisie manuelle introduisait des variations : "PME" vs "pme" vs "Petite entreprise", noms mal orthographiés, champs manquants. Le reporting HubSpot était peu fiable, et les segmentations des campagnes email imprécises.

> "On savait qu'on perdait des affaires à cause de ça, mais on avait pas le temps de s'en occuper."

## La solution

### Analyse et choix d'architecture (1 jour)

Vérification des capacités d'intégration :
- Le formulaire de contact utilisait **Formspree** → API et webhooks disponibles ✅
- HubSpot → API Contacts bien documentée, création de contact + ajout de propriétés personnalisées ✅

Architecture retenue : une **Vercel Function** (serverless) comme intermédiaire, déclenchée par le webhook Formspree à chaque soumission de formulaire.

Avantage du serverless : pas de serveur à maintenir, facturation à l'usage (quasi nulle pour ce volume), déploiement en 30 secondes.

### Développement (3 jours)

Le flux :

1. Visiteur soumet le formulaire sur le site
2. Formspree reçoit la soumission, déclenche le webhook vers la Vercel Function
3. La Function valide les données reçues (vérification de signature Formspree + validation Zod)
4. Création ou mise à jour du contact dans HubSpot via l'API :
   - Champ email comme identifiant unique (évite les doublons)
   - Propriétés mappées : nom, prénom, entreprise, téléphone, secteur d'activité, message
   - Tag automatique "Source: Site web" pour segmentation
5. Assignation automatique au bon commercial selon le secteur indiqué dans le formulaire
6. Email de notification interne avec récapitulatif du lead et lien direct vers la fiche HubSpot

Gestion d'erreur : si l'API HubSpot est indisponible, la Function renvoie une erreur 500 à Formspree qui réessaie automatiquement jusqu'à 5 fois.

### Validation et déploiement (1 jour)

Tests avec de vrais formulaires en pré-production. Vérification que les doublons sont bien gérés (un contact existant qui soumet à nouveau est mis à jour, pas dupliqué). Formation de 30 minutes pour la directrice commerciale sur le nouveau flux.

## Les résultats

**Immédiatement :**
- Zéro saisie manuelle depuis le déploiement
- Délai entre soumission du formulaire et création dans HubSpot : **< 5 secondes**
- Assignation automatique : les commerciales reçoivent la notification directement, sans passer par la directrice

**Au bout de 2 mois :**
- Délai moyen de premier contact commercial : **3,8 jours → 1,8 jour** (-52%)
- Taux de transformation lead → RDV : **28% → 34%** (la rapidité de contact a un impact direct)
- 0 lead perdu depuis le déploiement
- Qualité des données HubSpot : standardisation automatique, reporting fiable

**Gain de temps** : 3 heures par semaine récupérées pour la directrice commerciale.

## Ce qu'on a appris

L'intégration entre un site web et un CRM est l'un des chantiers les plus rapides à mettre en œuvre et les plus impactants sur le business. Le coût de développement est généralement amorti en moins d'un mois par le gain de productivité et les leads supplémentaires traités correctement.

Le vrai enseignement : **chaque étape manuelle entre un lead et votre CRM est une opportunité de le perdre**. Moins il y a d'étapes humaines, plus le taux de capture est élevé.

Pour les PME qui utilisent un CRM (HubSpot, Salesforce, Pipedrive, Zoho...), ce type d'intégration est systématiquement en haut de la liste de ce que je recommande. Le délai de retour sur investissement est parmi les plus courts que je connaisse.
