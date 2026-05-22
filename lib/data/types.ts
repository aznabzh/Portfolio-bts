export interface SubCompetency {
  id: string;
  code: string;
  name: string;
  description: string;
}

export interface ProofImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  thumbnail?: string;
}

export interface Proof {
  id: string;
  title: string;
  type: "screenshot";
  description: string;
  competencyId: string;
  subCompetencyIds?: string[];
  path?: string;
  url?: string;
  thumbnail?: string;
  images?: ProofImage[];
}

export interface CompetencyProof {
  competencyId: string;
  subCompetencyIds?: string[];
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
  proofs: Proof[];
}

export interface Competency {
  id: string;
  code: string;
  name: string;
  description: string;
  subCompetencies: SubCompetency[];
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
