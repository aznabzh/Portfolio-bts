# Architecture

## Global Architecture
This project is a multi-page portfolio website.

It is designed as a primarily static, content-driven website with reusable UI components and structured local content.

The architecture must support:
- clean page separation
- reusable components
- structured data
- easy future content additions
- clear project -> competency -> proof linkage

---

## Architectural Philosophy
The project follows these principles:

- preserve the validated visual shell
- improve internal maintainability
- avoid unnecessary complexity
- keep content structured
- avoid duplication
- favor clarity over abstraction

This is not a full application platform.
It is a portfolio website optimized for oral presentation.

---

## Main Layers

### 1. Visual layer
This includes:
- layout
- page structure
- cards
- typography
- spacing
- table/matrix rendering
- buttons, badges, and other UI elements

The current v0 mockup is the reference for this layer.

### 2. Component layer
This includes reusable building blocks such as:
- navigation
- footer
- section headers
- project cards
- matrix/table component
- evidence blocks
- watch cards
- contact form

### 3. Content layer
This includes structured local content such as:
- projects
- competencies
- proofs
- watch entries
- site-level metadata if needed

### 4. Page layer
This includes the site pages:
- Home
- Projects
- Project detail
- Competencies
- Watch
- Contact

Pages should mainly assemble content and reusable components.

---

## Folder Philosophy
The repository should be organized in a way that separates:
- pages
- components
- structured content
- docs
- static assets

A likely high-level structure could look like:

```text
src/
  components/
  pages/
  data/ or content/
  styles/
public/
docs/