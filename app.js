const express = require('express');
const app = express();

// Home route: Basic greeting
app.get('/', (req, res) => res.send('Hello I am Tharun '));

// Route for contact info and career objective
app.get('/about', (req, res) => {
  res.send(`
    <h2>THARUN MARRI (AWS Certified Cloud Practitioner)</h2>
    <p>Ph: +91 6303920490 | E-Mail: marritharun863@gmail.com</p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/tharun-marri-93b5a5254" target="_blank">tharun-marri-93b5a5254</a></p>
    <h3>CAREER OBJECTIVE:</h3>
    <p>DevOps-focused engineer with a passion for automation, cloud infrastructure, and system reliability. Seeking to contribute to high-impact teams by improving deployment processes, observability, and operational efficiency in cloud-native environments.</p>
  `);
});

// Route for education
app.get('/education', (req, res) => {
  res.send(`
    <h3>EDUCATION:</h3>
    <ul>
      <li><b>KAKATIYA GOVT DEGREE COLLEGE</b><br/>BSc (Mathematics, Statistics, Computer Science) 2019 – 2023 — 67%</li>
      <li><b>SRM JUNIOR COLLEGE</b><br/>Intermediate - MPC (Mathematics, Physics, Chemistry) 2017 - 2019 — 76%</li>
      <li><b>Z P SECONDARY HIGH SCHOOL NANDIGAMA</b><br/>SSC - 2016 - 2017 — 82%</li>
    </ul>
  `);
});

// Route for professional experience summary
app.get('/experience', (req, res) => {
  res.send(`
    <h3>PROFESSIONAL EXPERIENCE</h3>
    <h4>AWS Cloud Support Engineer, Loyalty Methods (Aug 2024 – Present)</h4>
    <p><b>Project:</b> Cloud-Native SaaS Platform for Customer Loyalty Management</p>
    <h5>CI/CD & Deployment Automation</h5>
    <ul>
      <li>Automated microservices deployment on AWS ECS using ECR-hosted Docker containers.</li>
      <li>Implemented blue/green and rolling deployment strategies for zero-downtime rollouts and safe rollbacks.</li>
      <li>Integrated Git-based CI/CD pipelines for continuous delivery.</li>
    </ul>
    <h5>Infrastructure Management & Scalability</h5>
    <ul>
      <li>Maintained scalable infrastructure using Auto Scaling Groups and ECS autoscaling.</li>
      <li>Applied Infrastructure as Code (IaC) using AWS CloudFormation and scripts.</li>
    </ul>
    <h5>Monitoring, Observability & Alerting</h5>
    <ul>
      <li>Built CloudWatch dashboards and alarms for real-time monitoring.</li>
      <li>Integrated Elasticsearch and Kibana for centralized logging.</li>
      <li>Developed Kafka monitoring for reliability.</li>
    </ul>
    <!-- You can add more sections similarly -->
  `);
});

// Route for skills
app.get('/skills', (req, res) => {
  res.send(`
    <h3>TECHNICAL SKILLS</h3>
    <p><b>Cloud Computing:</b> AWS (ECS, EC2, ECR, S3, RDS, DynamoDB, IAM, VPC, Route 53, SNS, CloudWatch, CloudFormation, Auto Scaling, Load Balancer)</p>
    <p><b>CI/CD & Automation:</b> Jenkins, Git, GitHub, Ansible, Terraform, SonarQube, YAML, Maven, Blue/Green and Rolling Deployments, Slack Integration</p>
    <p><b>Containerization & Orchestration:</b> Docker, Kubernetes, ECS Task Definitions, ECR Image Versioning</p>
    <p><b>Monitoring & Observability:</b> AWS CloudWatch, Elasticsearch, Kibana, Kafka Monitoring, Prometheus, Grafana</p>
    <p><b>Infrastructure as Code:</b> CloudFormation, Terraform, Bash & Python Scripts</p>
    <p><b>Programming & Scripting:</b> Python, Bash, Shell Scripting</p>
  `);
});

// Route for projects
app.get('/projects', (req, res) => {
  res.send(`
    <h3>PROJECTS</h3>
    <h4>1. Jenkins CI/CD Pipeline for Java Web App</h4>
    <ul>
      <li>Built automated CI/CD pipeline using Jenkins.</li>
      <li>Integrated GitHub, SonarQube, Apache Web Server, and Ansible.</li>
      <li>Resulted in faster, reliable releases.</li>
    </ul>
    <h4>2. HR Management System – AWS-Based Two-Tier Architecture</h4>
    <ul>
      <li>Deployed scalable, secure cloud infra with VPC, EC2, Route 53.</li>
      <li>Used S3, DynamoDB, RDS; implemented Bastion Host and Load Balancer.</li>
      <li>Automated setup and monitoring using AWS and Boto3.</li>
    </ul>
  `);
});

// Route for certifications
app.get('/certifications', (req, res) => {
  res.send(`
    <h3>CERTIFICATIONS</h3>
    <ul>
      <li><b>AWS Cloud Practitioner – Certified</b><br/>
      <a href="https://www.credly.com/badges/2dcbd9a6-66e2-4a05-9bc0-45bf0dbb007f/public_url" target="_blank">View Badge</a></li>
      <li><b>AWS Cloud Quest Practitioner - Certificate</b><br/>
      <a href="https://www.credly.com/badges/6aae8623-ce7b-4c01-ad2d-276e1f7358f4/public_url" target="_blank">View Badge</a></li>
      <li><b>Graduated AWS re/Start Program</b><br/>
      <a href="https://www.credly.com/badges/e6caa078-36ef-4a99-94b2-389b72a67e2a/public_url" target="_blank">View Badge</a></li>
      <li><b>Data Analysis Using Python – Certified</b><br/>
      <a href="https://www.credly.com/badges/81e68ef6-495f-425a-a6a4-36b8443efd29/public_url" target="_blank">View Badge</a></li>
    </ul>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Portfolio app running on port ${port}`));

