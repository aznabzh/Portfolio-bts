import type { Competency, Project, Proof } from "@/lib/data";

export interface ProjectDetailSubCompetencyViewModel {
  id: string;
  code: string;
  name: string;
}

export interface ProjectDetailProofViewModel {
  id: string;
  title: string;
  type: Proof["type"];
  description: string;
  href?: string;
  thumbnail?: string;
}

export interface ProjectDetailProofGroupViewModel {
  competencyId: string;
  competencyCode: string;
  competencyName: string;
  subCompetencies: ProjectDetailSubCompetencyViewModel[];
  proofs: ProjectDetailProofViewModel[];
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
    proofGroups: project.competencies.flatMap((competencyId) => {
      const competency = competencyById.get(competencyId);

      if (!competency) {
        return [];
      }

      const groupProofs = project.proofs.filter(
        (proof) => proof.competencyId === competencyId,
      );

      if (groupProofs.length === 0) {
        return [];
      }

      const usedSubCompetencyIds = new Set(
        groupProofs.flatMap((proof) => proof.subCompetencyIds ?? []),
      );
      const subCompetencies = competency.subCompetencies.flatMap(
        (subCompetency): ProjectDetailSubCompetencyViewModel[] =>
          usedSubCompetencyIds.has(subCompetency.id)
            ? [
                {
                  id: subCompetency.id,
                  code: subCompetency.code,
                  name: subCompetency.name,
                },
              ]
            : [],
      );

      return [
        {
          competencyId,
          competencyCode: competency.code,
          competencyName: competency.name,
          subCompetencies,
          proofs: groupProofs.map((proof) => ({
            id: proof.id,
            title: proof.title,
            type: proof.type,
            description: proof.description,
            href: proof.url ?? proof.path,
            thumbnail: proof.thumbnail,
          })),
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
