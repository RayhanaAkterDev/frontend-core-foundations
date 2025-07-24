# GitHub Basics & Remote Repositories

> Tags: github, remote, git-push, git-clone, remote-repository  
> **Purpose:** Learn how to connect local repositories to GitHub and understand the workflow of remote repositories.

---

## 1️⃣ What is a Remote Repository?

- A **remote repository** is a version of your project hosted on the internet or network.
- GitHub is a **popular remote hosting platform** that allows developers to share, collaborate, and manage code publicly or privately.

---

## 2️⃣ Creating a Repository on GitHub

1. Go to [https://github.com](https://github.com)  
2. Click **New** (top-left or from profile dropdown)  
3. Enter a repository **name**, optional description, and visibility  
4. Click **Create repository**

You will now have a remote URL like:

```bash
https://github.com/your-username/your-repo.git
```

---

## 3️⃣ Connecting Local to Remote

If your project already exists locally:

```bash
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

This:

- Connects your local repo to GitHub (`origin`)
- Pushes the current branch (`main`) to remote

To verify remote setup:

```bash
git remote -v
```

---

## 4️⃣ Cloning a Remote Repository

To copy a remote GitHub repository to your local system:

```bash
git clone https://github.com/username/repo.git
```

This creates a local copy of the repository and sets up the remote tracking.

---

## 5️⃣ Pushing Changes to GitHub

After committing locally:

```bash
git push
```

Or push to a specific remote and branch:

```bash
git push origin main
```

To set a default upstream branch:

```bash
git push -u origin main
```

---

## 6️⃣ Pulling Changes from GitHub

To fetch and integrate changes from the remote:

```bash
git pull
```

Or:

```bash
git pull origin main
```

---

## 🧾 Summary

GitHub enables you to store code remotely and collaborate with others.  
The `git remote`, `push`, `pull`, and `clone` commands are essential for syncing between local and remote repositories.

---

## 📚 Resources for Further Learning

- [GitHub Docs: Create a Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories)  
- [Git Remote](https://git-scm.com/docs/git-remote)  
- [Git Push](https://git-scm.com/docs/git-push)  
- [Git Clone](https://git-scm.com/docs/git-clone)

---

## ⏭️ Next Topic

Next, learn how to [Connect Local to Remote (push, pull, clone)](15-local-to-remote.md)  
and manage multiple remotes efficiently.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
