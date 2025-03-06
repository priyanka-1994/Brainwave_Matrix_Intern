Cloud Computing Internship Project Documentation

1. Overview
This project demonstrates a cloud deployment pipeline for a Django-based To-Do application. The pipeline automates the process from code commit to production deployment using Amazon ECR, Amazon EKS, and GitHub Actions. It highlights cloud computing practices including containerization, orchestration, and continuous integration/continuous deployment (CI/CD).

2. Prerequisites

•	Amazon ECR Repository Name: my-app

•	Amazon EKS Cluster Name: my-cluster

•	Repository URL: https://github.com/priyanka-1994/Brainwave_Matrix_Intern.git

•	Branch: Use the develop branch.

3. CI/CD Pipeline with GitHub Actions

  1.	Checkout Code
   
  2.	The workflow checks out the latest code from the repository.
   
  3.	Configure AWS Credentials
   
  4.	Login to ECR

  5.	Build, Tag, and Push Docker Image:

  6.	Update or Create Kubernetes Deployment:
 
4. Conclusion
   This project successfully automates the entire deployment pipeline:

	   1. Containerization: The Django application is containerized using Docker.

     2.	Image Management: The Docker image is pushed to a private ECR repository.

     3. Orchestration: The application is deployed on an EKS cluster using Kubernetes.

    4. Automation: GitHub Actions provides a CI/CD pipeline that integrates all these steps for updates.
