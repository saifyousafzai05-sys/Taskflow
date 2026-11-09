# TaskFlow — Live Order Status Board (Task 1)

A responsive React landing page for TaskFlow Software's restaurant order tracking product.

## Task 1 scope

- Vite + React project bootstrap
- Landing page with product title, tagline, and call to action
- Responsive desktop, tablet, and mobile layout
- Component-based structure
- GitHub Pages deployment workflow

## Tech stack

- React 18
- Vite 6
- Lucide React icons
- Plain CSS

## Run locally

Install Node.js 20 or newer, then:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to GitHub Pages

1. Create a GitHub repository (for example, `taskflow-order-board`).
2. Push this project to the repository's `main` branch.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for the `Deploy TaskFlow to GitHub Pages` workflow to finish.
6. Open the Pages URL shown in the workflow deployment.

Every push to `main` triggers a new build and deployment.

## Project structure

```text
TaskFlow_Task1_Pro/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## UX/UI decisions

- Clear headline and primary action appear immediately above the fold.
- A realistic order-board preview explains the product without requiring a login.
- Status labels use both text and color, not color alone.
- The preview filters are interactive sample UI; they demonstrate the future board, not a live backend.
- Responsive navigation and stacked mobile layout support smaller screens.
- Consistent spacing, typography, contrast, and restrained accent colors keep the page readable.

## Task 1 submission note

Task 1 delivers the static landing page and project setup. The sample order data is illustrative only. Backend APIs, database, authentication, real-time Socket.io updates, customer tracking, load testing, and uptime monitoring belong to later tasks and are not claimed as completed here.
