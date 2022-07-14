---
sidebar_position: 1
---

# Introduction

OwlDB is a powerful high level database. This database includes concepts that does not exists in traditional relationals database, such as:
- **Historization**: data is historized by design. When data is written in the database, OwlDB Core will check if the data was already existing, if it was not the case, the data will be stored, elsewhere, the previous version will be archived. This allows to request data at a specific time, the database can be shown as it was there are 2 years for example. Doing delta on two datasets is very powerful, it allows for example to consider the data evolution;
- **Permissiveness**: 

## Data integration

### Common challenges of data integration

OwlDB has been made for **data integration**. Integration consists in synchronizing data between several applications into the information system. For example, in a company IS, when a new employee join the company, its account is created in several applications. This operation is today more or less difficult to automatize. However, data synchronization takes place very regularly in the IS. Depending on the data exchanged, the stakes can be very high, affecting the company's security, its steering, its productivity, etc.

OwlDB brings a new approach to data in the information system. The applications in the IS (ERP, CRM, etc.) manipulates data (create, update, etc.) and consumes it (read, visualize, valorize, etc.). Applications can be considered as *engines* whose role is to process data.

However, these data engines have certain limitations for very common IS use cases:
- They does not speak the same langage: indeed, each application has an own data model which brings a difficulty when dumping data. It is necessary to map data between applications, that may be difficult when there are many synchronization flows.
- Analyzing data coming from several applications is difficult: indeed, each application has a differnt way of storing and exposing data, they are disparate data format. Agreggation may be sometime very tricky which makes reporting very complex;
- Data synchronization flows may be very tricky to schedule: while some flows can be synchronous (trigger from an application when data update), some can't be (asynchronous batch treatment). Sometimes, this can lead to conflictual situations: an object A that have a relation with an object B try to be deversed in an application that does not know the object B. The request is refused while object B has not been deversed in the application.
- Scalability: tools that provides data integration are most of the time very low level. They need strong IT knowledge to be used. Often, solutions are handmade, which is very complex to put in place and to maintain in time.

When doing integration jobs, IT services need to reinvent the wheel every time. This is why OwlDB brings a new layer in data integration, that compose with this issues by design.

### What OwlDB brings

