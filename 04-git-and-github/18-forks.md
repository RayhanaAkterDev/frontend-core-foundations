# Working with Forks

> Tags: github, forks, collaboration, open-source, pull-requests  
> **Purpose:** Understand how to use forks to contribute to repositories you don’t have write access to, enabling open-source collaboration.

---

## 1️⃣ What is a Fork?

- A **fork** is a personal copy of someone else’s repository on GitHub.  
- It allows you to freely experiment and make changes without affecting the original project.  
- Forks are essential for contributing to open-source projects or collaborating when you don’t have write permissions.

---

## 2️⃣ Fork Workflow

1. **Fork** the original repository on GitHub by clicking the **Fork** button on the repo page.  
2. **Clone** your forked repository to your local machine:  

   ```bash
   git clone https://github.com/your-username/forked-repo.git
   ```  

3. **Add the original repository as an upstream remote** to keep your fork updated:  

   ```bash
   git remote add upstream https://github.com/original-owner/original-repo.git
   ```  

4. **Fetch and merge upstream changes** regularly to stay synced:  

   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```  

5. **Create a feature branch** for your changes:  

   ```bash
   git checkout -b feature-branch
   ```  

6. **Make your changes**, commit, and push the feature branch to your fork:  

   ```bash
   git push origin feature-branch
   ```  

7. **Open a pull request** from your fork’s feature branch to the original repository’s main branch.

---

## 3️⃣ Keeping Your Fork Updated

- Regularly sync your fork with the original repository to avoid conflicts:  

  ```bash
  git fetch upstream
  git checkout main
  git merge upstream/main
  git push origin main
  ```

---

## 4️⃣ Benefits of Using Forks

- Enables safe experimentation without impacting the main project.  
- Facilitates collaboration with projects you don’t own.  
- Provides a workflow for contributing to open source.

---

## 🧾 Summary

Forks empower you to contribute to projects safely and efficiently by maintaining your own copy.  
Synchronizing your fork regularly ensures smooth integration of your contributions.

---

## 📚 Resources for Further Learning

- [GitHub Fork Documentation](https://docs.github.com/en/get-started/quickstart/fork-a-repo)  
- [GitHub Syncing a Fork Guide](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)  

---

## ⏭️ Next Topic

Next, learn [SSH Key Setup for GitHub](19-ssh-key-setup.md)  
to secure your authentication with GitHub.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
