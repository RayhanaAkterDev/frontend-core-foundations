# Install & Configure Git

> Tags: git, installation, configuration, version-control, setup  
> **Purpose:** Guide users through installing Git on major operating systems and configuring essential user settings to start version control smoothly.

---

## 1️⃣ Installing Git

- **Windows:** Download the installer from [git-scm.com](https://git-scm.com/download/win) and run the setup wizard.  
- **macOS:** Use Homebrew (`brew install git`) or download the official installer.  
- **Linux:** Use your distribution’s package manager, e.g.:  
  - Debian/Ubuntu: `sudo apt-get install git`  
  - Fedora: `sudo dnf install git`  
  - Arch: `sudo pacman -S git`

---

## 2️⃣ Verifying Installation

Run the following command to check if Git is installed:

```bash
git --version
```

It should display the installed Git version.

---

## 3️⃣ Configuring User Identity

Set your name and email (used in commit metadata):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## 4️⃣ Additional Useful Settings

Set default editor (example with VS Code):

```bash
git config --global core.editor "code --wait"
```

Enable colorized output and create shortcuts:

```base
git config --global color.ui auto
git config --global alias.st status
```

---

## 🧾 Summary

Installing Git and configuring your user identity are critical first steps to begin effective version control.  
These settings help Git track your work and allow collaboration with others.

---

## 📚 Resources for Further Learning

- Official Git Documentation  
- GitHub Docs: Setting Up Git  
- Pro Git Book (free)  

---

## ⏭️ Next Topic

Next, learn [Basic Git Commands (init, add, commit)](03-basic-commands.md)  
to start creating repositories and making commits with Git.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)
- [Git Command Cheat Sheet](cheat-sheet.md)
