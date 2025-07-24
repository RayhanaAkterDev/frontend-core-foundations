# GitHub Actions (CI/CD Automation)

> Tags: github, actions, ci-cd, automation, workflow, devops  
> **Purpose:** Learn how to automate software workflows with GitHub Actions for continuous integration and continuous deployment (CI/CD).

---

## 1️⃣ What are GitHub Actions?

- GitHub Actions allow you to automate tasks in your software development lifecycle.  
- You define workflows triggered by events like pushes, pull requests, or schedules.  
- Workflows consist of jobs and steps running on virtual machines or containers.

---

## 2️⃣ Key Concepts

- **Workflow:** YAML file stored in `.github/workflows/` that defines automation.  
- **Job:** A set of steps that run on the same runner (machine).  
- **Step:** An individual task, like running a script or action.  
- **Runner:** A machine that executes jobs (GitHub-hosted or self-hosted).  
- **Actions:** Reusable commands or scripts you include in workflows.

---

## 3️⃣ Basic Workflow Example

A simple workflow triggered on every push to `main` branch:

```yaml
name: CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'
    - run: npm install
    - run: npm test
```

---

## 4️⃣ Common Use Cases

- Run automated tests on push or pull requests.  
- Build and deploy applications to cloud services.  
- Automate code linting and formatting.  
- Manage releases and versioning.  
- Schedule routine tasks like backups or notifications.

---

## 5️⃣ Benefits of GitHub Actions

- Integrated directly into GitHub without third-party services.  
- Extensive marketplace with reusable actions.  
- Highly customizable and scalable workflows.  
- Supports multiple OS runners: Linux, Windows, macOS.

---

## 🧾 Summary

GitHub Actions empower developers to automate and streamline their development pipelines with customizable workflows.  
They enhance code quality, deployment speed, and team productivity.

---

## 📚 Resources for Further Learning

- [GitHub Actions Documentation](https://docs.github.com/en/actions)  
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)  

---

## ⏭️ Next Topic

Next, learn [Best Practices for Git Commits](22-commit-best-practices.md)  
to write clear and meaningful commit messages.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
