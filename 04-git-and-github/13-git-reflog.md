# Git Reflog (Recover Lost Commits)

> Tags: git, reflog, recover, reset, history  
> **Purpose:** Learn how to recover lost or dangling commits using Git’s internal reflog tracking system.

---

## 1️⃣ What is Git Reflog?

- **Git Reflog** is a reference log that records all changes made to the tips of branches and HEAD—even those not visible in `git log`.
- It allows you to **recover commits** that have been lost due to `reset`, `rebase`, `amend`, or branch deletion.

---

## 2️⃣ Viewing the Reflog

```bash
git reflog
```

- Shows a timeline of all recent HEAD changes.
- Each entry includes:
  - Reference ID (e.g., `HEAD@{2}`)
  - Commit hash
  - Action description (`checkout`, `commit`, `reset`, etc.)

---

## 3️⃣ Recovering a Lost Commit

If you accidentally removed a commit (e.g., via `reset --hard`), use its reflog reference to recover it:

```bash
git checkout HEAD@{2}
```

Or create a new branch from the lost commit:

```bash
git branch recover-branch HEAD@{2}
```

---

## 4️⃣ Using Commit Hashes from Reflog

You can also copy the **commit hash** from the reflog entry and check it out or create a new branch:

```bash
git checkout <commit-hash>
git branch recovered <commit-hash>
```

---

## 5️⃣ Clear Reflog (Optional)

To clear the reflog history:

```bash
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

⚠️ This is permanent—only use when sure you won’t need the reflog again.

---

## 🧾 Summary

Git Reflog is an essential safety net for recovering lost work.  
It tracks all HEAD movements, allowing you to restore commits even after destructive operations like reset or rebase.

---

## 📚 Resources for Further Learning

- [Git Reflog Documentation](https://git-scm.com/docs/git-reflog)  
- [Pro Git Book – Data Recovery Section](https://git-scm.com/book/en/v2/Git-Internals-Git-References)

---

## ⏭️ Next Topic

Next, learn about [GitHub Basics & Remote Repositories](14-github-basics.md)  
to start pushing your local work to GitHub.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
