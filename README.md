# DARKWIZ CT — Construction Toolkit

Estimating, project control and procurement for construction: dashboard, PERT/CPM and Gantt, BOQ/BOM, billing, plan vs actual, material/labour/equipment database, procurement, quick tools with Excel/PDF quotations.

This folder is a complete static website. Host it on GitHub Pages, point your subdomain at it, and connect a free Firebase database so your data is saved online and shared across your devices.

Without Firebase set up, the app still opens and works, but data is saved only in the browser you are using.

---

## 1. Create the database (Firebase, free plan) — about 10 minutes

1. Go to <https://console.firebase.google.com> → **Add project** → name it `darkwiz-ct` → you can turn Google Analytics off → **Create**.
2. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable → Save.**
3. **Authentication → Users → Add user**: enter your email and a password. This is your login. Add one user per teammate.
4. *(Recommended)* **Authentication → Settings → User actions**: untick **Enable create (sign-up)**, so only people you add can have accounts.
5. **Build → Firestore Database → Create database** → choose **Production mode** → location **asia-southeast1 (Singapore)** → **Enable**.
6. **Firestore Database → Rules**: delete what is there, paste the contents of `firestore.rules`, replace `you@example.com` with your login email (add teammates on the next lines), then **Publish**.
7. **Project settings (gear icon) → General → Your apps → Web (`</>`)** → nickname `DARKWIZ CT` → **Register app** (skip Firebase Hosting). Copy the values from the `firebaseConfig` block into `firebase-config.js` in this folder, replacing each `PASTE_…` value.
8. **Authentication → Settings → Authorized domains → Add domain**: add your subdomain (for example `ct.darkwizlab.com`) and `YOUR-GITHUB-USERNAME.github.io`.

## 2. Publish on GitHub Pages

1. On GitHub, create a new repository, for example `darkwiz-ct`. Free GitHub Pages needs a **public** repository. Your data is not in the repository; it lives in Firebase behind your login.
2. **Add file → Upload files**: upload everything in this folder, keeping the `icons` folder. Include the hidden `.nojekyll` file. Commit.
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.**
4. After a minute the site is live at `https://YOUR-GITHUB-USERNAME.github.io/darkwiz-ct/`.

## 3. Use your subdomain

1. **GitHub → Settings → Pages → Custom domain**: type your subdomain (for example `ct.darkwizlab.com`) → **Save**. GitHub creates a `CNAME` file in the repo.
2. **At your DNS provider (IONOS → Domains & SSL → your domain → DNS → Add record):**
   - Type: `CNAME`
   - Host name: `ct` (the part before your domain)
   - Points to: `YOUR-GITHUB-USERNAME.github.io`
3. Wait for DNS to update (usually minutes, up to a few hours), then tick **Enforce HTTPS** in GitHub Pages settings.
4. Make sure the subdomain is in Firebase **Authorized domains** (step 1.8), or login will be refused.

## 4. Move your existing data

1. Open the Claude-hosted copy → **Settings → Data & backup → Export backup (.json)**.
2. Open your new site, log in → **Settings → Data & backup → Import backup…** → pick the file. Backups from the older DARKWIZ QS name import too.

Projects, sheets, the price database, suppliers, orders, calendar, quotations, your notes and to-dos all come across.

## 5. Install on your phone

- **Android (Chrome):** open the site → menu (⋮) → **Install app** / **Add to Home screen**.
- **iPhone (Safari):** open the site → Share → **Add to Home Screen**.

The app opens full-screen, and recently viewed data stays readable without a signal. Changes made offline sync when you reconnect.

## Updating the app

Replace `index.html` in the repository with the new version and commit. Leave `firebase-config.js` as it is. Phones pick up the new version the next time the app is opened online.

## Notes

- **Free plan limits:** Firebase's free Spark plan allows 1 GiB of stored data, 50,000 reads and 20,000 writes per day. That is plenty for one company's projects.
- **Login and passwords:** usernames are emails. **Reset username / password** on the login screen emails a reset link. You can also add, disable or delete users under Authentication → Users.
- **Contract files:** the GitHub version stores a link to each contract file (for example Google Drive or OneDrive) instead of uploading it, because Firebase file storage needs a paid plan.
- **Excel and PDF exports** load their libraries from cdnjs the first time you export, so they need internet once. After that they are cached.
