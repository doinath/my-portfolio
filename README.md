# Nathanael Jedd Portfolio

A responsive single-page developer portfolio for **Nathanael Jedd N. del Castillo**. The site highlights selected projects, technical skills, education, and contact links in a dark, section-based interface.

## Overview

This portfolio is built as a React + TypeScript application with Vite. Most of the portfolio content is data-driven from `src/data/info.ts`, making it straightforward to update profile details, projects, skills, education, and values without rewriting the section components.

## Features

- Full-screen portfolio sections for home, projects, tech stack, and about
- Floating sidebar navigation with active-section tracking
- Smooth in-page scrolling between sections
- Project filtering between all projects and featured work
- Reusable section components for profile, calls to action, projects, stack, and about content
- Centralized portfolio data in `src/data/info.ts`
- Dark visual design using Tailwind CSS utilities and custom global CSS

## Tech Stack

- **React 19** for the component-based UI
- **TypeScript** for typed data models and safer component contracts
- **Vite 8** for local development, bundling, and preview builds
- **Tailwind CSS 4** through the Vite plugin
- **Lucide React** for interface icons
- **ESLint** for code quality checks

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite will print a local development URL, usually `http://localhost:5173`.

### Production Build

```bash
npm run build
```

The production output is generated in `dist/`.

### Preview Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   └── section/
│   │       ├── About.tsx
│   │       ├── CTAButtons.tsx
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── ProfileCard.tsx
│   │       ├── Projects.tsx
│   │       ├── SidebarNav.tsx
│   │       └── Stack.tsx
│   ├── data/
│   │   └── info.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Updating Content

Edit `src/data/info.ts` to update the portfolio content:

- `profileInfo` controls the name, roles, location, avatar, email, and social links.
- `projects` controls the project cards, tags, repository links, and featured filtering.
- `skills` controls the stack section and skill categories.
- `education` controls academic background.
- `values` controls the about-section value cards.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build the production site |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint against the project |

## Portfolio Sections

- **Home**: Introductory hero section and primary calls to action
- **Projects**: Selected work with tags, repository links, and featured filtering
- **Stack**: Technical skills grouped by category
- **About**: Education, values, and contact information

