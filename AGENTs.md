# AGENTS.md

## Mission
You are working on a BTS SIO SLAM E5 portfolio website.

This project is a multi-page academic portfolio used as presentation support during the BTS oral exam.
Its purpose is to present projects, competencies, proofs, and technology watch in a clear and structured way.

The current validated v0 mockup is the visual reference for the project.
The goal is to improve the implementation and structure **without unnecessarily changing the validated visual direction**.

---

## Core Principles

### 1. Preserve the validated visual direction
The current v0 mockup is the reference for:
- overall visual style
- page structure
- layout rhythm
- cards and section hierarchy
- general developer-oriented black/white aesthetic

Do not redesign the UI unless explicitly asked.
Prefer internal refactoring over visible visual changes.

### 2. Refactor the foundation, preserve the form
The goal is to improve:
- maintainability
- data structure
- component reuse
- content organization
- consistency
- scalability for adding projects and proofs

without breaking:
- the page layout
- the visual style
- the current information architecture
- the oral-presentation usefulness of the site

### 3. Keep the project simple
This is a portfolio website, not a full product platform.

Do not introduce:
- backend
- database
- authentication
- admin dashboard
- CMS
- unnecessary animations
- unnecessary libraries
- overengineered abstractions

### 4. Prefer data-driven content
Content must progressively be moved out of hardcoded UI and into structured content sources.

Use structured local data for:
- projects
- competencies
- proofs
- watch entries
- site-level config if needed

### 5. Optimize for oral presentation
Every implementation decision should support one or more of these goals:
- quick navigation during oral presentation
- clear project display
- clear competency coverage
- easy access to proofs
- readable and sober academic portfolio experience

---

## Non-Negotiable Rules

### Minimal blast radius
- Change only what is necessary.
- Avoid unnecessary renames, moves, or rewrites.
- Do not perform unrelated refactors.

### No guessing
- Do not invent fields, routes, components, or data structures without checking the repo docs.
- If something is unclear, follow repository documentation first.
- If documentation is missing, make the smallest safe assumption and state it clearly.

### Preserve consistency
- Reuse existing components before creating new ones.
- Reuse existing tokens and styles before adding new ones.
- Keep naming and structure consistent with the repo.

### No visual drift
- Do not change spacing, card style, page rhythm, table structure, or typography direction unless explicitly asked.
- Any visible UI changes must be small, intentional, and consistent with the current validated mockup.

---

## Source of Truth
Use these docs as authoritative project context:
- `docs/decisions.md`
- `docs/design-system.md`
- `docs/implementation-plan.md`
- `docs/data-model.md` (when created)
- `docs/pages-and-routing.md` (when created)

If code and docs diverge, prefer the most recent intentional project direction, not theoretical improvements.

---

## Working Style

For non-trivial tasks:

1. PLAN
- briefly state what will be changed
- list files to touch
- mention assumptions if any

2. EXECUTE
- implement in small safe steps
- preserve visual output unless asked otherwise
- prioritize reusable and simple solutions

3. VERIFY
- validate visually and functionally
- if no automated tests exist, provide a manual validation checklist
- never claim something was tested if it was not tested

4. REPORT
Always provide:
- what changed
- files touched
- how to validate
- remaining limitations / TODOs

---

## Preferred Development Direction
Prefer:
- reusable components
- local structured data
- centralized styles/tokens
- multi-page architecture
- project detail pages
- competency-to-project-to-proof linkage
- progressive replacement of mock content by real content

Avoid:
- large rewrites
- cosmetic redesigns
- complex state logic
- hidden magic abstractions
- duplicated content in multiple places

---

## Project Mindset
This repository should evolve toward:

- same validated frontend style
- cleaner internal architecture
- structured local content
- easy future additions
- strong oral presentation support
- simple maintainable developer workflow