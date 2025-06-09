const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>THARUN Yadav MARRI  (AWS Certified Cloud Practitioner)</h1>
    <p>Ph: +91 6303920490 | E-Mail: marritharun863@gmail.com<br/>
    LinkedIn: <a href="https://www.linkedin.com/in/tharun-marri-93b5a5254" target="_blank">tharun-marri-93b5a5254</a></p>

    <h2>CAREER OBJECTIVE:</h2>
    <p>DevOps-focused engineer with a passion for automation, cloud infrastructure, and system reliability. Seeking to contribute to high-impact teams by improving deployment processes, observability, and operational efficiency in cloud-native environments.</p>

    <h2>EDUCATION:</h2>
    <ul>
      <li><b>KAKATIYA GOVT DEGREE COLLEGE</b><br/>BACHELOR’S DEGREE – BSC (Mathematics, Statistics, Computer Science) 2019 – 2023 — 67%</li>
      <li><b>SRM JUNIOR COLLEGE</b><br/>INTERMEDIATE - MPC (Mathematics, Physics, Chemistry) 2017 - 2019 — 76%</li>
      <li><b>Z P SECONDARY HIGH SCHOOL NANDIGAMA</b><br/>SSC 2016 - 2017 — 82%</li>
    </ul>

    <h2>PROFESSIONAL EXPERIENCE</h2>
    <h3>AWS Cloud Support Engineer, Loyalty Methods (Aug 2024 – Present)</h3>
    <p><b>Project:</b> Cloud-Native SaaS Platform for Customer Loyalty Management</p>
    <h4>CI/CD & Deployment Automation</h4>
    <ul>
      <li>Automated microservices deployment on AWS ECS using ECR-hosted Docker containers.</li>
      <li>Implemented blue/green and rolling deployment strategies for zero-downtime rollouts and safe rollbacks.</li>
      <li>Integrated Git-based CI/CD pipelines for continuous delivery and rapid iteration cycles.</li>
    </ul>
    <h4>Infrastructure Management & Scalability</h4>
    <ul>
      <li>Maintained scalable infrastructure using Auto Scaling Groups and ECS service autoscaling based on resource metrics.</li>
      <li>Applied Infrastructure as Code (IaC) practices using AWS CloudFormation and custom scripts for consistent environment provisioning.</li>
    </ul>
    <h4>Monitoring, Observability & Alerting</h4>
    <ul>
      <li>Built CloudWatch dashboards and alarms for real-time monitoring of latency, error rates, and service-level metrics.</li>
      <li>Integrated Elasticsearch and Kibana for centralized logging, reducing MTTR through improved diagnostics.</li>
      <li>Developed monitoring for Kafka brokers, consumer lag, and message throughput to ensure data pipeline reliability.</li>
    </ul>
    <h4>Incident Management & SRE Practices</h4>
    <ul>
      <li>Managed real-time incidents under ITSM framework with SLA adherence using ticketing tools and Slack alerting.</li>
      <li>Conducted root cause analysis (RCA) and implemented permanent fixes to reduce incident recurrence.</li>
      <li>Participated in on-call rotations and improved operational runbooks and incident response protocols.</li>
    </ul>
    <h4>Collaboration & Continuous Improvement</h4>
    <ul>
      <li>Collaborated with developers, QA, and infrastructure teams to enhance system reliability, availability, and security.</li>
      <li>Authored technical documentation, incident reviews, and contributed to SRE initiatives around automation and resilience.</li>
      <li>Delivered performance and capacity reports to support forecasting and optimization.</li>
    </ul>
    <p><b>Key Tools & Technologies:</b><br/>
      AWS ECS, EC2, ECR, CloudWatch, Auto Scaling, CloudFormation, Elasticsearch, Kibana, Kafka, Slack Alerts, ITSM, CI/CD (Git), Docker, Bash, Python (scripting)
    </p>
    <hr/>
    <h2>Selected Achievements</h2>
    <ul>
      <li>Reduced average deployment time by 40% through CI/CD pipeline optimization.</li>
      <li>Cut incident resolution time by 35% by enhancing observability and proactive alerting.</li>
      <li>Achieved 99.99% uptime for key customer-facing APIs during peak seasonal traffic.</li>
    </ul>

    <h2>TECHNICAL SKILLS</h2>
    <p><b>Cloud Computing:</b><br/>
      AWS (ECS, EC2, ECR, S3, RDS, DynamoDB, IAM, VPC, Route 53, SNS, CloudWatch, CloudFormation, Auto Scaling, Load Balancer)
    </p>
    <p><b>CI/CD & Automation:</b><br/>
      Jenkins, Git, GitHub, Ansible, Terraform, SonarQube, YAML, Maven, Blue/Green and Rolling Deployments, Slack Integration
    </p>
    <p><b>Containerization & Orchestration:</b><br/>
      Docker, Kubernetes, ECS Task Definitions, ECR Image Versioning
    </p>
    <p><b>Monitoring & Observability:</b><br/>
      AWS CloudWatch, Elasticsearch, Kibana, Kafka Monitoring, Prometheus, Grafana
    </p>
    <p><b>Infrastructure as Code (IaC):</b><br/>
      AWS CloudFormation, Terraform, Custom Bash & Python Scripts
    </p>
    <p><b>Programming & Scripting:</b><br/>
      Python (Infrastructure Scripts, Boto3), Bash, Shell Scripting
    </p>

    <h2>PROJECTS:</h2>
    <h3>1. Jenkins CI/CD Pipeline for Java Web App</h3>
    <ul>
      <li>Built an automated CI/CD pipeline using Jenkins for a Java-based web application.</li>
      <li>Integrated GitHub, SonarQube, Apache Web Server, and Ansible for streamlined build and deployment.</li>
      <li>Resulted in faster and more reliable software releases.</li>
    </ul>
    <h3>2. HR Management System – AWS-Based Two-Tier Architecture</h3>
    <ul>
      <li>Deployed scalable, secure cloud infrastructure on AWS with VPC, subnets, EC2, security groups, and Route 53.</li>
      <li>Used S3, DynamoDB, and RDS for storage and database services; implemented Bastion Host and Load Balancer.</li>
      <li>Automated setup and ensured high availability and monitoring via AWS and Boto3.</li>
    </ul>

    <h2>CERTIFICATIONS:</h2>
    <ul>
      <li>AWS Cloud Practitioner – Certified<br/>
      <a href="https://www.credly.com/badges/2dcbd9a6-66e2-4a05-9bc0-45bf0dbb007f/public_url" target="_blank">View Badge</a></li>
      <li>AWS Cloud Quest Practitioner - Certificate<br/>
      <a href="https://www.credly.com/badges/6aae8623-ce7b-4c01-ad2d-276e1f7358f4/public_url" target="_blank">View Badge</a></li>
      <li>Graduated AWS re/Start program<br/>
      <a href="https://www.credly.com/badges/e6caa078-36ef-4a99-94b2-389b72a67e2a/public_url" target="_blank">View Badge</a></li>
      <li>DATA Analysis Using Python – Certified<br/>
      <a href="https://www.credly.com/badges/81e68ef6-495f-425a-a6a4-36b8443efd29/public_url" target="_blank">View Badge</a></li>
    </ul>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Portfolio app running on port ${port}`));
