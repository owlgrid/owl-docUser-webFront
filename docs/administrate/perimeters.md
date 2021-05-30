---
sidebar_position: 5
---

# Perimeters

The quantity of parameters, schemas, rights, applications that can belong to a database can be very large.
It is necessary to group all these resources, in order to be able to recognize and manipulate them more easily.
To do this, OwlGrid offers the very simple mechanism of perimeters. Think of a perimeter as a named group of entities, which can eventually inherit from another group of entities.

Even with perimeters, a tenant can be very large, so we recommend that you use inherited perimeters to partition your tenant.

Note that any entity can belong to several perimeters, but perimeters can only contain entities of the same nature.
You can define a type of perimeter, for example the perimeter of a group of entities.

Examples of scopes:
- User scope: "Clients Administrators" which contains different users and has the rights: data.schemas.client.read
- Schema scope: "Clients" which contains other schema scopes 
- Schema perimeter: "Clients Projects" which contains the x and y schemas