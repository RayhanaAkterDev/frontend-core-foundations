# Undoing Changes (reset, revert, restore)

> Tags: git, undo, reset, revert, restore, version-control  
> **Purpose:** Explain different Git commands to undo changes safely and effectively in various situations, from discarding local edits to undoing commits.

---

## 1️⃣ `git reset` — Move HEAD and optionally modify index and working directory

- `git reset` changes which commit your current branch points to (moves HEAD).  
- Can be used to unstage files or undo commits locally.

**Common uses**:

- **Unstage files** (keep changes in working directory):

  ```bash
  git reset HEAD <file>
  ```

- **Soft reset** (undo commits but keep changes staged):

  ```bash
  git reset --soft <commit>
  ```

- **Mixed reset (default)** (undo commits and unstage changes, keep working directory):

  ```bash
  git reset <commit>
  ```

- **Hard reset** (undo commits and discard all local changes):

  ```bash
  git reset --hard <commit>
  ```

⚠️ Be cautious: `--hard` will delete local changes permanently.

---

## 2️⃣ `git revert` — Create a new commit that undoes a previous commit

- Safely undo changes by creating a new commit that reverses the effects of an earlier commit.  
- Useful when working with shared/public repositories.

```bash
git revert <commit>
```

- Opens an editor to write a commit message for the revert.  
- Keeps project history intact and avoids rewriting commit history.

---

## 3️⃣ `git restore` — Undo changes in the working directory or staging area

- Introduced in Git 2.23 as a clearer way to undo changes locally.

**Common uses**:

- **Discard unstaged changes** (restore file to last commit):

  ```bash
  git restore <file>
  ```

- **Unstage a file** (remove from staging area but keep changes):

  ```bash
  git restore --staged <file>
  ```

---

## 🧾 Summary

- Use `git reset` for powerful, low-level undoing including changing branch HEAD and index state.  
- Use `git revert` to safely undo changes in public/shared history by creating new commits.  
- Use `git restore` for easier, intuitive undoing of local working directory and staging changes.  

Choose commands based on whether you want to rewrite history or just fix local edits.

---

## 📚 Resources for Further Learning

- [Git Reset Documentation](https://git-scm.com/docs/git-reset)  
- [Git Revert Documentation](https://git-scm.com/docs/git-revert)  
- [Git Restore Documentation](https://git-scm.com/docs/git-restore)  
- Pro Git Book – Undoing Things Chapter  

---

## ⏭️ Next Topic

Learn about [Git Stash (Save Without Committing)](09-git-stash.md)  
to temporarily shelve changes and switch contexts easily.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
