---
sidebar_position: 1
---

# Resources et services

## Plateforme

OwlGrid est une **plateforme** composée d'un ensemble de ressources. 

## Ressource

Une **ressource** est un composant *user-facing* (destinée à être manipulée par nos utilisateurs) qui permet d'implémenter des actions spécifiques dans le cadre de l'application : stocker des données, héberger un site internet, etc.

La liste des ressources est disponible sur [cette page](https://www.notion.so/creastel/Components-9ec5646b1cf74a13839b7a8c83dd3e9a?pvs=4).

## Service

Un **service** est un composant *technique* qui implémente la logique des ressources. Les services ne sont pas visibles de la part des utilisateurs. Une ressource est l'aggrégation d'un ou plusieurs services.

Ex : le service `owl-access` est responsable de la gestion des accès de la plateforme OwlGrid. La plupart des ressources reposent sur ce service pour gérer les droits d'accès.

Un service est associé à une technologie (ex : `owl-access` est un serveur Express qui suit une architecture microservice).

La liste des services est disponible sur [cette page](https://www.notion.so/creastel/Components-9ec5646b1cf74a13839b7a8c83dd3e9a?pvs=4).

Les dépôts de code source des services sont disponibles sur le [Github d'OwlGrid](https://github.com/owlgrid) et sont préfixés de `owl-<serviceName>`.

## Opération

Une **opération** est une action proposée par une ressource ou un service. Par exemple, la ressource `owl-database` propose l'opération `readData()`.

Les opérations peuvent être :
- **User-facing** : si elles sont exposées à travers des ressources (ex : opération `readData()` dans la ressource `owl-database`)
- **Techniques** : si elles sont exposées à travers des services (ex : opération `listPerimeters()` dans le service `owl-perimeters`).