# Git Stash (Save Without Committing)

> Tags: git, stash, undo, save, version-control  
> **Purpose:** Teach how to temporarily save changes without committing so you can switch branches or work on something else, then reapply those changes later.

---

## 1️⃣ What is Git Stash?

- **Git stash** allows you to save your current uncommitted changes temporarily.  
- Useful when you need to switch context or branches but aren’t ready to commit incomplete work.  
- Saves both staged and unstaged changes (by default).

---

## 2️⃣ Basic Stashing

To stash changes:

```bash
git stash
```

- Saves your changes and cleans your working directory to the last commit state.  
- Gives a stash name like `stash@{0}` for reference.

---

## 3️⃣ Listing Stashes

See all saved stashes with:

```bash
git stash list
```

---

## 4️⃣ Applying Stashes

To reapply the most recent stash without removing it:

```bash
git stash apply
```

To apply a specific stash:

```bash
git stash apply stash@{2}
```

---

## 5️⃣ Popping Stashes

Apply and remove the latest stash from the stash list:

```bash
git stash pop
```

---

## 6️⃣ Creating Named Stashes

Give a descriptive message to your stash:

```bash
git stash push -m "WIP: fixing header layout"
```

---

## 7️⃣ Stashing Specific Paths

Stash changes only from specific files or directories:

```bash
git stash push <file1> <dir2>
```

---

## 8️⃣ Dropping and Clearing Stashes

- Remove a specific stash:

  ```bash
  git stash drop stash@{0}
  ```

- Remove all stashes:

  ```bash
  git stash clear
  ```

---

## 🧾 Summary

Git stash is a powerful tool to save your incomplete work temporarily without committing.  
It lets you switch branches or pull updates safely, then resume your work smoothly by applying or popping the stash.

---

## 📚 Resources for Further Learning

- [Git Stash Documentation](https://git-scm.com/docs/git-stash)  
- Pro Git Book – Stashing and Cleaning Chapter  

---

## ⏭️ Next Topic

Explore [Git Tag (Version Marking)](10-git-tag.md)  
to learn how to mark specific commits with meaningful names.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
