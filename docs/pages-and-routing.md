---

## `docs/pages-and-routing.md`

```md
# Pages and Routing

## Purpose
This document defines the main pages of the portfolio and their responsibilities.

The goal is to keep page structure clear and avoid mixing too many responsibilities into a single page.

---

## Global Routing Direction
The site is multi-page.

Main routes should include:
- `/`
- `/projects`
- `/projects/[slug]`
- `/skills`
- `/watch`
- `/contact`

Exact implementation may depend on the framework, but this page structure is intentional.

---

## 1. Home Page

### Route
`/`

### Purpose
Introduce the portfolio clearly and provide quick access to the main sections.

### Main responsibilities
- introduce the student and the portfolio
- explain the context briefly
- provide entry points to projects, competencies, and watch
- establish the overall tone of the site

### Typical sections
- hero / intro
- short about section
- projects preview
- competencies preview
- watch preview

### Important rule
The home page should introduce the portfolio.
It should not try to contain the entire portfolio.

---

## 2. Projects Page

### Route
`/projects`

### Purpose
Present the list of projects in a clear and scannable way.

### Main responsibilities
- show project categories
- list all major projects
- provide easy access to project detail pages

### Structure direction
Projects should be grouped by category, such as:
- réalisations en formation
- réalisations en milieu professionnel
- projets personnels

### Important rule
The page should remain easy to scan quickly during oral presentation.

---

## 3. Project Detail Page

### Route
`/projects/[slug]`

### Purpose
Present one project in a structured and useful way.

### Main responsibilities
- explain the project
- show context and objective
- show the student's role
- show technologies used
- show competencies worked on
- show proofs associated with the project

### Critical rule
Proofs should be organized by competency whenever relevant.

This page is one of the most important pages of the site because it supports oral demonstration directly.

### Typical sections
- title / summary / metadata
- context
- objective
- role
- technologies
- competencies
- proofs by competency

---

## 4. Competencies Page

### Route
`/skills`

### Purpose
Provide a synthesis view of competency coverage.

### Main responsibilities
- show the competency matrix
- make the relationship between projects and competencies understandable
- help navigate from competency coverage to project proof

### Critical rule
The matrix must not be purely decorative.
It must support comprehension and possibly navigation.

### Typical sections
- page intro
- competency matrix
- competency legend or reference block

---

## 5. Technology Watch Page

### Route
`/watch`

### Purpose
Present technology watch work clearly and seriously.

### Main responsibilities
- list watch entries
- show dates, sources, and summaries
- make the watch feel organized and credible

### Important rule
The page should not feel like a blog or a news website.
It should remain concise and academic.

---

## 6. Contact Page

### Route
`/contact`

### Purpose
Provide a simple way to contact the student or access public links.

### Main responsibilities
- display a simple contact form or mailto-based form
- optionally display GitHub / LinkedIn links
- remain visually consistent with the site

### Important rule
This page must stay simple.
It is not a major product feature.

---

## Navigation Rules
Navigation should remain:
- simple
- clear
- stable across the site
- easy to use during oral presentation

Main navigation should expose:
- Home
- Projects
- Competencies
- Watch
- Contact

---

## Oral Presentation Navigation Logic
The site must support at least these scenarios:

### Scenario 1
Start from a project:
- open project list
- open project detail
- show competencies and proofs

### Scenario 2
Start from a competency:
- open competencies page
- identify a project linked to the competency
- move to the project detail page
- show proofs

### Scenario 3
Start from the home page:
- present the portfolio globally
- move into projects / competencies / watch

This oral navigation logic is one of the main reasons the site uses multiple pages.