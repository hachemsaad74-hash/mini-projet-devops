🚀 Mini DevOps Project – Node.js API with CI/CD & Monitoring
📌 Overview

This project demonstrates a complete DevOps workflow by building, containerizing, deploying, and monitoring a simple Node.js API.

It covers modern practices used in real-world production environments:

Containerization
Continuous Integration / Continuous Deployment (CI/CD)
Monitoring & Observability
🧱 Tech Stack
Backend: Node.js
Containerization: Docker
CI/CD: GitHub Actions
Monitoring: Prometheus & Grafana
⚙️ Features

✅ REST API built with Node.js
✅ Dockerized application
✅ Automated CI/CD pipeline with GitHub Actions
✅ Real-time monitoring with Prometheus
✅ Visualization dashboards using Grafana

📁 Project Structure
mini-projet-devops/
│── app/
│── Dockerfile
│── docker-compose.yml
│── .github/workflows/
│── prometheus/
│── grafana/
│── README.md

🐳 Run with Docker
🔹 Build the image
docker build -t mini-devops-app .

🔹 Run the container
docker run -p 3000:3000 mini-devops-app


👉 Access the API:

http://localhost:3000

📊 Monitoring Setup

Start all services (App + Monitoring):

docker compose up -d

🔗 Services Access
Service	URL
Application	http://localhost:3000

Prometheus	http://localhost:9090

Grafana	http://localhost:3001
🔄 CI/CD Pipeline

This project uses GitHub Actions to automate:

Build Docker image
Run tests
Push image (optional)
Deploy (optional)

Workflow file:

.github/workflows/main.yml

📈 Monitoring Details
Prometheus collects metrics from the Node.js app
Grafana visualizes metrics via dashboards

Example metrics:

HTTP requests count
Response time
CPU & memory usage
🧠 DevOps Concepts Covered
Containerization with Docker
Infrastructure as Code (Docker Compose)
CI/CD automation
Observability & monitoring
Service orchestration
🎯 Use Cases
Learning DevOps basics
Portfolio project for junior developers
Fiverr / Freelance demo project
CI/CD practice