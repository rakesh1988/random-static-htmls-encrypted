# Encrypted Markdown Q&A Notes for GitHub Pages

A mobile-friendly, secure static site built with **Astro** and **StatiCrypt**. It compiles Markdown (`.md`) notes into responsive HTML pages and encrypts them using client-side **AES-256-GCM** encryption before deploying to **GitHub Pages**.

---

## 🚀 Quick Start Guide

### 1. Adding New Markdown (.md) Files
Simply add your Markdown files into the `src/content/notes/` directory.

Example structure:
```markdown
---
title: "Unit 1: Fundamentals Q&A Notes"
description: "Core questions and answers covering Semester 2 foundational concepts."
subject: "Computer Architecture"
date: "2026-09-13"
tags: ["Unit-1", "Architecture", "Exams"]
---

# Your Markdown Content Here...
```

---

### 2. Local Development & Testing

- **Edit raw notes with live preview:**
  ```bash
  npm run dev
  ```

- **Build & encrypt locally:**
  ```bash
  STATICRYPT_PASSWORD="your_password" npm run build
  ```

---

## 🔐 GitHub Pages & Encryption Setup

1. **Set GitHub Repository Secret**:
   - Go to your GitHub repository -> **Settings** -> **Secrets and variables** -> **Actions**.
   - Click **New repository secret**.
   - **Name**: `STATICRYPT_PASSWORD`
   - **Value**: `YourChosenPassword`

2. **Enable GitHub Pages**:
   - Go to **Settings** -> **Pages**.
   - Under **Source**, select **GitHub Actions**.

3. **Deploy**:
   - Every `git push` to `main` will automatically build the Markdown files, encrypt all generated HTML files using `STATICRYPT_PASSWORD`, and deploy to GitHub Pages!

---

## 📱 Mobile Compatibility & Features
- **Responsive Password Prompt**: Optimized layout for smartphones, tablets, and laptops.
- **Session Persistence**: Includes a 30-day "Remember Me" option so you don't have to re-enter your password every time on mobile browsers.
- **Client-side Decryption**: Uses standard WebCrypto API for secure, instant client-side decryption.
