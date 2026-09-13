# Encrypted Markdown Q&A Notes (Free GitHub Pages Setup)

This project compiles Markdown (`.md`) study notes into static HTML pages, encrypts them client-side with **StatiCrypt (AES-256-GCM)**, and publishes **ONLY the encrypted HTML files** to GitHub Pages.

---

## 🔒 How Confidentiality Works (Zero Unencrypted Source on GitHub)

- **Raw `.md` files**: Kept ONLY on your local machine (`src/content/notes/`). They are in `.gitignore` and **never** pushed to GitHub.
- **Encrypted Output**: When you deploy, local scripts compile and encrypt the site into `dist/`, then publish only the encrypted HTML files to the `gh-pages` branch.
- **GitHub Pages**: Hosts the public website for FREE while ensuring 100% of the pages require a password to view.

---

## 🚀 How to Add Notes & Deploy

### 1. Add your `.md` files locally
Place your Markdown notes in `src/content/notes/` (e.g. `src/content/notes/unit-3-qna.md`).

### 2. Set your password in `.env`
Ensure `.env` contains your chosen encryption password:
```env
STATICRYPT_PASSWORD=your_secret_password
```

### 3. Deploy to GitHub Pages with 1 Command
Run the following command in your terminal:
```bash
npm run deploy
```

That's it! It automatically builds your notes, encrypts all HTML pages, and publishes them to GitHub Pages.

---

## ⚙️ One-Time GitHub Setup (Settings > Pages)
1. Go to [Repository Pages Settings](https://github.com/rakesh1988/random-static-htmls-encrypted/settings/pages).
2. Under **Build and deployment > Source**, select **Deploy from a branch**.
3. Under **Branch**, select `gh-pages` and `/ (root)`.
4. Click **Save**.
