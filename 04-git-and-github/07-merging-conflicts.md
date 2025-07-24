# Merging & Conflict Resolution

> Tags: git, merging, conflict-resolution, version-control, collaboration  
> **Purpose:** Explain how to combine changes from different branches and handle conflicts that arise during merges to maintain code integrity.

---

## 1️⃣ What is Merging?

- **Merging** is the process of integrating changes from one branch into another.  
- Typically, you merge a feature branch into `main` or `master` after development.  
- Git tries to automatically combine changes from both branches.

---

## 2️⃣ Performing a Merge

Switch to the branch you want to merge into (e.g., `main`):

```bash
git checkout main
```

Merge another branch into it:

```bash
git merge <branch-name>
```

- If there are no conflicting changes, Git will create a new commit called a **merge commit**.  
- This commit has two parent commits, preserving history from both branches.

---

## 3️⃣ Merge Conflicts

- Conflicts happen when the same part of a file has been changed differently in the branches being merged.  
- Git pauses the merge and marks conflicted files for manual resolution.

You will see conflict markers inside the file, like:

```plaintext
<<<<<<< HEAD
Your changes here
=======
Other branch’s changes here
>>>>>>> branch-name
```

---

## 4️⃣ Resolving Conflicts

Steps to resolve:

1. Open conflicted files and decide how to combine changes.  
2. Remove conflict markers and edit content as needed.  
3. Stage resolved files:

   ```bash
   git add <resolved-file>
   ```

4. Complete the merge with a commit (if Git hasn’t done it automatically):

   ```bash
   git commit
   ```

---

## 5️⃣ Abort a Merge

If you want to cancel a merge in progress:

```bash
git merge --abort
```

This reverts your working directory to the pre-merge state.

---

## 🧾 Summary

Merging brings together divergent lines of development.  
While many merges are automatic, conflicts require manual intervention to preserve code correctness.  
Mastering merges and conflict resolution is vital for collaborative workflows.

---

## 📚 Resources for Further Learning

- [Git Merge Documentation](https://git-scm.com/docs/git-merge)  
- [Pro Git Book – Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#Basic-Merging)  
- [Atlassian Git Tutorials – Merge Conflicts](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)  

---

## ⏭️ Next Topic

Learn about [Undoing Changes](08-undoing-changes.md)  
to recover from mistakes and revert unwanted commits.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
