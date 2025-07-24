# Git Hooks (Pre-commit, Pre-push)

> Tags: git, hooks, pre-commit, pre-push, automation, scripts  
> **Purpose:** Learn how to automate tasks by using Git hooks, scripts that run at specific points in the Git workflow like before commits or pushes.

---

## 1️⃣ What are Git Hooks?

- Git hooks are custom scripts that Git executes before or after events such as commits, pushes, merges, and more.  
- They automate tasks like code linting, tests, formatting, or validations.

---

## 2️⃣ Common Hook Types

- **Pre-commit:** Runs before a commit is created.  
- **Pre-push:** Runs before code is pushed to a remote.  
- Other hooks include `post-commit`, `post-merge`, `commit-msg`, etc.

---

## 3️⃣ Location of Hooks

- Hooks are stored in the `.git/hooks` directory of your repository.  
- By default, example hook scripts exist with `.sample` extension.

---

## 4️⃣ Creating a Pre-commit Hook

Create a file named `pre-commit` in `.git/hooks/`:

```bash
#!/bin/sh
# Run tests before committing
npm test || {
  echo "Tests failed, aborting commit."
  exit 1
}
```

Make it executable:

```bash
chmod +x .git/hooks/pre-commit
```

If the tests fail, the commit is aborted.

---

## 5️⃣ Creating a Pre-push Hook

Example script to check linting before pushing:

```bash
#!/bin/sh
# Run lint check before push
npm run lint || {
  echo "Lint errors found, aborting push."
  exit 1
}
```

Make executable:

```bash
chmod +x .git/hooks/pre-push
```

---

## 6️⃣ Managing Hooks with Tools

- Using tools like [Husky](https://typicode.github.io/husky/) helps manage Git hooks in JavaScript projects.  
- Husky allows hooks to be added in `package.json` and shared with team members.

---

## 🧾 Summary

Git hooks automate repetitive tasks and enforce code quality checks before critical Git operations, improving workflow efficiency and reducing errors.

---

## 📚 Resources for Further Learning

- [Git Hooks Documentation](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)  
- [Husky Git Hooks](https://typicode.github.io/husky/)  

---

## ⏭️ Next Topic

Further topics may include advanced Git workflows or integrations.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
