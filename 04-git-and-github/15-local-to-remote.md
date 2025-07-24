# Connecting Local to Remote (push, pull, clone)

> Tags: git, github, push, pull, clone, remote  
> **Purpose:** Learn how to link a local repository to a remote (GitHub), and how to sync changes using push, pull, and clone commands.

---

## 1️⃣ Understanding Local ↔ Remote Workflow

- **Local repository:** Lives on your computer.  
- **Remote repository:** Hosted online (e.g., GitHub).  
- You can **connect** the two to sync your work and collaborate with others.

---

## 2️⃣ Adding a Remote to a Local Repo

To connect your local project to a GitHub repo:

```bash
git remote add origin https://github.com/username/repo.git
```

- `origin` is a conventional name for the main remote.
- To confirm the remote connection:

```bash
git remote -v
```

---

## 3️⃣ Pushing to Remote

After making local commits:

```bash
git push origin main
```

- Pushes your local `main` branch to the remote.

To set default upstream tracking (so you can use just `git push` later):

```bash
git push -u origin main
```

---

## 4️⃣ Pulling from Remote

To **download and merge** remote changes into your current branch:

```bash
git pull
```

Or specify branch and remote:

```bash
git pull origin main
```

This keeps your local copy in sync with changes made remotely.

---

## 5️⃣ Cloning a Repository from GitHub

To create a local copy of a remote project:

```bash
git clone https://github.com/username/repo.git
```

- Automatically sets up the remote as `origin`  
- Pull/push works immediately without extra setup

---

## 🧾 Summary

- `git remote add` links your local project to GitHub  
- `git push` sends local commits to GitHub  
- `git pull` fetches updates from GitHub  
- `git clone` downloads a full project to your machine  

Mastering these commands enables you to maintain consistent synchronization between your local and remote repositories.

---

## 📚 Resources for Further Learning

- [Git Push Docs](https://git-scm.com/docs/git-push)  
- [Git Pull Docs](https://git-scm.com/docs/git-pull)  
- [Git Clone Docs](https://git-scm.com/docs/git-clone)

---

## ⏭️ Next Topic

Next, explore [.gitignore](16-gitignore.md) to exclude unnecessary files from version control.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
