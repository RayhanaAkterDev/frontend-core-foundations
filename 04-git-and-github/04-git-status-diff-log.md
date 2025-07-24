# Tracking Changes & Git Status

> Tags: git, git-status, git-diff, git-log, version-control  
> **Purpose:** Learn how to monitor, review, and debug the state of your files using Git’s visibility tools.

---

## 1. git status — Check File States

```bash
git status
```

- Displays modified, untracked, and staged files.
- Helps confirm which changes are staged and which are not.
- Useful before committing to verify what will be included.

---

## 2. git diff — Compare File Changes

```bash
git diff
```

- Shows differences between working directory and staging area (unstaged changes).

```base
git diff --cached
```

- Shows differences between staging area and last commit (staged but uncommitted changes).

---

## 3. git log — View Commit History

```base
git log
```

- Shows detailed commit history including commit hashes, author, date, and messages.
- Press q to quit the log view.

```base
git log --oneline
```

- Shows a compact, one-line summary per commit for easier browsing.

---

## 4. git show — View a Specific Commit

```bash
git show <commit-hash>
```

Displays the full details and changes of a specific commit.

---

## 🧾 Summary

This topic focuses on Git commands that help you inspect the current state and history of your project.  
Using these commands will make it easier to understand what has changed, what’s staged, and your project’s history before making new commits.

---

## 📚 Resources for Further Learning

- [git status](https://git-scm.com/docs/git-status)  
- [git diff](https://git-scm.com/docs/git-diff)  
- [git log](https://git-scm.com/docs/git-log)  
- [git show](https://git-scm.com/docs/git-show)  

---

## ⏭️ Next Topic

Continue to **Understanding Commits & History** to learn how Git stores snapshots and how to interpret commit data.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)
- [Git Command Cheat Sheet](cheat-sheet.md)
