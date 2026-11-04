# Netlify Deployment Guide for Diya Karki's Portfolio

This project is fully configured for deployment on [Netlify](https://www.netlify.com/).

## Configuration Files Added

1. **`netlify.toml`** (in the root directory):
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: `20`
   - **SPA Redirect Rule**: `/* -> /index.html 200`
   - **Security Headers**: Standard XSS, MIME sniffing, and frame protections.

2. **`public/_redirects`**:
   - Ensures client-side routing and page reloads work smoothly without 404 errors.

---

## How to Deploy to Netlify (Free)

### Option 1: Automatic Deployment with GitHub (Recommended)

1. **Push your code to GitHub**:
   - Create a repository on GitHub (e.g. `diya-karki-portfolio`).
   - Push this codebase to your repository.

2. **Connect to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com/) and sign in.
   - Click **"Add new site"** > **"Import an existing project"**.
   - Select **GitHub** and choose your repository.

3. **Deploy**:
   - Netlify will automatically detect the settings from `netlify.toml`:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click **"Deploy site"**.
   - Your site will be live at `https://your-site-name.netlify.app` within ~30 seconds!

---

### Option 2: Instant Manual Drag & Drop (Netlify Drop)

1. Build the production folder:
   ```bash
   npm run build
   ```
2. Navigate to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/` folder directly onto the page.
4. Netlify will publish your portfolio immediately!
