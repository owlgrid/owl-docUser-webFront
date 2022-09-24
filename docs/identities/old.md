---
sidebar_position: 1
---

# Introduction

Les identités permettent de définir des utilisateurs et des groupes d'utilisateurs. Ces utilisateurs peuvent être des personnes physiques ou bien de machines (comptes de service). Les comptes de service permettent d'automatiser des actions (par exemple exécuter un workflow depuis un système).

Les identités possèdent trois paramètres :
- Un identifiant unique (`id`) qui sert à identifier l'identité (notamment dans la base de données) ;
- Des droits (`rights`) qui sont des permissions qui sont utilisées pour déterminer quelles actions sont autorisées ou non. Ces droits peuvent être associés à l'identité directement ou à un groupe d'identités (`groups`) ;
- Un ou plusieurs paramètres d'authentification. Ce paramètre permet de valider si l'utilisateur est bien propriétaire de son identité.

## Droits

Les identités possèdent des droits qui sont utilisés pour déterminer quelles actions sont autorisées ou non. Les droits sont utilisés pour déterminer les permissions des administrateurs OwlGrid, mais peuvent être également utilisés dans le cadre d'applications. Pour plus d'informations, voir la section [droits](/docs/administrate/rights).

Les droits peuvent être associés directement à une identité ou à un groupe d'identités.

## Authentification

:::caution

Todo méthodes proposées + authentification double facteurs + authentification déléguée (SSO).

:::