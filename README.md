# DevOps AWS Assignment

## Project Status
Work in progress – AWS DevOps technical assignment.

## Objective
Deploy and document a production-like web application on AWS Free Tier with security, CI/CD, monitoring and load testing.

## Planned Architecture
User → EC2 Security Group → Nginx → Node.js Application  
GitHub → GitHub Actions → EC2 deployment  
EC2 metrics/logs → Amazon CloudWatch  
Static assets/backups → Amazon S3

## Scope
- Amazon EC2 Ubuntu instance
- Nginx reverse proxy
- Node.js sample web application
- GitHub Actions CI/CD pipeline
- IAM least-privilege access
- Security Groups and firewall rules
- Amazon S3 backup/static assets
- CloudWatch monitoring, logs and alarms
- k6 load testing

## Current Deliverables
- Repository setup completed
- Documentation/report template prepared
- Application and AWS deployment implementation in progress

## Security Notes
- Root AWS credentials will not be used for deployment.
- SSH access will be restricted to the administrator IP.
- Secrets will be stored in GitHub Actions Secrets.
- S3 public access will remain blocked.

## Author
Sumit Yadav
