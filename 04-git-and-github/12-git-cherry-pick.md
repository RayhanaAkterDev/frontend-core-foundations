# Git Cherry-pick (Pick Specific Commits)

> Tags: git, cherry-pick, commits, version-control  
> **Purpose:** Explain how to apply individual commits from one branch onto another without merging entire branches.

---

## 1️⃣ What is Git Cherry-pick?

- **Git cherry-pick** allows you to select specific commits from one branch and apply them onto your current branch.  
- Useful for applying bug fixes or features selectively without merging all changes.

---

## 2️⃣ Basic Cherry-pick Usage

To cherry-pick a single commit:

```bash
git cherry-pick <commit-hash>
```

This applies the changes from that commit on top of your current branch as a new commit.

---

## 3️⃣ Cherry-pick Multiple Commits

You can cherry-pick a range of commits by specifying the start and end commit hashes:

```bash
git cherry-pick <start-commit>^..<end-commit>
```

This applies all commits from `<start-commit>` (exclusive) up to `<end-commit>` (inclusive).

---

## 4️⃣ Handling Conflicts

- If conflicts occur during cherry-pick, Git will pause and notify you.  
- Resolve conflicts manually, stage the changes:

  ```bash
  git add <file>
  ```

- Then continue the cherry-pick:

  ```bash
  git cherry-pick --continue
  ```

- To abort the cherry-pick process:

  ```bash
  git cherry-pick --abort
  ```

---

## 5️⃣ Cherry-pick with Commit Message Editing

To edit the commit message during cherry-pick:

```bash
git cherry-pick -e <commit-hash>
```

---

## 🧾 Summary

Cherry-pick is a precise tool to selectively apply commits across branches.  
It’s useful for patching, hotfixes, or bringing specific changes without full merges.

---

## 📚 Resources for Further Learning

- [Git Cherry-pick Documentation](https://git-scm.com/docs/git-cherry-pick)  
- Pro Git Book – Cherry-pick Section  

---

## ⏭️ Next Topic

Learn about [Git Reflog (Recover Lost Commits)](13-git-reflog.md)  
to recover commits that may seem lost or deleted.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
