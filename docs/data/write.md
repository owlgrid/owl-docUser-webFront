---
sidebar_position: 3
---

# Write Data

## API

For now, data write is only possible through OwlGrid REST API.

### Create, update or delete data

#### Construct request

Request details:
- URL: `https://api.owlgrid.com/data`
- Verb: `POST`
- Headers:
  - Authorization: Bearer token (see [Authorization](/docs/references/api#authorization)).
  - Tenant: identifier of the organization.
- Body: array of operations (TODO JSON schema).

#### Operations

4 types of operations are available when writing data:
- `declare`: data given will be created or updated whereas it exists already or not. If some fields are not present in the query, they are considered as null and will be nullified in the database. This operation consists as 'rewriting' the object if it changed. If the data contains only the data identifier (and any other property), the object will be archived (same operation as archive). We recommand to use `declare` operation when possible;
- `append`: data given will be created or partially updated whereas it exists already or not. Only the fields present in the request will be updated in the database. Unlike `declare`, if fields are not present in data, they will be ignored (and not set to null);
- `archive`: the current version of the object will be outdated (as the object does not exists). The history will be still available. This operation should be avoided because it have an impact on the database. Instead, you better use status directly in data. Only the object id have to be given in data (other property will be ignored).
- `delete`: WARNING, this operation shouldn't be used. It is a maintenance operation that must not be used in production. This operation deletes an object regarding its id and its history (can be used for maintenance purpose only). Only the object id have to be given in data (other property will be ignored).

#### Example

```json
[
    {
        "schema": "clients",
        "operation": "declare",
        "data": {
            "id": "c6b0d6e8-f47c-4cbd-9a82-0aab50471bb5",
            "name": "Creastel Inc.",
            "sector": 356
        }
    },
    {
        "schema": "clients",
        "operation": "append",
        "data": {
            "id": "c6b0d6e8-f47c-4cbd-9a82-0aab50471bb5",
            "sector": 358
        }
    },
    {
        "schema": "employees",
        "operation": "archive",
        "data": {
            "id": "1b61d5e2-3f27-4c1c-a29b-cacd29d85739",
        }
    }
]
```

Notes:
- If an object A contains a reference on an object B that doesn't exists in the database for now (ex: it does not have been created because of scheduling), the object B is created temporarily so the reference can exists. When the object B will be added to the database through the API, its value will be correctly updated.
