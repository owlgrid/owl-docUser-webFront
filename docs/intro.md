---
sidebar_position: 1
---

# Welcome to OwlGrid

OwlGrid is a powerful high level database. This database includes concepts that does not exists in traditional relationals database, such as:
- **Historization**: data is historized by design. When data is written in the database, OwlGrid Core will check if the data was already existing, if it was not the case, the data will be stored, elsewhere, the previous version will be archived. This allows to request data at a specific time, the database can be shown as it was there are 2 years for example. Doing delta on two datasets is very powerful, it allows for example to consider the data evolution;
- **Permissiveness**: 

## Data integration

### Common challenges of data integration

OwlGrid has been made for **data integration**. Integration consists in synchronizing data between several applications into the information system. For example, in a company IS, when a new employee join the company, its account is created in several applications. This operation is today more or less difficult to automatize. However, data synchronization takes place very regularly in the IS. Depending on the data exchanged, the stakes can be very high, affecting the company's security, its steering, its productivity, etc.

OwlGrid brings a new approach to data in the information system. The applications in the IS (ERP, CRM, etc.) manipulates data (create, update, etc.) and consumes it (read, visualize, valorize, etc.). Applications can be considered as *engines* whose role is to process data.

However, these data engines have certain limitations for very common IS use cases:
- They does not speak the same langage: indeed, each application has an own data model which brings a difficulty when dumping data. It is necessary to map data between applications, that may be difficult when there are many synchronization flows.
- Analyzing data coming from several applications is difficult: indeed, each application has a differnt way of storing and exposing data, they are disparate data format. Agreggation may be sometime very tricky which makes reporting very complex;
- Data synchronization flows may be very tricky to schedule: while some flows can be synchronous (trigger from an application when data update), some can't be (asynchronous batch treatment). Sometimes, this can lead to conflictual situations: an object A that have a relation with an object B try to be deversed in an application that does not know the object B. The request is refused while object B has not been deversed in the application.
- Scalability: tools that provides data integration are most of the time very low level. They need strong IT knowledge to be used. Often, solutions are handmade, which is very complex to put in place and to maintain in time.

When doing integration jobs, IT services need to reinvent the wheel every time. This is why OwlGrid brings a new layer in data integration, that compose with this issues by design.

### What OwlGrid brings

OwlGrid is a central database, placed at the heart of the information system. This database includes the features explained in the [first part](#use-cases). The central database is the place where the master data is stored and historized. The applications of the IS only create and make data evolve. Applications feed the central database and are fed in return.

> OwlGrid brings a central database that offers both data integration and analysis capabilities.

By subscribing to specific changes in the central database, it is possible to automatize data dumping into other systems.

The only challenge for IT Teams is to feed the central database as quickly as possible. That's all.

## Data exploration and analysis

OwlGrid uses a powerful request langage to query the central database. This allow to explore data and also to create query that prepare datasets for reporting.

## What OwlGrid does not brings

AI and blockchain. OwlGrid does not do bullshit, only rigourous processes designed by its users. It does not invent data flows with AI or take any decision at your place.