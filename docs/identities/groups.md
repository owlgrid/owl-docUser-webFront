---
sidebar_position: 3
---

# Groups

Les utilisateurs d'OwlGrid peuvent être rassemblés dans des groupes. Ces groupes sont pratiques pour attribuer des droits à plusieurs utilisateurs en même temps. Les groupes peuvent être imbriqués, ce qui permet de créer des groupes de groupes.

## Caractéristiques des groupes

Chaque groupe possède plusieurs données par défaut :
- Identifiant unique attribué par OwlGrid (`id`) ;
- Groupe parent (`parent`) ;
- Nom du groupe (`name`).

## Hiérarchie de groupes

Les groupes peuvent être imbriqués. Cela permet de créer des groupes de groupes. Par exemple, on peut créer un groupe `Administrateurs` qui contient les groupes `Administrateurs système` et `Administrateurs applicatifs`.

Tous les membres du groupe `Administrateurs` sont membres des groupes `Administrateurs système` et `Administrateurs applicatifs`. De la même manière, tous les membres du groupe `Administrateurs système` sont membres du groupe `Administrateurs`. En revanche, les membres du groupe `Administrateurs applicatifs` ne sont pas membres du groupe `Administrateurs système`.

## Créer un groupe

