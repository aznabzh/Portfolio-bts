# Design System

## Purpose
This document defines the visual rules that must preserve the validated v0 mockup style while making future implementation more consistent.

The goal is not to redesign the UI.
The goal is to preserve and stabilize its visual language.

---

## Global Visual Direction

### Target feel
The interface should feel:
- clean
- modern
- structured
- sober
- developer-oriented
- readable
- elegant without being flashy
- academic but not boring

### Style references
The UI should feel closer to:
- modern developer portfolio
- clean product interface
- GitHub-like black/white UI
- structured documentation / dashboard-like clarity

It should not feel like:
- startup landing page
- editorial magazine
- luxury minimalism
- glassmorphism-heavy showcase
- overdesigned portfolio template

---

## Color Philosophy

### General direction
- Light theme
- Strong use of white / off-white / near-black / gray
- High readability
- One accent color maximum if needed
- Accent color must remain subtle and functional

### Color roles
Define and centralize at implementation level:
- background
- surface
- muted surface
- border
- text primary
- text secondary
- accent
- accent foreground
- success / warning / destructive only if really needed

### Rules
- No random hardcoded colors in components
- Prefer semantic tokens over raw values
- Do not use multiple unrelated accent colors
- Do not rely only on color to communicate meaning

---

## Typography

### Direction
- Sans-serif only
- Clear hierarchy
- Stronger headings
- Compact readable paragraphs
- Good distinction between:
  - labels
  - titles
  - metadata
  - body text
  - small helper text

### Rules
- No serif editorial typography
- No ultra-thin low-contrast text
- No oversized dramatic typography
- Keep type scale controlled and reusable

---

## Spacing and Layout

### Direction
- Spacious but not empty
- Compact enough to feel efficient
- Strong alignment
- Good rhythm between sections
- Consistent content width

### Rules
- Avoid giant vertical gaps
- Avoid oversized section padding
- Keep card padding consistent
- Keep rhythm predictable across pages
- Use a consistent max-width container system

---

## Borders, Radius, Shadows

### Direction
- Subtle borders are important
- Radius should be modern but controlled
- Shadows should remain minimal

### Rules
- Prefer borders and contrast over heavy shadows
- Use a small number of radius values
- Use shadows only when they improve hierarchy
- UI should remain crisp, not soft or fluffy

---

## Component Style Guidelines

### Cards
Cards should feel:
- clean
- informative
- structured
- slightly technical
- easy to scan

Cards must not feel:
- decorative
- oversized
- empty
- overly rounded
- luxury minimal

### Buttons
Buttons should feel:
- modern
- compact
- clear
- intentional

Buttons should not feel:
- flashy
- oversized
- marketing-driven

### Badges / tags
Badges should be:
- compact
- readable
- consistent
- visually useful

Different kinds of badges should be visually distinguishable when useful:
- technologies
- competencies
- categories
- metadata

### Matrix / table
The competency matrix is a key component.

It should feel:
- clear
- structured
- readable
- slightly technical
- synthesis-oriented

It must not feel like:
- raw spreadsheet export
- admin dashboard table
- decorative grid

### Evidence blocks
Proof/evidence sections should feel:
- useful
- structured
- easy to scan during oral presentation
- clearly tied to competencies

---

## Page-Specific Visual Intent

### Home
- strong but sober intro
- quick understanding of who the student is
- clean previews of key sections
- no oversized empty hero

### Projects page
- scannable project list
- strong metadata hierarchy
- clean categories
- balanced information density

### Project detail page
- must feel like a serious support page for oral presentation
- strong section grouping
- clear distinction between context, role, technologies, competencies, and proofs

### Competencies page
- matrix must feel central and reliable
- strong row/column readability
- categories must be visually distinct
- page must feel functional first, decorative second

### Watch page
- clean reading rhythm
- concise cards/rows
- metadata and tags should be immediately visible

### Contact page
- simple
- integrated with the same design language
- no special decorative treatment

---

## Visual Stability Rule
The validated v0 mockup is the reference.
Any future change must respect:
- same overall page hierarchy
- same design language
- same modern black/white developer aesthetic
- same restrained visual tone

Small polish changes are allowed.
Visual drift is not allowed unless explicitly requested.