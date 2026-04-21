import type { Competency, Project, Proof } from "@/lib/data";

export interface ProjectDetailProofGroupViewModel {
  competencyId: string;
  competencyCode: string;
  competencyName: string;
  proofs: Proof[];
}

export interface ProjectDetailCompetencyViewModel {
  id: string;
  code: string;
  name: string;
}

export interface ProjectDetailViewModel {
  proofGroups: ProjectDetailProofGroupViewModel[];
  competencies: ProjectDetailCompetencyViewModel[];
}

export function getProjectDetailViewModel(
  project: Project,
  competencies: Competency[],
): ProjectDetailViewModel {
  const competencyById = new Map(
    competencies.map((competency) => [competency.id, competency]),
  );

  return {
    proofGroups: project.competencyProofs.flatMap((competencyProof) => {
      const competency = competencyById.get(competencyProof.competencyId);

      if (!competency) {
        return [];
      }

      return [
        {
          competencyId: competencyProof.competencyId,
          competencyCode: competency.code,
          competencyName: competency.name,
          proofs: competencyProof.proofs,
        },
      ];
    }),
    competencies: project.competencies.flatMap((competencyId) => {
      const competency = competencyById.get(competencyId);

      if (!competency) {
        return [];
      }

      return [
        {
          id: competencyId,
          code: competency.code,
          name: competency.name,
        },
      ];
    }),
  };
}
