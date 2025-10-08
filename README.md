<!--
  @author Alex Kachur
  @since 2025-10-08
  @purpose Recruiter-ready README for the Portfolio repository
-->

# Portfolio

A clean, fast personal portfolio built with React + Vite.

![CI](https://github.com/AlexKachur98/Portfolio/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🔴 Live Demo
- Website: https://AlexKachur98.github.io/Portfolio
- Screenshot:
  ![Screenshot](public/screenshot.placeholder)

## ✨ Features
- Responsive layout (mobile → desktop)
- Project cards from JSON
- Contact form with basic validation
- Fast build with Vite + React 18
- CI pipeline (lint/test/build) using GitHub Actions

## 🧱 Tech Stack
React 18, Vite, (CSS Modules or Tailwind), ESLint/Prettier, GitHub Actions

## ▶️ Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 📁 Project Structure (where each file should go)

```
Portfolio/                         # repo root
  README.md                        # (this file)                 ← Portfolio/README.md
  LICENSE                          # license text                ← Portfolio/LICENSE
  .gitignore                       # git ignore rules            ← Portfolio/.gitignore
  .editorconfig                    # editor consistency          ← Portfolio/.editorconfig
  .prettierrc                      # prettier config (JSON)      ← Portfolio/.prettierrc
  .eslintrc.json                   # eslint config (JSON)        ← Portfolio/.eslintrc.json
  .nvmrc                           # optional node version       ← Portfolio/.nvmrc
  vite.config.js                   # Vite config                 ← Portfolio/vite.config.js
  public/
    og-image.png                   # social preview image        ← Portfolio/public/og-image.png
    screenshot.png                 # README screenshot           ← Portfolio/public/screenshot.png
  src/
    components/                    # reusable components
    pages/                         # Home/About/Projects/Contact
    hooks/                         # custom hooks
    styles/                        # global styles / Tailwind cfg
    assets/                        # images/icons
    App.jsx
    main.jsx
  .github/                         # GitHub configs
    workflows/ci.yml               # CI workflow                 ← Portfolio/.github/workflows/ci.yml
    ISSUE_TEMPLATE/
      bug_report.md                # bug template                ← Portfolio/.github/ISSUE_TEMPLATE/bug_report.md
      feature_request.md           # feature template            ← Portfolio/.github/ISSUE_TEMPLATE/feature_request.md
    PULL_REQUEST_TEMPLATE.md       # PR template                 ← Portfolio/.github/PULL_REQUEST_TEMPLATE.md
```

## 🧪 Scripts

- `dev` – run locally
- `build` – production build
- `preview` – preview dist build
- `lint` – lint all files
- `format` – format code

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## 🔒 Security

See [SECURITY.md](SECURITY.md). Please **do not** open public issues for security reports.

## 🆘 Support

See [SUPPORT.md](SUPPORT.md).

## 📜 License

This project is licensed under the MIT License — see [LICENSE](LICENSE).
