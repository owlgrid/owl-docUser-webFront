---
sidebar_position: 3
---

# Write Data

## API

For now, data write is only possible through OwlGrid REST API.

### Create, update or delete data

Request details:
- URL: `https://api.owlgrid.com/data`
- Verb: `POST`
- Headers:
  - Authorization: Bearer token (see [Authorization](/docs/references/api#authorization)).
  - Tenant: identifier of the organization.
- Body:

```json
[
    {
        "schema": "clients",
        "operation": "write",
        "data": {
            "id": "c6b0d6e8-f47c-4cbd-9a82-0aab50471bb5",
            "name": "Creastel Inc.",
            "sector": 356
        }
    },
    {
        "schema": "employees",
        "operation": "delete",
        "data": {
            "id": "1b61d5e2-3f27-4c1c-a29b-cacd29d85739",
        }
    }
]
```

Notes:
- Delete operations data must contains only the business-identifier of the object (primary identifier).
- If an object A contains a reference on an object B that doesn't exists in the database for now (ex: it does not have been created because of scheduling), the object B is created temporarily so the reference can exists. When the object B will be added to the database through the API, its value will be correctly updated.
