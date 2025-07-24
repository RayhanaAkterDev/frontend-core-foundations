# Working with .gitignore

> Tags: git, gitignore, ignore-files, version-control  
> **Purpose:** Learn how to use the `.gitignore` file to exclude files and directories from being tracked by Git.

---

## 1️⃣ What is `.gitignore`?

- `.gitignore` is a plain text file where you specify patterns for files and directories that Git should **ignore**.
- Useful for excluding:
  - Build artifacts (`dist/`, `build/`)  
  - Dependency folders (`node_modules/`, `vendor/`)  
  - Sensitive files (API keys, config files)  
  - OS-specific files (`.DS_Store`, `Thumbs.db`)

---

## 2️⃣ Creating a `.gitignore` File

Create a `.gitignore` file in the root of your repository:

```gitignore
touch .gitignore
```

Open it in your editor and add file patterns to ignore, for example:

```gitignore
node_modules/
dist/
.env
.DS_Store
```

---

## 3️⃣ Common `.gitignore` Patterns

- Ignore a directory:

  ```gitignore
  /node_modules/
  ```

- Ignore all files with a specific extension:

  ```gitignore
  *.log
  ```

- Ignore a specific file:

  ```gitignore
  secret.txt
  ```

- Ignore files or folders in any subdirectory:

  ```gitignore
  logs/
  ```

---

## 4️⃣ Important Notes

- `.gitignore` only affects **untracked files**. Files already tracked by Git will **not** be ignored unless you remove them from the index.
- To stop tracking a file previously committed:

  ```bash
  git rm --cached filename
  ```

- Use global gitignore for files you always want to ignore across repos:

  ```bash
  git config --global core.excludesfile ~/.gitignore_global
  ```

---

## 🧾 Summary

The `.gitignore` file helps keep your repository clean by excluding files you don’t want to track.  
Proper use prevents sensitive data leaks and reduces clutter from temporary or build files.

---

## 📚 Resources for Further Learning

- [Git Ignore Documentation](https://git-scm.com/docs/gitignore)  
- [gitignore.io](https://www.toptal.com/developers/gitignore) — Generate `.gitignore` templates  

---

## ⏭️ Next Topic

Next, learn about [Pull Requests & Collaboration Workflow](17-pull-requests.md)  
to contribute to projects effectively.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
