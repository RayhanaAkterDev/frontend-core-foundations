# Basic Git Commands (init, add, commit)

> Tags: git, cli, git-init, git-add, git-commit, version-control  
> **Purpose:** Learn the three fundamental Git commands used to initialize repositories, stage files, and create commits — forming the foundation of all Git workflows.

---

## 1️⃣ git init — Initialize a Repository

The `git init` command creates a new Git repository in your project folder.

```bash
git init
```

- Creates a hidden .git directory.
- Begins tracking your project with Git.
- Can be run on an existing folder or an empty one.

**Example:**

```base
mkdir my-project
cd my-project
git init
```

---

## 2️⃣ git add — Stage Changes

The git add command adds files or changes to the staging area, preparing them for a commit.

```base
git add <filename>
```

- Stages a specific file.
- Use git add . to stage all modified and new files in the current directory.

**Example:**

```base
git add index.html
git add .   # Adds all changes
```

---

## 3️⃣ git commit — Save a Snapshot

The git commit command takes the files from the staging area and saves them in the repository as a commit.

```base
git commit -m "Your commit message here"
```

- Commits only the staged changes.
- The message should describe the changes clearly.

**Example:**

```base
git commit -m "Add homepage layout with basic HTML structure"
```

---

## 4️⃣ Workflow Summary

A typical Git workflow:

```bash
git init                      # Initialize repo (only once per project)
# Make changes to files
git add .                     # Stage all modified/added files
git commit -m "Message"       # Save snapshot of staged changes
```

Repeat `add → commit` cycle as development continues.

## 🧾 Summary

These three commands — `init`, `add`, and `commit` — form the **core cycle** of using Git.  
They allow you to start tracking changes, prepare files for saving,  
and create safe, descriptive checkpoints in your project.

## 📚 Resources for Further Learning

- [Git Basics – Git SCM](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)  
- [Git Commit Best Practices](https://cbea.ms/git-commit/)  
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

## ⏭️ Next Topic

Continue to [Tracking Changes & Git Status](04-git-status-diff-log.md)  
to learn how to check file states and inspect changes before committing.

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)
- [Git Command Cheat Sheet](cheat-sheet.md)
