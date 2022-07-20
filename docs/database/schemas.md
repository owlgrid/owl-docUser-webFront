---
sidebar_position: 3
---

# Schemas

## Under the hood

On génère plusieurs modèles du schéma. Un modèle avec les droits (optimisé pour le serveur de gestion des droits), un modèle pour la traduction des clés (optimisé pour le serveur de résolution de requête).








# Todo

Schemas constitue the *model* of your database. They allow you to describe the organisation of your data in order to constrain their insertion and facilitate their exploration.

## Constraint

### Fully-constrained schemas

When you add data to a database, you can add it in a disorganised way, or according to specific rules. Take for example an Excel workbook where you want to list all the employees in your company. You can either add a line per employee by filling in the data in random columns, which risks inserting erroneous data (wrong format, additional or forgotten data), or in specific columns (column A containing the employees' identifiers, column B their first name, etc.), which will allow you to control the quality of the data: format, presence or not, duplicates, etc. And to facilitate their exploitation (sorting on a column, etc.).

#### A powerful approach

While constraining data with a schema is very powerful for ensuring quality data, in practice it can be very restrictive. Here are some cases that could be problematic:

- Inserting an object that is not complete (a property marked as mandatory is not present)
- Inserting an object that has a relationship with an object that does not yet exist (for example, I want to add a CustomerMission object that has a relationship to a Customer object that has not yet been added to the database, due to the chain of data additions).

In both of these cases, a constraining system simply rejects this data. This is the case with relational DBMSs, for example. 

#### A powerful approach... only in theory

In practice, these constraining systems are very complex to use in writing, especially on a large scale. Indeed, it is necessary to ensure that the data inserted is complete, it is necessary to chain the requests to ensure that the data is inserted in the right order, which is extremely complex on synchronous systems, it is also necessary to set up a system to monitor errors and to take care of the data inserted, etc.

### Semi-constrained schemas

For these reasons, OwlGrid offers a **hybrid** system.

We are convinced of the power of constraining systems, but we prefer a very *pragmatic* approach.
Indeed, we leave it up to the OwlGrid database administrators to decide on the rules of insertions: the data may therefore have to be strictly conform to the schema, may not completely satisfy the schema (raising a warning or not), may contain references to other non-existent objects (which will be created at first and completed later), or may be added without respecting any schema. Later on, database administrators will be able to consolidate their data by applying different types of operations: conforming a property (applying rules to change its format), integrating a property (attaching an out-of-schema property to a schema property), deleting out-of-schema properties, deleting out-of-schema objects.

This approach is possible thanks to the document and collection-oriented data storage structure. Where a relational database does not have the ability to update itself by adding, deleting columns, adapting property formats on the fly, we store each property in specific documents. Schema rules do not exist in the database, they are only used at data insertion, to control and associate data with the schema, and at consumption time, to guide data exploration.