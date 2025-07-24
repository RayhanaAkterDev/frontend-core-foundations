# Pull Requests & Collaboration Workflow

> Tags: github, pull-requests, collaboration, code-review, workflow  
> **Purpose:** Understand how to collaborate effectively on GitHub using pull requests, enabling code review and controlled merging.

---

## 1️⃣ What is a Pull Request (PR)?

- A **pull request** is a request to merge changes from one branch (often in a fork or feature branch) into another branch (usually the main repository’s main or develop branch).  
- It enables **code review**, discussion, and quality control before changes are integrated.  

---

## 2️⃣ Typical Pull Request Workflow

1. **Fork and clone** the original repository (if you don’t have write access).  
2. **Create a feature branch** locally for your changes:  

   ```bash
   git checkout -b feature-branch
   ```  

3. **Make changes** and commit them locally.  
4. **Push the feature branch** to your fork or remote:  

   ```bash
   git push origin feature-branch
   ```  

5. On GitHub, **open a pull request** from your feature branch to the base branch.  
6. Collaborators **review the code**, discuss changes, and request updates if necessary.  
7. Once approved, the PR is **merged** into the base branch.  
8. **Delete the feature branch** after merge to keep the repo clean.

---

## 3️⃣ Key Collaboration Concepts

- **Code Review:** Team members examine changes for quality, style, and correctness.  
- **Continuous Integration (CI):** Automated tests run on PRs to ensure stability.  
- **Merge Strategies:** PRs can be merged via merge commits, squash merges, or rebases, depending on project preferences.  
- **Conflict Resolution:** PRs must be updated if conflicts arise before merging.

---

## 4️⃣ Creating a Pull Request on GitHub

- Navigate to your repository on GitHub.  
- Click the **Pull Requests** tab.  
- Click **New Pull Request**.  
- Select your branch and compare it against the base branch.  
- Add a descriptive title and detailed description for reviewers.  
- Submit the PR.

---

## 5️⃣ Best Practices for Pull Requests

- Keep PRs **small and focused** to simplify reviews.  
- Write **clear commit messages** and PR descriptions.  
- Address **review comments** promptly and respectfully.  
- Test your changes thoroughly before submitting.

---

## 🧾 Summary

Pull requests facilitate team collaboration by providing a structured way to review and integrate code changes.  
They help maintain code quality, encourage communication, and streamline project management.

---

## 📚 Resources for Further Learning

- [GitHub Pull Requests Guide](https://docs.github.com/en/pull-requests)  
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)  
- [Effective Code Reviews](https://smartbear.com/learn/code-review/what-is-code-review/)  

---

## ⏭️ Next Topic

Next, learn about [Working with Forks](18-forks.md)  
to contribute to projects you don’t own directly.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
