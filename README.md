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
- Website: https://AlexKachur.dev
- Screenshot:
  ![Screenshot](public/screenshot.placeholder)

## ✨ Features
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
Portfolio/
  README.md
  LICENSE
  CODE_OF_CONDUCT.md
  CONTRIBUTING.md
  SECURITY.md
  SUPPORT.md
  package.json
  package-lock.json
  vite.config.js
  eslint.config.js
  index.html
  src/
    App.jsx
    MainRouter.jsx
    main.jsx
    index.css
    components/
      About.jsx
      Contact.jsx
      Education.jsx
      Home.jsx
      Layout.jsx
      Projects.jsx
      Services.jsx
  public/
    documents/
      resume.pdf
    images/
      headshot.webp
      project-exotics.webp
      project-hangman.webp
      project-srs.webp
  .github/
    dependabot.yml
    PULL_REQUEST_TEMPLATE.md
    ISSUE_TEMPLATE/
      bug_report.md
      feature_request.md
    workflows/
      ci.yml
      codeql.yml
  .editorconfig
  .eslintrc.json
  .gitignore
  .prettierrc
  dist/                      # build output (generated)
  node_modules/              # installed dependencies
  untitled folder/           # currently empty
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
