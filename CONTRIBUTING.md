<!--
  @author     Alex Kachur
  @since      2025-10-08
  @purpose    Contribution guidelines for the Portfolio repository
-->

# Contributing

Thanks for considering a contribution to **Portfolio**!

## Branching
- Use **GitHub Flow**: create a feature branch from `main`, open a PR, review, merge.
- Examples: `feat/about-page`, `fix/mobile-header`, `chore/ci-cache`

## Commit Messages (Conventional Commits)
- `feat:` new feature
- `fix:` bug fix
- `docs:`, `chore:`, `test:`, `refactor:`, `style:`, `build:`
- Example: `feat(about): add bio and skills section`

## Setup
```bash
npm ci
npm run dev
```

## Lint & Format
```bash
npm run lint
npm run format
```

## Pull Requests
- Fill in the PR template (What/Why/How to test/Screenshots).
- CI must be green (lint/test/build) before review.
- Link issues: `Closes #123`.
