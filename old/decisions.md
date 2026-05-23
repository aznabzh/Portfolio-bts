# Decisions

## Intentional Decisions

### Project nature
- This project is a BTS SIO SLAM E5 portfolio website.
- It is used as a support during the BTS oral exam.
- It is exclusively dedicated to the BTS portfolio.

### Product scope
The website must present:
- projects completed during the BTS
- competencies worked on through those projects
- proofs associated with projects and competencies
- technology watch
- a simple contact page

### Site architecture
- The site is multi-page, not a one-page anchor-based site.
- Main pages:
  - Home
  - Projects
  - Project detail
  - Competencies
  - Technology watch
  - Contact

### Technical philosophy
- The site must remain primarily static.
- No backend.
- No database.
- No authentication.
- No admin dashboard.
- No CMS.
- No unnecessary client-side complexity.

### Content philosophy
- The site must progressively become data-driven.
- Content should not stay hardcoded inside UI components.
- Projects, competencies, proofs, and watch entries should be stored in structured local content.

### Visual reference
- The current validated v0 mockup is the visual reference for the project.
- Its overall page structure, aesthetic direction, layout rhythm, and component style must be preserved unless explicitly changed.
- Future development must prioritize technical cleanup under the same visual shell.

### Visual direction
The target visual style is:
- modern
- sober
- clean
- slightly developer-oriented
- black/white / GitHub-like
- readable
- elegant but not flashy
- minimalist but not empty

The project must avoid:
- startup landing page aesthetics
- luxury/editorial aesthetics
- overly colorful UI
- overanimation
- excessive empty space
- generic portfolio clichés

### Competency model
- The competencies page is a central page of the portfolio.
- It must include a project-to-competency matrix.
- The matrix is not decorative only: it must support navigation or understanding of the link between projects, competencies, and proofs.

### Proof model
- A project can have multiple proofs.
- A proof can support one or more competencies.
- Proofs must be shown in a structured and useful way during oral presentation.
- Project detail pages should organize proofs by competency whenever relevant.

### Development philosophy
- Refactor the foundation, preserve the form.
- The implementation should improve maintainability and content structure without breaking the validated visual direction.
- Internal cleanup is preferred over visual redesign.

---

## Current Direction (Not Frozen)
These points may evolve if needed, but currently represent the intended direction:

- local content may be stored in JSON, Markdown, MDX, or typed local objects
- the competency matrix may support click-based navigation later
- a subtle accent color may be added if it improves polish without breaking sobriety
- small UX refinements are allowed if they do not alter the core style

---

## Explicit Non-Goals
The following are intentionally out of scope:

- backend features
- auth flows
- content dashboard
- blog engine
- advanced search engine
- complex animation system
- full CMS integration
- unnecessary product-style features unrelated to the E5 oral exam