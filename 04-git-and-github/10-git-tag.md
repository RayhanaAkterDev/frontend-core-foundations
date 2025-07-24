# Git Tag (Version Marking)

> Tags: git, tag, versioning, release, version-control  
> **Purpose:** Explain how to create, manage, and use tags in Git to mark important commits like releases or milestones for easy reference.

---

## 1️⃣ What is a Git Tag?

- A **tag** is a reference to a specific commit, usually used to mark release points (e.g., v1.0, v2.1).  
- Tags are like bookmarks that help identify significant versions in your project’s history.

---

## 2️⃣ Types of Tags

- **Lightweight tags:** Simple pointers to a commit, no extra metadata.  
- **Annotated tags:** Full objects stored in Git database, including tagger name, email, date, and a message. Recommended for releases.

---

## 3️⃣ Creating Tags

- **Create a lightweight tag:**

  ```bash
  git tag <tagname>
  ```

- **Create an annotated tag:**

  ```bash
  git tag -a <tagname> -m "Release version 1.0"
  ```

---

## 4️⃣ Listing Tags

To list all tags in the repository:

```bash
git tag
```

---

## 5️⃣ Viewing Tag Details

To see details of an annotated tag:

```bash
git show <tagname>
```

---

## 6️⃣ Sharing Tags with Remote

Tags are **not** pushed by default when pushing branches. To push tags:

- Push a specific tag:

  ```bash
  git push origin <tagname>
  ```

- Push all tags:

  ```bash
  git push origin --tags
  ```

---

## 7️⃣ Checking Out Tags

You can checkout a tag to view the project at that point, but this puts you in a **detached HEAD** state (no branch):

```bash
git checkout <tagname>
```

To create a new branch from a tag:

```bash
git checkout -b <new-branch-name> <tagname>
```

---

## 🧾 Summary

Git tags are essential for marking important commits like releases or milestones.  
Annotated tags are preferred for release versions as they carry metadata and messages.  
Tags help teams and users quickly access specific project versions.

---

## 📚 Resources for Further Learning

- [Git Tag Documentation](https://git-scm.com/docs/git-tag)  
- Pro Git Book – Tagging Chapter  

---

## ⏭️ Next Topic

Learn about [Git Rebase (Clean History)](11-git-rebase.md)  
to rewrite commit history for a cleaner project timeline.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
