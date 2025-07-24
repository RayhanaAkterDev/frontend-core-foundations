# 🧾 GIT COMMAND CHEAT SHEET

---

## 1. SETUP & CONFIGURATION

- `git --version` — Check installed Git version  
- `git config --global user.name "Your Name"` — Set your Git username  
- `git config --global user.email "you@example.com"` — Set your Git email  
- `git config --global core.editor "code --wait"` — Set VS Code as default editor  
- `git config --list` — View all current Git configurations  
- `git config --global alias.st status` — Create a shortcut: `git st`  
- `git config --global color.ui auto` — Enable colored Git output in terminal  

---

## 2. INIT & FIRST COMMIT

- `git init` — Initialize Git in the current folder  
- `git add filename.html` — Stage a specific file  
- `git add .` — Stage all files in the current directory  
- `git commit -m "Initial commit"` — Commit staged files with a message  
- `git add . && git commit -m "Update project"` — Quick one-liner workflow  

---

## 3. TRACKING & HISTORY

- `git status` — Check file status: staged, modified, or untracked  
- `git diff` — View unstaged file differences  
- `git diff --cached` — View staged file differences  
- `git log` — View detailed commit history  
- `git log --oneline` — View short one-line-per-commit summary  
- `git show <commit-hash>` — View the content of a specific commit  

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](../README.md)
