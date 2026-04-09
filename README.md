# Job Application Tracker

## Project overview

**Job Application Tracker** is a lightweight, browser-based web app for browsing a job list and tracking each application’s status (not applied, interview, or rejected). Data lives in memory in a JavaScript array, so a full page refresh can reset the list. The UI uses **Tailwind CSS** and **DaisyUI** for a modern, responsive layout.

## Screenshot

![Job Application Tracker — dashboard](assets/Screenshot%202026-04-09%20220417.png)

The dashboard shows summary stats (Total, Interview, Rejected), filter tabs (All, Interview, Rejected), and job cards with company, role, location, type, salary, status badge, description, and actions (including delete).

## Tech stack

| Technology | Role |
|------------|------|
| **HTML5** | Structure and markup |
| **Vanilla JavaScript** | Data, filters, and DOM updates |
| **Tailwind CSS** (CDN) | Utility-first styling |
| **DaisyUI** (CDN) | UI components (e.g. `btn`) |
| **Google Fonts — Inter** | Typography |
| **CSS** | `style.css` (linked; add custom rules as needed) |

## Features

- **Dashboard stats:** Live counts for total jobs, interview stage, and rejected.
- **Tab filters:** **All** (every job), **Interview**, and **Rejected** views.
- **Job cards:** Company, position, location, employment type, salary, description, and a status badge.
- **Actions:** Move a job to **Interview** or **Rejected**, or **delete** a card.
- **Empty state:** Friendly message when a tab has no jobs.
- **Responsive layout:** Grid and spacing adapt for mobile and desktop.

## Dependencies and external resources

There is **no `package.json` / npm workflow**. Libraries load from CDNs in `index.html`:

| Resource | Purpose |
|----------|---------|
| [Tailwind CSS](https://cdn.tailwindcss.com) | CSS framework (CDN) |
| [DaisyUI](https://daisyui.com/) `full.min.css` | Component styles |
| [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | Font family |

Local files:

- `index.html` — Main page  
- `script.js` — Logic and sample data  
- `style.css` — Linked from HTML (create the file if missing to avoid a 404 in devtools)

## Running locally

### Option 1: Open the file directly

1. Clone or download the repository and open the project folder.  
2. Double-click `index.html` to open it in your default browser.

If CDN assets are blocked, use Option 2, 3, or 4.

### Option 2: VS Code Live Server

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.  
2. Right-click `index.html` → **Open with Live Server**.

### Option 3: Python HTTP server

From the project folder:

```bash
# Python 3
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

### Option 4: Node.js (`npx`)

```bash
npx --yes serve .
```

Use the URL printed in the terminal.

---

## Live demo and related links

| Item | Link |
|------|------|
| **Live demo** | _Add your deployed URL after publishing (e.g. Netlify, Vercel, GitHub Pages)_ |
| **Tailwind CSS** | https://tailwindcss.com |
| **DaisyUI** | https://daisyui.com |
| **Google Fonts** | https://fonts.google.com |

### Hosting quick notes

- **GitHub Pages:** Push the repo, then **Settings → Pages** and set the branch/folder (e.g. `main` / root).  
- **Netlify / Vercel:** Deploy as a static site via drag-and-drop or Git integration.

---

## Project structure

```
assignment-04/
├── index.html
├── script.js
├── style.css          ← optional; linked from HTML
├── assets/
│   ├── Screenshot 2026-04-09 220417.png
│   └── readme-preview.png   ← optional older preview asset
└── README.md
```

---

**Learning focus:** DOM manipulation, event handling (`onclick`), array filtering, and dynamic UI updates using **vanilla JavaScript** only.
