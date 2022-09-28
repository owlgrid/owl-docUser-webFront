---
sidebar_position: 1
---

# Introduction

Toutes les interactions avec les ressources d'OwlGrid sont effectuées par des [utilisateurs](/docs/identities/users) (physiques ou machines) qui ont un certain niveau de droit. La ressource "Identities" a pour rôle d'administrer les identités, les authentifier et les administrer les droits dans l'écosystème OwlGrid.

Les [identités](/docs/identities/users) permettent de définir les [utilisateurs](/docs/identities/users) et les [groupes d'utilisateurs](/docs/identities/groups). Ces utilisateurs peuvent être des personnes physiques ou bien des machines. Les identitées peuvent être regroupées dans des [groupes](/docs/identities/groups). Ces groupes sont organisés hiérarchiquement.

Les [droits](/docs/identities/rights) sont des [actions](/docs/identities/actions) sur des [périmètres](/docs/identities/perimeters). Les périmètres sont des instances de ressources ou des groupes d'instances de ressources. Les droits sont assignés aux identités et aux groupes d'identités.

## Bonnes pratiques

Pour maximiser la sécurité de la plateforme, il est indispensable d'appliquer le principe du **moindre privilège**. Ce principe consiste à donner à un utilisateur uniquement les droits nécessaires pour accomplir sa tâche. En n'assignant uniquement les droits les plus bas dans la hiérarchie, on évite que l'utilisateur puisse faire volontairement ou non des actions qu'il ne devrait pas pouvoir faire.