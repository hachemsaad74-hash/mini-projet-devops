# Mini Projet DevOps

Projet DevOps simple utilisant Node.js, Docker et GitHub Actions.

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

Prometheus :
http://localhost:9090

Grafana :
http://localhost:3000
