# GitHub Pages — one-time setup

This project now builds the **actual Next.js interface** before publishing it.

1. Upload/push the contents of this folder to the repository root.
2. In GitHub open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy Living Record to GitHub Pages** to finish, or run it manually with **Run workflow**.
5. Visit your Pages URL. For a repository named `Hope`, it will normally be:
   `https://YOUR-USERNAME.github.io/Hope/`

Do not use **Deploy from a branch** for this Next.js source repository; that is what caused GitHub Pages to render repository documentation instead of the application.
