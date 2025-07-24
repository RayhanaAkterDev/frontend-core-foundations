# Git Branches

> Tags: git, branches, version-control, workflow, branching  
> **Purpose:** Introduce Git branching concepts, commands to create, switch, and manage branches, enabling parallel development and organized workflows.

---

## 1️⃣ What is a Branch?

- A **branch** is a separate line of development in Git.
- Allows multiple developers or features to progress simultaneously without interfering.
- The default branch is usually called `main` or `master`.
- Branches are lightweight pointers to commits.

---

## 2️⃣ Creating Branches

Create a new branch:

```bash
git branch <branch-name>
```

This creates the branch but keeps you on the current branch.

---

## 3️⃣ Switching Branches

Switch to an existing branch:

```bash
git checkout <branch-name>
```

Or create and switch in one command (Git 2.23+):

```bash
git switch -c <branch-name>
```

---

## 4️⃣ Listing Branches

List all local branches:

```bash
git branch
```

List all remote branches:

```bash
git branch -r
```

List all branches (local + remote):

```bash
git branch -a
```

---

## 5️⃣ Deleting Branches

Delete a local branch that is merged:

```bash
git branch -d <branch-name>
```

Force delete an unmerged branch:

```bash
git branch -D <branch-name>
```

---

## 6️⃣ Merging Branches

Merge another branch into the current one:

```bash
git merge <branch-name>
```

- Integrates changes from `<branch-name>` into your current branch.
- May cause merge conflicts if changes overlap.

---

## 7️⃣ Resolving Merge Conflicts

- Git will mark conflicting files during a merge.
- Manually edit conflicts, then stage and commit the resolved files.

---

## 🧾 Summary

Branches allow isolated development paths, enabling teams to work on features, fixes, or experiments in parallel.  
Learning to create, switch, merge, and delete branches is essential for effective Git workflows.

---

## 📚 Resources for Further Learning

- [Git Branch Documentation](https://git-scm.com/docs/git-branch)  
- [Pro Git Book – Branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)  

---

## ⏭️ Next Topic

Explore [Remote Branches & Collaboration](06-remote-branches.md)  
to understand how branches work with remote repositories and teams.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
