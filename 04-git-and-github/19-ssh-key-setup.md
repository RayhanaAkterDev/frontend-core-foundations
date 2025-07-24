# SSH Key Setup for GitHub

> Tags: github, ssh, authentication, security, git  
> **Purpose:** Learn how to generate and configure SSH keys to securely authenticate with GitHub without using passwords.

---

## 1️⃣ What is SSH Authentication?

- SSH (Secure Shell) keys provide a secure way to authenticate with GitHub without typing your username and password every time.  
- It uses a **public-private key pair**:  
  - **Private key:** Stays on your local machine and should be kept secret.  
  - **Public key:** Added to your GitHub account to grant access.

---

## 2️⃣ Generating an SSH Key

1. Open your terminal or Git Bash.  
2. Generate a new SSH key pair using your email as a label:  

   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```  

   - If `ed25519` is not supported, use:  

     ```bash
     ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
     ```  

3. When prompted, choose a file location or press Enter to accept the default.  
4. (Optional) Enter a passphrase for added security, or leave empty.

---

## 3️⃣ Adding the SSH Key to the ssh-agent

Start the ssh-agent in the background:

```bash
eval "$(ssh-agent -s)"
```

Add your SSH private key to the agent:

```bash
ssh-add ~/.ssh/id_ed25519
```

(Replace `id_ed25519` with your key filename if different.)

---

## 4️⃣ Adding the SSH Key to Your GitHub Account

1. Copy the contents of your public key to clipboard:

   - On Linux/macOS:

     ```bash
     cat ~/.ssh/id_ed25519.pub | pbcopy  # macOS
     cat ~/.ssh/id_ed25519.pub | xclip   # Linux with xclip installed
     ```

   - Or manually open and copy the file content:

     ```bash
     cat ~/.ssh/id_ed25519.pub
     ```

2. Go to GitHub:  
   - Navigate to **Settings > SSH and GPG keys**  
   - Click **New SSH key**  
   - Paste your key and give it a descriptive title  
   - Click **Add SSH key**

---

## 5️⃣ Testing Your SSH Connection

Test the connection with:

```bash
ssh -T git@github.com
```

You should see a success message confirming authentication.

---

## 🧾 Summary

Setting up SSH keys improves your GitHub workflow by securing authentication and removing the need to enter passwords repeatedly.  
This setup is essential for smooth and secure Git operations.

---

## 📚 Resources for Further Learning

- [GitHub SSH Key Setup Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)  
- [SSH-Keygen Manual](https://linux.die.net/man/1/ssh-keygen)  

---

## ⏭️ Next Topic

Next, learn about [GitHub Issues & Project Boards](20-github-issues-projects.md)  
to manage tasks and track bugs efficiently.

---

## 🔙 Navigation

- [← Back to Git & GitHub Topics](README.md)  
- [Git Command Cheat Sheet](cheat-sheet.md)
