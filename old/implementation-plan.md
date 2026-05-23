# Implementation Plan

## Goal
Rebuild the portfolio implementation on a cleaner foundation while preserving the validated v0 visual result as closely as possible.

This is not a redesign plan.
This is a structured implementation and refactoring plan.

---

## Main Strategy
The project will follow this rule:

**Preserve the visual shell, improve the internal structure.**

That means:
- keep the current validated style
- keep the page structure
- keep the component look and feel
- progressively improve code organization, data structure, and reusability underneath

---

## Development Priorities

1. Preserve the validated frontend style
2. Clean up implementation structure
3. Move content into structured local data
4. Make pages easier to maintain
5. Strengthen project -> competency -> proof relationships
6. Prepare the site for real BTS content integration

---

## Phase 1 — Project foundation
Objective: establish the technical base without changing the visual direction.

Tasks:
- set up the project structure
- establish routing/pages foundation
- define folder organization
- centralize global styling foundations
- identify reusable visual components from the current mockup
- preserve current visual rendering as baseline

Expected result:
- clean app structure
- same general UI direction
- no redesign

---

## Phase 2 — Design stabilization
Objective: convert the validated visual result into reusable design rules.

Tasks:
- centralize style tokens
- normalize spacing, borders, radius, typography usage
- extract reusable component patterns
- reduce scattered hardcoded style decisions
- preserve the current look

Expected result:
- same visual style
- more stable internal styling logic
- easier future adjustments

---

## Phase 3 — Component extraction
Objective: turn repeated UI patterns into reusable components.

Priority components:
- Navbar
- Footer
- SectionHeader
- ProjectCard / ProjectRow
- SkillBadge
- TechBadge
- EvidenceBlock
- CompetencyMatrix
- WatchCard
- ContactForm

Rules:
- extract only meaningful reusable components
- avoid premature over-abstraction
- preserve rendered output

Expected result:
- fewer repeated UI blocks
- cleaner pages
- easier updates without visual inconsistency

---

## Phase 4 — Structured content model
Objective: move away from hardcoded mock content.

Tasks:
- define structured local content for:
  - projects
  - competencies
  - proofs
  - watch entries
- make pages consume structured data instead of inline hardcoded content
- define relationships between project, competency, and proof

Expected result:
- one source of truth
- easier content maintenance
- easier future real content integration

---

## Phase 5 — Page implementation
Objective: connect the real pages to structured content.

Pages:
- Home
- Projects
- Project detail
- Competencies
- Watch
- Contact

Rules:
- preserve current page structure
- keep layout rhythm close to validated mockup
- improve maintainability, not appearance

Expected result:
- same UI direction
- real structured pages
- less hardcoded content

---

## Phase 6 — Competency and proof linkage
Objective: implement the core E5 logic clearly.

Tasks:
- ensure each project can expose worked competencies
- ensure proofs can be linked to one or more competencies
- ensure project detail pages can display proofs by competency
- ensure the competency matrix reflects project coverage
- ensure navigation between competencies and projects is understandable

Expected result:
- site becomes actually useful for oral presentation
- project -> competency -> proof relationship becomes explicit

---

## Phase 7 — Real content integration
Objective: replace placeholder content with real BTS portfolio data.

Tasks:
- integrate real project entries
- integrate real competency references
- integrate real proofs/assets
- integrate real technology watch entries
- adjust content density if needed

Expected result:
- functional portfolio based on real content
- coherent data model usage
- no visual breakage

---

## Phase 8 — Final polish
Objective: improve quality without redesigning.

Tasks:
- responsive adjustments
- visual consistency pass
- accessibility pass
- oral-presentation usability pass
- content proofreading
- final cleanup

Expected result:
- polished portfolio
- consistent and readable UI
- presentation-ready structure

---

## Explicit Rules During Implementation

### Allowed
- internal refactoring
- component extraction
- data structure cleanup
- style token centralization
- light polish
- better content organization

### Not allowed without explicit approval
- major visual redesign
- changing page hierarchy
- changing validated component style direction
- adding backend features
- introducing unnecessary libraries
- turning the project into a product platform

---

## Definition of Success
The implementation is successful if:

- the site still looks like the validated v0 mockup
- the internal codebase is cleaner
- content is structured
- components are reusable
- projects, competencies, and proofs are properly linked
- future additions become easier
- the site is useful during the BTS E5 oral presentation