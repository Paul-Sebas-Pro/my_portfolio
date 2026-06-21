---
title: "Correction bug critique — Paiements en échec silencieux sur site e-commerce"
description: "Des paiements échouaient silencieusement depuis 2 semaines sur un site de vente en ligne. Aucune alerte, aucune erreur visible. Diagnostic en 4 heures, correction en 1 jour."
clientType: "E-commerce (TPE)"
sector: "Commerce en ligne"
duration: "1 journée (intervention urgence)"
results:
  - "Bug identifié et corrigé en moins de 24h"
  - "Paiements restaurés à 100% dès le soir"
  - "Chiffre d'affaires perdu estimé : récupéré sur panier abandonné"
  - "Monitoring mis en place : zéro incident silencieux depuis"
stack: ["Node.js", "Stripe Webhooks", "PostgreSQL", "Sentry", "Express"]
pubDate: 2026-02-20
---

## Contexte

Site de vente en ligne d'artisanat antillais, ouvert depuis 18 mois. Environ 30 à 50 commandes par semaine en moyenne, pic en période touristique. Stack : Node.js + Express en backend, Stripe pour les paiements, PostgreSQL pour la base de données.

Le propriétaire constate une baisse inhabituelle des ventes sur son dashboard Stripe : les paiements initiés sont en chute libre depuis 2 semaines. Des clients commencent à le contacter pour lui signaler que leur commande "ne passe pas", mais sans message d'erreur clair côté client.

## Le problème

**Côté utilisateur** : le client arrivait sur la page de paiement Stripe, entrait ses informations bancaires, cliquait sur "Payer" — et était redirigé vers la page d'accueil. Sans message d'erreur, sans confirmation, sans email de confirmation.

**Côté serveur** : aucune erreur dans les logs applicatifs. Le serveur répondait normalement. Stripe recevait les paiements (ils apparaissaient dans le dashboard Stripe comme "succeeded"), mais les commandes n'étaient pas créées en base de données.

> "Mon site semblait marcher normalement. Mais les clients ne recevaient rien et moi non plus."

## Le diagnostic

### Heure 1 — Reproduction du bug

Première étape : reproduire le bug en environnement de test avec une carte Stripe de test. Résultat confirmé : paiement accepté par Stripe, pas de commande créée, redirection silencieuse vers l'accueil.

### Heure 2 — Analyse des webhooks Stripe

L'architecture était basée sur des **webhooks Stripe** : après un paiement réussi, Stripe envoie un événement `payment_intent.succeeded` au serveur, qui crée alors la commande.

Vérification dans le dashboard Stripe → onglet Webhooks : les événements étaient bien envoyés. Mais le statut de livraison affichait **"Failed"** sur tous les événements des 2 dernières semaines.

En regardant de plus près le détail d'un événement : erreur HTTP 400 "Bad Request" retournée par le serveur.

### Heure 3 — Identification de la cause racine

Le handler de webhook côté serveur effectuait une **vérification de signature** (pratique recommandée par Stripe pour s'assurer que la requête vient bien de Stripe). Cette vérification utilisait le raw body de la requête.

Deux semaines plus tôt, une mise à jour du middleware Express avait été déployée. Le nouveau middleware JSON parsait automatiquement le body — ce qui modifiait la représentation en mémoire du body avant que le handler de webhook puisse le lire. Résultat : la signature ne correspondait plus, Stripe recevait une erreur 400, et l'événement était marqué comme "Failed".

**Sans alerte configurée sur les échecs webhook, personne ne l'avait vu.**

### Heure 4 — Correction et tests

Fix en 3 lignes : appliquer le middleware `express.raw()` avant le parsing JSON **uniquement** sur la route webhook Stripe, pour préserver le raw body.

```javascript
// Avant (cassé)
app.use(express.json());
app.post('/webhook/stripe', stripeWebhookHandler);

// Après (corrigé)
app.post('/webhook/stripe', express.raw({ type: 'application/json' }), stripeWebhookHandler);
app.use(express.json());
```

Tests avec les outils de rejeu de Stripe (possibilité de rejouer des webhooks échoués) : commandes créées correctement, emails envoyés.

## Ce qui a été mis en place après la correction

**Alertes Stripe** : configuration d'alertes email sur les webhooks en échec.

**Monitoring applicatif** : intégration de **Sentry** pour capturer les erreurs non gérées côté serveur — ce type de bug aurait généré des logs dans Sentry dès le premier jour.

**Tests de régression** : ajout d'un test automatisé qui vérifie que le handler webhook accepte correctement une requête signée par Stripe avant tout déploiement.

**Procédure de déploiement** : checklist incluant un test manuel de paiement end-to-end après chaque mise à jour.

## Les résultats

Le soir même, les paiements fonctionnaient à nouveau. Stripe permettant de rejouer les événements webhook échoués des 72 dernières heures, une partie des commandes perdues a pu être récupérée (les clients ont reçu leur confirmation avec retard, avec un email d'excuse).

Depuis la mise en place du monitoring Sentry et des alertes Stripe, aucun incident de ce type n'est passé inaperçu.

## Ce qu'on a appris

Deux leçons à retenir :

1. **Un paiement accepté par Stripe ≠ une commande créée** : dans une architecture basée sur des webhooks, il faut monitorer les deux côtés — pas seulement le dashboard Stripe.

2. **Le silence n'est pas une bonne nouvelle** : un bug qui ne génère pas d'erreur visible est souvent le plus dangereux. Mettre en place du monitoring proactif avant d'avoir un problème coûte 10 fois moins cher que de le découvrir 2 semaines après.

Ce type d'intervention est exactement pour ça que je propose un **retainer maintenance** — pour que ce genre de situation soit détectée en quelques minutes, pas en quelques semaines.
