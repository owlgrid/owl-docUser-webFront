---
sidebar_position: 4
---

# Read Data

TODO

## Under the hood

Process:
- Réception d'une requête de lecture HTTP au niveau de l'API Gateway (api.owlgrid.com/database/v1 + body GraphQL)
- Transmission de la requête au microservice de lecture d'API
- Chargement du modèle de données associé depuis la base de données de modèles (comment choisir le modèle / version ?)
- Contrôle des droits d'accès (via interrogation du microservice associé)
- Transformation des noms d'objets en clés du modèle (via matching / remplacement) -> comment gérer les requêtes dans plusieurs langues ?
- Résolution de la requête

