# Git Rebase (Clean History)

> Tags: git, rebase, history, version-control, branching  
> **Purpose:** Explain how Git rebase works to rewrite commit history for a cleaner, linear project timeline, and how it differs from merging.

---

## 1️⃣ What is Git Rebase?

- **Git rebase** moves or reapplies commits from one branch onto another base commit.  
- It creates a linear history by "replaying" commits instead of merging branches with merge commits.  
- Useful to maintain a clean, understandable commit timeline.

---

## 2️⃣ Basic Rebase Workflow

Switch to the feature branch and rebase onto the latest `main` branch:

```bash
git checkout feature-branch
git rebase main
```

- This reapplies commits from `feature-branch` on top of `main`.  
- It moves your branch tip forward and rewrites history.

---

## 3️⃣ Interactive Rebase

Use interactive mode to edit, squash, reorder, or drop commits:

```bash
git rebase -i <commit-hash>
```

- Opens an editor listing commits to be rebased.  
- Commands like `pick`, `squash`, `reword`, `drop` let you modify commit history.

---

## 4️⃣ Resolving Conflicts During Rebase

- Conflicts may occur while replaying commits.  
- Git will pause and prompt you to resolve conflicts just like during merges.  
- After resolving conflicts:

  ```bash
  git add <resolved-file>
  git rebase --continue
  ```

- To abort rebase and return to the original state:

  ```bash
  git rebase --abort
  ```

---

## 💡 Pro Tip: Manual Cleanup During Rebase Issues

If a rebase gets stuck or corrupted and git rebase --abort does not work, advanced users may manually delete the rebase state files:

```bash
rm -rf .git/rebase-merge
```

**Warning**: This is a low-level operation and can cause repository corruption if used incorrectly.
It should only be done as a last resort when all standard Git commands fail.

Always try `git rebase --abort` first to safely cancel a rebase.

---

## 5️⃣ Rebase vs Merge

| Aspect               | Rebase                         | Merge                          |
|----------------------|--------------------------------|--------------------------------|
| History              | Linear, cleaner                | Non-linear, preserves branch history |
| Commits              | Rewrites commit history        | Creates a merge commit         |
| Collaboration        | Avoid rebasing shared branches | Safer for shared branches      |
| Workflow             | Preferred for local cleanup    | Good for integrating completed branches |

---

## 🧾 Summary

Git rebase is a powerful tool to clean up and streamline commit history.  
Use it carefully, especially avoiding rebasing shared/public branches.  
Interactive rebase offers granular control over commits before merging.

---

## 📚 Resources for Further Learning

- [Git Rebase Documentation](https://git-scm.com/docs/git-rebase)  
- Pro Git Book – Rebasing Chapter  

---

## ⏭️ Next Topic

Learn about [Git Cherry-pick (Pick Specific Commits)](12-git-cherry-pick.md)  
to selectively apply commits from one branch to another.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
