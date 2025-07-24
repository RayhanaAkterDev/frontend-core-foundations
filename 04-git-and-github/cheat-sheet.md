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

- `git reset HEAD <file>` — Unstage a file (keep changes in working directory)  
- `git reset --soft <commit>` — Move HEAD back, keep changes staged  
- `git reset <commit>` — Move HEAD, unstage changes, keep working directory  
- `git reset --hard <commit>` — Discard all changes and reset everything  
- `git revert <commit>` — Create a new commit that undoes a previous commit  
- `git restore <file>` — Discard unstaged changes  
- `git restore --staged <file>` — Unstage a file but keep changes  
- `git reset --hard HEAD~1` — Delete the most recent commit (local only)  
- `git push --force` — Force push (only if commit was already pushed)

---

## 7. [GIT STASH](09-git-stash.md)

- `git stash` — Save current changes and clean working directory  
- `git stash list` — Show all saved stashes  
- `git stash apply` — Reapply the most recent stash without removing it  
- `git stash apply stash@{n}` — Reapply a specific stash  
- `git stash pop` — Reapply and remove the most recent stash  
- `git stash push -m "message"` — Create a named stash with a message  
- `git stash push <file>` — Stash changes only for specific files  
- `git stash drop stash@{n}` — Delete a specific stash  
- `git stash clear` — Remove all stashes  

---

## 8. [GIT TAG](10-git-tag.md)

- `git tag` — List all tags in the repository  
- `git tag <tagname>` — Create a lightweight tag  
- `git tag -a <tagname> -m "message"` — Create an annotated tag with a message  
- `git show <tagname>` — View details of a tag  
- `git push origin <tagname>` — Push a specific tag to remote  
- `git push origin --tags` — Push all tags to remote  
- `git checkout <tagname>` — Checkout a tag (detached HEAD state)  
- `git checkout -b <branch> <tagname>` — Create a new branch from a tag  

---

## 9. [GIT REBASE](11-git-rebase.md)

- `git rebase <branch>` — Reapply commits on current branch onto another branch  
- `git rebase -i <commit-hash>` — Start interactive rebase to edit, squash, or reorder commits  
- `git rebase --continue` — Continue rebase after resolving conflicts  
- `git rebase --abort` — Abort rebase and return to original state  

---

## 10. [GIT CHERRY-PICK](12-git-cherry-pick.md)

- `git cherry-pick <commit-hash>` — Apply a specific commit to the current branch  
- `git cherry-pick <start-commit>^..<end-commit>` — Apply a range of commits  
- `git cherry-pick --continue` — Continue cherry-pick after resolving conflicts  
- `git cherry-pick --abort` — Abort the cherry-pick process  
- `git cherry-pick -e <commit-hash>` — Cherry-pick with commit message editing  

---

## 11. [GIT REFLOG](13-git-reflog.md)

- `git reflog` — View reference log of all HEAD and branch changes  
- `git checkout HEAD@{n}` — Checkout a previous HEAD state from reflog  
- `git branch <name> HEAD@{n}` — Create a branch from a previous state  
- `git checkout <commit-hash>` — Checkout a lost commit using its hash  
- `git reflog expire --expire=now --all` — Expire all reflog entries  
- `git gc --prune=now --aggressive` — Clean up unreachable commits and expired reflog

---

## 12. [GITHUB BASICS & REMOTE REPOSITORIES](14-github-basics.md)

- `git remote add origin <url>` — Link local repo to remote on GitHub  
- `git remote -v` — Show remote URLs associated with the repo  
- `git push -u origin main` — Push to remote and set tracking for `main` branch  
- `git push` — Push committed changes to default remote branch  
- `git pull` — Fetch and merge changes from remote  
- `git pull origin main` — Pull updates from the remote `main` branch  
- `git clone <url>` — Clone a GitHub repo to your local machine  

---

## 13. [CONNECTING LOCAL TO REMOTE (PUSH, PULL, CLONE)](15-local-to-remote.md)

