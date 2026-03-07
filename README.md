# Mini Projet DevOps

Projet DevOps simple utilisant Node.js, Docker et GitHub Actions.

## Description

Ce projet est une API Node.js simple conteneurisée avec Docker et automatisée avec CI/CD grâce à GitHub Actions.

L'objectif est de démontrer les bonnes pratiques DevOps :

gestion du code avec GitHub

conteneurisation avec Docker

automatisation du pipeline avec GitHub Actions
## Technologies

- Node.js
- Docker
- GitHub Actions
- Prometheus
- Grafana

## Lancer l'application

docker build -t mini-projet-devops .
docker run -p 3000:3000 mini-projet-devops

Accès :
http://localhost:3000

## Monitoring

docker compose up -d

Application :
http://localhost:3000

Prometheus :
http://localhost:9090

Grafana :
http://localhost:3001
