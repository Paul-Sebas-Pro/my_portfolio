---
title: "Automatisation facturation — Cabinet de services en Guadeloupe"
description: "8 heures par semaine passées à ressaisir des données entre le logiciel de devis et le logiciel comptable. Intégration API en 2 semaines : zéro ressaisie, zéro erreur."
clientType: "PME services (8 salariés)"
sector: "Services B2B"
duration: "2 semaines"
results:
  - "8h/semaine de saisie manuelle éliminées"
  - "Taux d'erreur de facturation : 100% → 0%"
  - "Délai d'émission facture : 3 jours → 2 heures"
  - "ROI atteint dès le premier mois"
stack: ["Node.js", "Express", "API REST", "Webhook", "PostgreSQL", "Cron"]
pubDate: 2026-03-10
---

## Contexte

Cabinet de conseil en gestion basé en Guadeloupe, 8 salariés, environ 40 clients actifs. Deux outils métier coexistaient sans se parler :

- **Logiciel de devis/commandes** : utilisé par les chargés de mission pour créer des propositions commerciales et suivre les interventions
- **Logiciel comptable** : utilisé par la responsable administrative pour émettre les factures et suivre les paiements

Le workflow habituel : quand une intervention était validée dans le logiciel de devis, la responsable administrative recevait un email, ouvrait les deux logiciels en parallèle, et ressaisissait manuellement toutes les informations dans le logiciel comptable pour créer la facture.

## Le problème

Ce workflow fonctionnait... jusqu'à un certain volume. Avec la croissance du cabinet, les problèmes se sont multipliés :

- **Délais** : entre la validation d'une intervention et l'émission de la facture, il s'écoulait souvent 2 à 3 jours (la ressaisie n'était pas toujours faite le jour même)
- **Erreurs** : montants mal recopiés, noms de clients mal orthographiés, numéros de TVA incorrects — avec des conséquences parfois sérieuses sur les relances et la comptabilité
- **Charge** : 8 heures hebdomadaires dédiées à cette seule tâche pour la responsable administrative — du temps qui aurait pu être consacré à des tâches à plus forte valeur
- **Stress** : en fin de mois, le volume doublait. La responsable administrative faisait des heures supplémentaires pour rattraper le retard

> "Je savais que c'était pas normal de passer autant de temps à recopier des informations qui étaient déjà saisies quelque part."

## La solution

### Analyse du problème (2 jours)

Avant de coder quoi que ce soit : audit des deux logiciels pour vérifier qu'ils disposaient tous les deux d'une API. C'est le premier point à vérifier — sans API disponible, l'intégration est soit impossible soit nécessite des contournements fragiles (scraping, copier-coller automatisé...).

Résultat de l'audit :
- Logiciel de devis : API REST documentée + webhooks disponibles ✅
- Logiciel comptable : API REST avec authentification OAuth ✅

Condition réunie : l'intégration native est possible.

### Architecture de l'intégration

Un petit service intermédiaire (Node.js + Express) déployé sur un VPS :

1. **Réception webhook** : quand une intervention passe au statut "validée" dans le logiciel de devis, un webhook déclenche automatiquement le service
2. **Transformation** : le service récupère les données complètes de l'intervention (client, prestations, montants, TVA applicable)
3. **Création automatique** : il crée la facture correspondante dans le logiciel comptable via son API, avec tous les champs correctement remplis
4. **Confirmation** : un email de notification est envoyé à la responsable administrative avec le lien vers la facture créée

En cas d'échec (API indisponible, timeout) : le service relance automatiquement 3 fois à 15 minutes d'intervalle, puis envoie une alerte email.

### Validation et déploiement (3 jours)

Tests sur un environnement de recette avec de vraies données (anonymisées) avant mise en production. Formation de 30 minutes pour la responsable administrative sur le nouveau workflow et sur ce qu'il faut faire en cas d'anomalie.

## Les résultats

**Immédiatement après le déploiement :**
- Zéro ressaisie manuelle
- Délai d'émission facture : 3 jours → 2 heures (le temps de l'envoi webhook + traitement)
- Taux d'erreur sur les factures : tombé à zéro dès le premier mois

**Au bout de 3 mois :**
- 8 heures hebdomadaires libérées (soit environ 35 heures par mois)
- La responsable administrative a pu reprendre en main le suivi des relances, qui avait été négligé faute de temps
- Amélioration du délai moyen de paiement : -6 jours (les factures partent plus vite, elles sont payées plus vite)

**ROI** : au tarif horaire interne de la responsable administrative, l'automatisation s'est rentabilisée en moins de 3 semaines.

## Ce qu'on a appris

Les gains de productivité les plus rapides se trouvent souvent dans les tâches répétitives "entre deux outils". Avant d'investir dans un nouveau logiciel, vérifiez si vos outils existants peuvent communiquer — c'est souvent possible et beaucoup moins coûteux.

La facturation électronique, obligatoire à la réception depuis le 1er septembre 2026, accélère l'adoption des API comptables. C'est le bon moment pour automatiser ces flux et sécuriser sa conformité.
