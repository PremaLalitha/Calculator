## Project Overview

This project demonstrates an end-to-end DevOps CI/CD pipeline using GitHub, Jenkins, and Docker. The goal of this project is to automate the build and deployment process of an application using modern DevOps tools.

## Tools Used
• GitHub – Source code storage and version control.
• Jenkins – Automation of build and deployment using pipeline stages.
• Docker – Containerization and application deployment.

## Pipeline Flow
• Developer pushes source code to GitHub.
• Jenkins pulls the latest code from GitHub repository.
• Jenkins builds Docker image using Dockerfile.
• Jenkins stops old container if running.
• Jenkins runs new Docker container.
• Application gets deployed and runs in browser/server.

## Pipeline Stages
Start
-Clone Repository
-Build Docker Image
-Stop Old Container
-Run New Container
-End

## Flow
GitHub → Jenkins Pipeline → Docker → Deployment
