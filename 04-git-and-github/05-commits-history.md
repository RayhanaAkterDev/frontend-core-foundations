# Understanding Commits & History

> Tags: git, commit, history, version-control, log  
> **Purpose:** Explain how commits represent changes in Git and how to inspect project history using log and diff tools for effective version tracking.

---

## 1️⃣ What is a Commit?

- A **commit** is a snapshot of your project at a given point in time.
- Each commit includes:
  - Tracked file changes
  - Author name and email
  - Commit message (description of changes)
  - Unique commit **hash (SHA-1)**

```bash
git commit -m "Add homepage layout and header styles"
```

Commits create a timeline of your work and allow version rollback, comparison, and collaboration.

---

## 2️⃣ Viewing Commit History

Use the following command to inspect the commit history:

```bash
git log
```

This shows:

- Commit hashes  
- Author details  
- Dates  
- Commit messages  

### 🔁 Custom Log Views

Use flags for cleaner logs:

```bash
git log --oneline --graph --all
```

This provides a compact, visual history of all branches.

---

## 3️⃣ Inspecting Changes with `diff`

To see what changed between commits or working directory:

```bash
git diff
```

Common uses:

- See unstaged changes:  

  ```bash
  git diff
  ```

- See changes between commits:  

  ```bash
  git diff <commit1> <commit2>
  ```

- See changes in staged files:  

  ```bash
  git diff --cached
  ```

---

## 4️⃣ Checking File History

Track changes to a specific file:

```bash
git log -- <filename>
```

Or inspect content changes over time:

```bash
git diff <old-commit> <new-commit> -- <filename>
```

---

## 🧾 Summary

Commits are the core of Git's version control system.  
They let you save progress, document your work, and review or compare changes over time using `log` and `diff`.

---

## 📚 Resources for Further Learning

- [Git Log Documentation](https://git-scm.com/docs/git-log)  
- [Git Diff Documentation](https://git-scm.com/docs/git-diff)  
- Pro Git Book – Chapter on Git Basics  

---

## ⏭️ Next Topic

Next, learn about [Git Branches](06-branches.md)  
to explore parallel development and integration workflows.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
