export interface Proof {
  id: string;
  title: string;
  type: "screenshot" | "pdf" | "documentation" | "schema" | "code";
  description: string;
}

export interface CompetencyProof {
  competencyId: string;
  proofs: Proof[];
}

export interface Project {
  id: string;
  title: string;
  category: "atelier" | "stage" | "personnel";
  year: string;
  period: string;
  summary: string;
  context: string;
  objective: string;
  technologies: string[];
  role: string;
  competencies: string[];
  competencyProofs: CompetencyProof[];
}

export interface Competency {
  id: string;
  code: string;
  name: string;
  description: string;
}

export interface WatchEntry {
  id: string;
  date: string;
  source: string;
  title: string;
  summary: string;
  tags: string[];
}

export interface StudentInfo {
  name: string;
  subtitle: string;
  intro: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
}