OwlDB is a central database, placed at the heart of the information system. This database includes the features explained in the [first part](#use-cases). The central database is the place where the master data is stored and historized. The applications of the IS only create and make data evolve. Applications feed the central database and are fed in return.

> OwlDB brings a central database that offers both data integration and analysis capabilities.

By subscribing to specific changes in the central database, it is possible to automatize data dumping into other systems.

The only challenge for IT Teams is to feed the central database as quickly as possible. That's all.

## Data exploration and analysis

OwlDB uses a powerful request langage to query the central database. This allow to explore data and also to create query that prepare datasets for reporting.

## What OwlDB does not brings

AI and blockchain. OwlDB does not do bullshit, only rigourous processes designed by its users. It does not invent data flows with AI or take any decision at your place.

# Introduction

It is possible to write and read data as an OwlGrid user, or through a client application.
To declare a client application, simply go to the "applications" section of the administration portal, then click on "create a client".

Note: for the moment, only data manipulation through a client application is possible.

A client must have a name and rights.

# Under the hood

How does OwlGrid database work?

La plupart des bases de données traditionelles enregistrent directement les données dans des structures directement liées au schéma. Par exemple, lorsqu'on créé un objet JSON dans une base de données orientée document, cet objet JSON est directement enregistré sur le support. Cela peut poser quelques problèmes lorsqu'on souhaite manipuler le schéma de données. Par exemple, comment mettre à jour le nom d'une propriété dans tous les objets ? De la même manière, on doit faire un choix entre optimiser la taille des données (par exemple avec des noms de propriétés courts) et conserver un niveau sémantique intéressant (nom de propriétés explicites).

OwlGrid apporte une couche d'abstraction via un meta-modèle.

Les avantages d'OwlGrid :
- Meta-model : la gestion du modèle de données est effectuée dans une entité spécifique. À chaque propriété est assignée un identifiant unique et court qui constitue la clé de la donnée. On peut ainsi attacher des métadonnées à chaque propriété (par exemple des traductions, ou des informations de gouvernance) ;
- Modifications du schéma : 2 types de modifications du schéma : structurelles et secondaires. Les modifications structurelles mettent à jour tous les objets de la base de données. Les modifications secondaires ne mettent à jour que le modèle (ex : changement de nom d'une propriété, modification des droits, etc.) ;
- Types de données : les types de données sont généralement limités par les caractéristiques de la base de données (exemple : dans une base de données MySQL, on ne peut pas stocker des chiffres décimaux). OwlGrid permet d'enregistrer tous les types de données grâce à un stockage binaire des types non-primitifs (à creuser). OwlGrid permet également d'enregistrer des fichiers de données, comme des images, des fichiers, etc. Plus besoin d'utiliser des espaces de stockage ! ;
- GraphQL : l'interrogation de la base de données se fait via GraphQL. Les requêtes sont générées automatiquement à partir du schéma de données. Elles peuvent être optimisées pour les performances (cf. Performances). La vocation de OwlGrid n'est pas de fournir des connexions à plusieurs technologies (librairies Node, etc.) mais de privilégier l'approche `workflow` (todo : mettre plus d'informations) -> on est sûrs de ça ? ça peut être bien pour les backends mais pas trop relou et contraignants ? (en plus pas ouf pour le partage de données entre bases de données, cf. référencement des données externes) ;
- Écriture de données : OwlGrid permet de définir des règles pour écrire les données. On peut donner par exemple la possibilité de référencer un objet encore inexistant (la liaison entre les deux objets sera créée automatiquement lors de l'insertion du second objet). On peut également restreindre l'écriture de données au respect de schémas spécifiques (exemple : impossible de créer un objet qui ne possède pas un type donné) ou bien insérer tout de même la donnée en ajoutant un marqueur @to_complete sur les propriétés pas encore remplies. Les données marquées soulèvent une notification (cf. partie Notifications) et sont mises en évidence comme non-conformes dans la base de données ;
  - 4 opérations possibles :
    - `declare`: data given will be created or updated whereas it exists already or not. If some fields are not present in the query, they are considered as null and will be nullified in the database. This operation consists as 'rewriting' the object if it changed. If the data contains only the data identifier (and any other property), the object will be archived (same operation as archive). We recommand to use `declare` operation when possible;
    - `append`: data given will be created or partially updated whereas it exists already or not. Only the fields present in the request will be updated in the database. Unlike `declare`, if fields are not present in data, they will be ignored (and not set to null);
    - `archive`: the current version of the object will be outdated (as the object does not exists). The history will be still available. This operation should be avoided because it have an impact on the database. Instead, you better use status directly in data. Only the object id have to be given in data (other property will be ignored).
    - `delete`: WARNING, this operation shouldn't be used. It is a maintenance operation that must not be used in production. This operation deletes an object regarding its id and its history (can be used for maintenance purpose only). Only the object id have to be given in data (other property will be ignored).
- Fini les identifiants : les relations entre les objets sont toujours complexes à gérer. OwlGrid permet désormais de référencer des objets et non pas des identifiants sur des objets. Cela permet de gérer des relations complexes, comme des relations entre objets de différents schémas, sans avoir à s'enfermer dans une logique d'identifiants (souvents ambigüs : identifiants métiers, techniques, pas systématiquement à jour, etc.).
- Doubles numériques : les doubles
- Documentation : la documentation des API est automatiquement générée (OpenAPI). -> comment gérer les droits ? est-ce que vraiment nécessaire étant donné qu'on expose rarement directement la bdd dans une API ? (ce serait plus pertinent de générer la documentation des workflows).
- Sémantique : les 
- Évènements : le moteur d'évènements permet de déclencher des actions lors d'une modification d'un objet. On peut simplement définir des règles d'écoute sur des objets pour déclencher des actions associées.
- Interface graphique : les bases de données sont souvent peu pratiques à visualiser. La plupart du temps, rendre lisible une base de données à un métier ou un partenaire qui n'a pas de compétences techniques nécessite des développements supplémentaires pour mettre en place des interfaces graphiques. OwlGrid propose une interface graphique extrêmement simple qui permet d'explorer et manipuler tant les données que les schémas par les développeurs et aussi le métier.
- Versions : en pratique, un modèle de données évolue au quotidien. Or, il est extrêmement complexe de mettre à jour des éléments du data model sans
- Mock data : OwlGrid permet de créer des jeux de données de base qui peuvent être importés dans la base de données, ce qui permet notamment de tester les versions entre environnements ;
- Historisation : historiser des données (réécrites dans le temps) nécessite de mettre en place des processus et des modèles de données complexes. Pourquoi réinventer la roue à chaque fois ? Avec OwlGrid, il est possible en un clic de créer un data warehouse en activant l'option "historisation des données" sur une propriété ou un schéma.
- Notifications : lorsqu'une partie du data model évolue, tous les clients qui y ont accès peuvent être notifiés. Cela permet d'éviter les régressions en mettant en place un processus de test et de mise à niveau des applications qui utilisent ce modèle.
- Scalabilité : OwlGrid utilise une structure de stockage permettant de stocker un volume de données très conséquent.
- Performances : les performances sont cruciales pour lire et écrire dans une base de données. OwlGrid permet de gérer les performances en utilisant des caches. Les caches sont en fait la première étape de l'architecture avec laquelle on échange lors d'une requête d'écriture ou de lecture. Il existe plusieurs niveaux de performances : simple (pas de cache), optimisé (cache qui peut être distribué), avancé (cache qui anticipe les requêtes).
- Moteur de recherche : explorer les données est un processus complexe. OwlGrid permet de sélectionner des schémas et propriétés qui seront indexées dans un moteur de recherche et accessible ultra-rapidement. Ce moteur de recherche peut référencer des données de type scalaire, des objets et même des fichiers (analyse OCR dans des fichiers image, etc.). Pas de configuration requise, il suffit de cliquer sur "moteur de recherche" dans la configuration de la propriété.
- Permissions : les permissions permettent de définir les stratégies d'accès à tous les utilisateurs et groupes d'utilisateurs. Todo -> comment fusionner avec les policies des workflows ?
- Templates : les templates permettent de créer des schémas à partir d'un schéma existant. Il est possible de créer des schémas à partir d'un schéma existant, en utilisant des templates. Ex : template d'application mobile.
- Référencement de données externes : *a priori* pas possible, sauf si on utilise les doubles numériques -> question de l'accès -> est-ce que pas impossible à cause de gestion des droits + philosophie des workflows ? Ça pourrait être pratique pour donner accès à des données.
- Transactions : les transactions permettent d'effectuer plusieurs opérations d'écriture simultanées. Todo -> comment faire ? (cf. ACID)


# Processes

## Utilisateurs

- Créer un compte utilisateur
- Mettre à jour les données d'un compte utilisateur

## Tenants

- Créer un tenant / projet ?
- Supprimer un tenant / projet

## Schema 

- Créer un schéma :
- Créer une propriété d'un schéma :
- Mettre à jour une propriété d'un schéma :
- Supprimer un schéma :
- Créer une nouvelle version d'un schéma :
- Analyser les modifications structurelles en cas de mise à jour d'un schéma :


## Data

- Déclarer un objet inexistant :
  - Avec une référence à un objet inexistant :
  - Avec une donnée de type fichier :
- Déclarer un objet existant :
  - Avec historisation :
- Archiver un objet existant :
- Supprimer un objet existant :
- Lister des objets existants :
  - Paginer parmi les objets existants :
- Lire un objet existant :
  - Avec un ou plusieurs niveaux d'imbrication :
  - Lire des données historisées
- Lister l'historique d'un objet :

## Droits

- Créer un nouveau client :
- Créer un nouveau droit :
- Mettre à jour un droit :
- Assigner un droit à un client :
- Désassigner un droit à un client :
- Supprimer un droit :

## Versions

- Créer une version (fork de la branche principale) :
- Ajouter les données principales dans la version :
  - Avec limite à x objets / schéma :
- Créer un jeu de données mock :
- Adapter le jeu de données mock au schéma de la version :
- 




# Data model

Modèle de données de l'archi :
- Utilisateur
- Tenants
  - Clients (peut être de type physique ou application)
  - Groupes de clients
  - Schemas
  - Données
  - Droits
  - Taxonomies