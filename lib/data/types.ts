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
  evidenceType?: "capture";
  proofStatus?: "à créer" | "à récupérer" | "à vérifier" | "candidat";
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

export interface CompetencyNote {
  implementation: string;
  interest: string;
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
  competencyNotes?: Record<string, CompetencyNote>;
  proofs: Proof[];
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  previewVariant?: "api" | "web" | "desktop" | "mobile" | "portfolio" | "stage";
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
  image?: string;
  imageAlt?: string;
  url?: string;
  featured?: boolean;
  previewVariant?: "article" | "docs" | "css" | "ai" | "framework" | "typescript";
}

export interface WatchSourceLink {
  label: string;
  href: string;
}

export interface WatchTopic {
  id: string;
  badge: string;
  title: string;
  subject: string;
  goal: string;
  explanation: string;
  collectionTools: string[];
  storage: string[];
  monitored: string[];
  retained: string[];
  projectLink: string;
  skills: string[];
  sources: WatchSourceLink[];
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
