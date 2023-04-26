---
sidebar_position: 1
---

# Resources et services

## Plateforme

OwlGrid est une **plateforme** composée d'un ensemble de ressources. 

## Ressource

Une **ressource** est un composant *user-facing* (destinée à être manipulée par nos utilisateurs) qui permet d'implémenter des actions spécifiques dans le cadre de l'application : stocker des données, héberger un site internet, etc.

La liste des ressources est disponible sur [cette page](https://www.notion.so/creastel/Components-9ec5646b1cf74a13839b7a8c83dd3e9a?pvs=4).

### Activation des ressources

Une ressource doit être activée dans un environnement spécifique pour pouvoir être utilisée. L'activation des ressources permet d'initialiser les différents éléments techniques (ex : création des collections et indexes de recherche dans les bases de données).

Une ressource est activée pour un workspace et un environnement spécifique.

Pour le moment, toutes les ressources sont activées par défaut à la création d'un nouvel environnement. Toutefois, il sera possible demain d'activer les ressources au fur et à mesure pour économiser des services.

## Service

Un **service** est un composant *technique* qui implémente la logique des ressources. À l'inverse des ressources, les services existent dans une couche technique et ne sont donc pas visibles de la part des utilisateurs. Une ressource est l'aggrégation d'un ou plusieurs services.

Ex : le service `owl-access` est responsable de la gestion des accès de la plateforme OwlGrid. La plupart des ressources reposent sur ce service pour gérer les droits d'accès.

Un service est associé à :
- Une **technologie** : une technologie est la combinaison d'un language et d'un environnement d'exécution, voire d'architecture. Ex : `owl-access` est un serveur Node qui suit une architecture microservice. Aujourd'hui, on définit plusieurs technologies telles que Node + TS, AWS Lambda + TS, StepFunction + Lambda + TS.
- Un **type d'interface** : une interface est un moyen d'échanger avec un service. Il est possible d'associer plusieurs interfaces à un même service, voire des interfaces différentes selon les opérations d'un service. Ex : `owl-access` expose une API HTTP ainsi qu'un SDK Typescript. Le service `owl-database` expose une API HTTP et un serveur socket pour certaines opérations, telles que `listenToData()`.

La liste des services est disponible sur [cette page](https://www.notion.so/creastel/Components-9ec5646b1cf74a13839b7a8c83dd3e9a?pvs=4).

Les dépôts de code source des services sont disponibles sur le [Github d'OwlGrid](https://github.com/owlgrid) et sont préfixés de `owl-<serviceName>`.

## Opération

Une **opération** est une action proposée par une ressource ou un service. Par exemple, la ressource `owl-database` propose l'opération `readData()`.

Les opérations peuvent être :
- **User-facing** : si elles sont exposées à travers des ressources (ex : opération `readData()` dans la ressource `owl-database`)
- **Techniques** : si elles sont exposées à travers des services (ex : opération `listPerimeters()` dans le service `owl-perimeters`).