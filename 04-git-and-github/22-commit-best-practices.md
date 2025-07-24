# Best Practices for Git Commits

> Tags: git, commits, best-practices, version-control, workflow  
> **Purpose:** Learn how to write clear, meaningful, and consistent commit messages and maintain an efficient commit history.

---

## 1️⃣ Why Follow Commit Best Practices?

- Well-written commits make it easier to understand project history.  
- They improve collaboration by clearly communicating changes.  
- Facilitate easier debugging, reverting, and code reviews.

---

## 2️⃣ Writing Good Commit Messages

- Use the **imperative mood** in the subject line (e.g., "Add feature", not "Added feature").  
- Keep the subject line **under 50 characters**.  
- Separate subject from body with a blank line.  
- Use the body to explain **what** and **why**, not how. Wrap lines at 72 characters.  
- Reference related issues or pull requests if applicable.  
- Example:

  ```plaintext
  Fix login error on invalid credentials

  Return proper error message when user enters incorrect
  username or password. This improves user feedback and
  debugging.

  Fixes #123
  ```

---

## 3️⃣ Structuring Commits

- Make commits **small and focused** — each commit should represent a single logical change.  
- Avoid mixing unrelated changes in one commit.  
- Commit frequently to save incremental progress.

---

## 4️⃣ Commit Message Conventions

- Use prefixes or tags for commit types, e.g., `feat:`, `fix:`, `docs:`  
- Follow your team's or project's commit message guidelines if any.

---

## 5️⃣ Tools to Improve Commit Quality

- Use `git commit --amend` to fix the last commit message or add forgotten changes.  
- Use interactive rebasing (`git rebase -i`) to clean up commit history before sharing.  
- Use commit linting tools in CI pipelines to enforce commit message style.

---

## 🧾 Summary

Adhering to commit best practices leads to a clean, readable, and maintainable project history that benefits all contributors.  
Clear commit messages improve project collaboration and future maintenance.

---

## 📚 Resources for Further Learning

- [Chris Beams’ 7 Rules of a Great Git Commit Message](https://chris.beams.io/posts/git-commit/)  
- [Conventional Commits Specification](https://www.conventionalcommits.org/)  

---

## ⏭️ Next Topic

Next, learn [Git Submodules (Advanced)](23-git-submodules.md)  
to manage dependencies on other repositories.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
