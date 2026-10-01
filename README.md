# Portfolio

## Lancement avec Docker

Prérequis : Docker avec Docker Compose.
Copier `.env.example` vers `.env`, puis renseigner `HOST` (adresse d'écoute)
et `PORT` (port publié). Par défaut : `0.0.0.0:5173`.

```sh
./start.sh                # Développement avec rechargement automatique
./start.sh --production   # Build puis lancement Nginx en arrière-plan
```

Les deux modes utilisent le même service et se remplacent lors du lancement.
Pour arrêter le conteneur :

```sh
docker compose down
# Ou, après un lancement en production :
docker compose -f compose.production.yaml down
```


# Déroulé: 
- Présentation Brieve 
- Mon parcours (étude stage et travail)
- Mes skills (stack, langage et outils)
- Mes projets
- Mes contacts
