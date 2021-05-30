---
sidebar_position: 4
---

# Rights

OwlGrid rights management is the same for all types of accounts, whether they are user accounts or service accounts (applications).

The granularity of rights is as fine as possible to allow the most precise control.
We encourage OwlGrid users to restrict rights to the minimum possible.
Given the amount of rights that can be assigned, it is sometimes appropriate to create rights groups into which to add users. For this, see the "Perimeters" section.

Examples (perimeter.[resourceName.resourceId].action) :
- applications.perimeters.create
- applications.perimeters.[nom].create
- applications.perimeters.all.create
- schemas.perimeters.create
- schemas.perimeters.all.create
- database.create
- database.all.edit
- database.all.delete
- clients.perimeters.all.users.create
- clients.perimeters.all.applications.create
- data.schemas.all.create
- data.schemas.all.consolidate
- data.schemas.[schemaId].properties.all.read
- data.schemas.all.metadata.all.read
- data.schemas.all.metadata.title.write