# 🧾 GIT COMMAND CHEAT SHEET

---

## 1. [SETUP & CONFIGURATION](02-install-configure-git.md)

- `git --version` — Check installed Git version  
- `git config --global user.name "Your Name"` — Set your Git username  
- `git config --global user.email "you@example.com"` — Set your Git email  
- `git config --global core.editor "code --wait"` — Set VS Code as default editor  
- `git config --list` — View all current Git configurations  
- `git config --global alias.st status` — Create a shortcut: `git st`  
- `git config --global color.ui auto` — Enable colored Git output in terminal  

---

## 2. [INIT & FIRST COMMIT](03-basic-commands.md)

- `git init` — Initialize Git in the current folder  
- `git add filename.html` — Stage a specific file  
- `git add .` — Stage all files in the current directory  
- `git commit -m "Initial commit"` — Commit staged files with a message  
- `git add . && git commit -m "Update project"` — Quick one-liner workflow  

---

## 3. TRACKING & HISTORY

**Related file links**:

[Git Status, Diff, and Log](04-git-status-diff-log.md) — Covers tracking file states, comparing changes, and basic commit history inspection.  
[Understanding Commits & History](05-commits-history.md) — Explains what commits are, how to inspect history deeply, and use tools like `git show`, `git log --graph`, etc.

### 📌 Commonly Used Commands

- `git status` — Check file status: staged, modified, or untracked  
- `git diff` — View unstaged file differences  
- `git diff --cached` — View staged file differences  
- `git diff <commit1> <commit2>` — Compare changes between two commits  
- `git diff <commit1> <commit2> -- <file>` — View specific file changes across commits  
- `git log` — View detailed commit history  
- `git log --oneline` — View short one-line-per-commit summary  
- `git log --oneline --graph --all` — Visualize commit history with branches  
- `git log -- <filename>` — View commit history for a specific file  
- `git show <commit-hash>` — View the content and changes of a specific commit  

---

## 4. [BRANCHING](06-branches.md)

- `git branch` — List all local branches  
- `git branch -r` — List remote branches  
- `git branch -a` — List all branches (local + remote)  
- `git branch <branch-name>` — Create a new branch  
- `git checkout <branch-name>` — Switch to a branch  
- `git switch <branch-name>` — Switch to a branch (Git 2.23+)  
- `git switch -c <branch-name>` — Create and switch to a new branch  
- `git branch -d <branch-name>` — Delete a local branch (merged)  
- `git branch -D <branch-name>` — Force delete a local branch (unmerged)  
- `git merge <branch-name>` — Merge a branch into the current branch  

---

## 5. [MERGING & CONFLICT RESOLUTION](07-merging-conflicts.md)

- `git merge <branch-name>` — Merge the specified branch into the current branch  
- `git status` — View merge conflicts and file status during a merge  
- `git add <file>` — Mark conflict as resolved by staging the file  
- `git commit` — Complete the merge after resolving conflicts  
- `git merge --abort` — Abort the merge and revert to the previous state  

---

## 6. [UNDOING CHANGES](08-undoing-changes.md)

- `git reset HEAD <file>` — Unstage a file, keep changes in working directory  
- `git reset --soft <commit>` — Undo commits, keep changes staged  
- `git reset <commit>` — Undo commits, unstage changes, keep working directory  
- `git reset --hard <commit>` — Undo commits and discard all local changes (dangerous)  
- `git revert <commit>` — Create a new commit that undoes a previous commit  
- `git restore <file>` — Discard unstaged changes in working directory  
- `git restore --staged <file>` — Unstage a file but keep changes in working directory  

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)