- `git remote add origin <url>` — Link local repository to a remote URL  
- `git remote -v` — Show configured remote repositories  
- `git push -u origin main` — Push local `main` branch and set upstream tracking  
- `git push` — Push commits to the tracked remote branch  
- `git pull` — Fetch and merge changes from the remote repository  
- `git pull origin main` — Pull updates from the remote `main` branch explicitly  
- `git clone <url>` — Clone a remote repository locally, setting up tracking  

---

## 14. [WORKING WITH .GITIGNORE](16-gitignore.md)

- Create `.gitignore` file in root to specify files/folders to ignore  
- Use patterns like `/node_modules/`, `*.log`, `.env`, `.DS_Store`  
- `.gitignore` affects only untracked files; use `git rm --cached <file>` to untrack files  
- Configure global gitignore with `git config --global core.excludesfile ~/.gitignore_global`  

---

## 15. [PULL REQUESTS & COLLABORATION WORKFLOW](17-pull-requests.md)

- Fork and clone repositories to work on code you don’t own  
- Create feature branches for your changes: `git checkout -b feature-branch`  
- Push feature branches to remote: `git push origin feature-branch`  
- Open pull requests on GitHub to propose changes for review  
- Collaborate via code review, discussions, and CI checks before merging  
- Merge pull requests using merge commits, squash, or rebase strategies  
- Delete feature branches after merging to keep the repo clean  

---

## 16. [WORKING WITH FORKS](18-forks.md)

- Fork repositories on GitHub to create a personal copy  
- Clone your fork locally with `git clone <fork-url>`  
- Add the original repo as upstream remote: `git remote add upstream <original-url>`  
- Fetch and merge upstream changes regularly:  
  `git fetch upstream`  
  `git checkout main`  
  `git merge upstream/main`  
- Push feature branches to your fork: `git push origin feature-branch`  
- Open pull requests from fork to original repository for contributions  

---

## 17. [SSH KEY SETUP FOR GITHUB](19-ssh-key-setup.md)

- Generate SSH key with `ssh-keygen -t ed25519 -C "email@example.com"`  
- Start ssh-agent: `eval "$(ssh-agent -s)"`  
- Add private key to agent: `ssh-add ~/.ssh/id_ed25519`  
- Copy public key contents and add to GitHub SSH keys in settings  
- Test connection using: `ssh -T git@github.com`  

---

## 18. [GITHUB ISSUES & PROJECT BOARDS](20-github-issues-projects.md)

- Create and manage issues to track bugs, features, and tasks  
- Use labels, assignees, and milestones for issue organization  
- Link issues with commits and pull requests for traceability  
- Use project boards to visualize workflow with columns and cards  
- Move cards to track progress and automate workflows with GitHub Actions  

---

## 19. [GITHUB ACTIONS (CI/CD AUTOMATION)](21-github-actions.md)

- Define workflows with YAML files in `.github/workflows/`  
- Trigger workflows on events like push, pull request, or schedule  
- Use jobs and steps to organize automation tasks  
- Utilize GitHub-hosted runners or self-hosted runners  
- Leverage marketplace actions for reusable workflow steps  
- Common uses: testing, building, deploying, linting, and notifications  

---

## 20. [BEST PRACTICES FOR GIT COMMITS](22-commit-best-practices.md)

- Write clear and concise commit messages in imperative mood  
- Keep subject lines under 50 characters and separate from body  
- Use body to explain what and why changes were made  
- Make commits small, focused, and logically grouped  
- Use prefixes like `feat:`, `fix:`, and tools like `git commit --amend` and `git rebase -i`  
- Follow team/project commit message conventions  

---

## 21. [GIT SUBMODULES (ADVANCED)](23-git-submodules.md)

- Embed external repositories as submodules inside a parent repo  
- Add submodules using `git submodule add <url> [path]`  
- Clone repos with submodules using `git clone --recurse-submodules`  
- Update and commit submodule changes separately  
- Remove submodules cleanly with `git submodule deinit` and `git rm`  

---

## 24. [GIT HOOKS (PRE-COMMIT, PRE-PUSH)](24-git-hooks.md)

- Automate scripts triggered before commits and pushes  
- Create hooks in `.git/hooks/` directory and make executable  
- Use pre-commit hooks for tests, linting, formatting checks  
- Use pre-push hooks for validations before pushing code  
- Manage hooks easily with tools like Husky  

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)
