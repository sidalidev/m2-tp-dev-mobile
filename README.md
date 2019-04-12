# 📱 Tp Dev Mobile

C'est ici que sera listée la doc

## 🚀 Lancer le project

Il faut au avoir Node.js d'installé, go [ici](https://nodejs.org/en/) pour l'installer

```bash
# Installation des dependences
yarn i

# Demarage du serveur de developement
yarn start

# Demarage avec un simulateur android, il faut avoir Android Studio tout ça tout ça
react-native run-android

```

## 🌲 Conventions de branching Git

### 🚨 ON NE PUSH JAMAIS DIRECTEMENT DANS LA `MASTER` HEIN! ❤️

Pour que ça ne devienne pas trés vite le bouzin sur les branche l'idée est d'eclater nos branches par:

- **feat**: une nouvelle fonctionnalité
- **fix**: une correction de bug
- **docs**: un changement uniquement dans la documentation
- **style**: un changement qui n’affecte pas le sens du code (espace, reformattage, alignements dans le code…)
- **refactor**: un changement qui n’est ni une correction de bug ni une évolution
- **perf**: un changement qui améliore la performance
- **test**: un ajout de tests manquants
- **chore**: un changement sur le process de build ou des outils complémentaires

Pour vous donner un exemple:

Jean-Babibel doit bosser sur la fonctionnalité de produits où il doit afficher une liste de produits, Jean-Babibel est soucieux de l'organisation de notre cher repo git, du coup il crée une branche a partir de notre branche de reference qui est la `master` --> `products`.

Une fois qu'il aura terminé son développement, il fera une pull/merge request vers la branche `master` affin de fusionner ce qu'il a codé avec l'existant.

## 📝 Conventions de de messages de Commit

L'idée sera vraiment juste d'etre succint et explicite: on reprends la liste des possibilités d'en haut, exemple:
`feat(products): j'ai affichés des produits de malade`
`type_de_travaux(domaine): ce que Jean-Onche a fait`
