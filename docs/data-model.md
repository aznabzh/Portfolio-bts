---

## `docs/data-model.md`

```md
# Data Model

## Purpose
This document defines the core content entities of the portfolio.

The goal is to structure content in a way that:
- avoids duplication
- supports maintainability
- supports project -> competency -> proof linkage
- makes future additions easier

---

## Main Entities
The main entities are:
- Project
- Skill
- Evidence
- WatchEntry

Optional later:
- SiteConfig
- ContactLinks
- ProjectCategory definitions

---

## 1. Project

### Purpose
Represents a project or realization shown in the portfolio.

### Required fields
- `id`
- `slug`
- `title`
- `category`
- `period`
- `summary`
- `context`
- `objective`
- `role`
- `technologies`
- `skills`
- `evidences`

### Suggested optional fields
- `year`
- `githubUrl`
- `demoUrl`
- `coverImage`
- `status`
- `highlights`

### Notes
- `skills` should reference central skill IDs, not free text when possible.
- `evidences` should be structured objects, not loose text blobs.

### Example shape
```json
{
  "id": "api-rest",
  "slug": "api-rest",
  "title": "API REST",
  "category": "formation-year-2",
  "period": "2025",
  "summary": "Création d'une API REST pour gérer des données métier.",
  "context": "Projet réalisé en atelier professionnel.",
  "objective": "Mettre en place une API claire, documentée et exploitable.",
  "role": "Conception, développement backend, tests et documentation.",
  "technologies": ["Node.js", "Express", "Postman"],
  "skills": ["b1.2", "b1.4", "b2.1"],
  "evidences": [
    {
      "id": "postman-tests",
      "title": "Captures de tests Postman",
      "type": "image",
      "path": "/evidences/api-rest/postman-tests.png",
      "skills": ["b2.1"]
    }
  ]
}

2. Skill
Purpose
Represents a BTS competency or sub-competency.
Required fields
id
label
shortLabel
Suggested optional fields
block
description
order
Notes
Skills should be centralized.
Projects should reference skills by ID.
Matrix rendering should rely on these IDs.
Example shape
JSON
{
  "id": "b1.4",
  "label": "Travailler en mode projet",
  "shortLabel": "Mode projet",
  "block": "B1",
  "description": "Organisation, planification et suivi du travail."
}
3. Evidence
Purpose
Represents a proof associated with a project and one or more competencies.
Required fields
id
title
type
path
skills
Suggested optional fields
description
label
thumbnail
externalUrl
Evidence types
Examples:
image
pdf
document
code
diagram
link
Notes
Every evidence should belong to a project.
Every evidence should support one or more skill IDs when relevant.
The same evidence may support multiple competencies.
Example shape
JSON
{
  "id": "uml-diagram",
  "title": "Diagramme UML",
  "type": "pdf",
  "path": "/evidences/project-x/uml.pdf",
  "skills": ["b1.4", "b2.1"],
  "description": "Diagramme utilisé pour la phase de conception."
}
4. WatchEntry
Purpose
Represents a technology watch item or topic.
Required fields
id
title
date
source
summary
tags
Suggested optional fields
url
topic
notes
Example shape
JSON
{
  "id": "ai-agents-01",
  "title": "Évolution des agents IA dans le développement",
  "date": "2026-04-10",
  "source": "Article web",
  "summary": "Présentation de nouvelles approches d'agents IA pour assister le développement.",
  "tags": ["IA", "Agents", "Développement"]
}
Relationships
Project -> Skill
A project can reference multiple skills.
Project -> Evidence
A project contains multiple evidences.
Evidence -> Skill
An evidence can support one or more skills.
Skill -> Project
A skill may appear in multiple projects.
WatchEntry
Independent from project/skill model for now.
Key Modeling Rule
Do not model only:
project -> skills
Also model:
project -> evidences
evidence -> skills
This is required to support oral presentation needs.
The site must be able to answer:
which competency was worked on
in which project
with which proof
Content Rules
avoid free-text duplication of competency labels inside projects
prefer skill IDs
keep summaries concise
keep evidence titles explicit
keep categories consistent
avoid mixing multiple meanings in one field
Category Direction
Possible categories include:
formation-year-1
formation-year-2
internship
personal
Exact labels may evolve, but category usage must remain consistent across pages.
Future Stability Rule
The data model should remain simple. Do not add fields without clear use in:
page rendering
oral presentation usefulness
maintainability