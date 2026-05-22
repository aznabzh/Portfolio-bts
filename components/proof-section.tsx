'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ExternalLink, File, FileCode, FileText, Image, Code } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getProofTypeLabel, type Proof } from '@/lib/data'
import type { ProjectDetailProofGroupViewModel, ProjectDetailProofViewModel } from '@/lib/view-models/project-detail'
import { ProofLightbox } from './proof-lightbox'

interface ProofSectionProps {
  proofGroups: ProjectDetailProofGroupViewModel[]
}

function ProofRowIcon({ type }: { type: Proof['type'] }) {
  const className = 'h-4 w-4'
  switch (type) {
    case 'screenshot':
      return <Image className={className} />
    case 'pdf':
      return <FileText className={className} />
    case 'documentation':
      return <File className={className} />
    case 'schema':
      return <FileCode className={className} />
    case 'code':
      return <Code className={className} />
    default:
      return <File className={className} />
  }
}

function ProofRow({
  proof,
  onLightboxOpen,
}: {
  proof: ProjectDetailProofViewModel
  onLightboxOpen?: () => void
}) {
  const hasFile = !!proof.href
  const isViewable = hasFile && (proof.type === 'screenshot' || proof.type === 'schema')
  const isMissing = !hasFile

  return (
    <div
      className={cn(
        'flex items-start gap-4 px-5 py-4 transition-colors',
        isViewable && 'cursor-pointer hover:bg-secondary/30',
        hasFile && !isViewable && 'hover:bg-secondary/30',
        isMissing && 'bg-secondary/30',
      )}
      onClick={() => {
        if (isViewable && onLightboxOpen) onLightboxOpen()
      }}
      role={isViewable ? 'button' : undefined}
      tabIndex={isViewable ? 0 : undefined}
      onKeyDown={(e) => {
        if (isViewable && onLightboxOpen && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onLightboxOpen()
        }
      }}
    >
      <div
        className={cn(
          'icon-tile h-9 w-9',
          isMissing
            ? 'text-muted-foreground/40 border-dashed border-muted-foreground/30'
            : 'text-muted-foreground',
        )}
      >
        <ProofRowIcon type={proof.type} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <p
            className={cn(
              'text-[13px] font-medium',
              isMissing && 'text-muted-foreground/60',
            )}
          >
            {proof.title}
          </p>
          {isViewable && (
            <span className="shrink-0 inline-flex items-center gap-1 text-[11px] text-muted-foreground group-hover:text-foreground">
              Agrandir
              <ExternalLink className="h-3 w-3" />
            </span>
          )}
          {hasFile && !isViewable && (
            <Link
              href={proof.href!}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Ouvrir
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          )}
          {isMissing && (
            <span className="shrink-0 inline-flex items-center rounded border border-dashed border-muted-foreground/25 px-1.5 py-0.5 text-[10px] text-muted-foreground/50">
              À ajouter
            </span>
          )}
        </div>
        <p
          className={cn(
            'text-[12px] mt-1 leading-relaxed',
            isMissing ? 'text-muted-foreground/45' : 'text-muted-foreground',
          )}
        >
          <span className="font-medium">{getProofTypeLabel(proof.type)}</span> — {proof.description}
        </p>
      </div>
    </div>
  )
}

export function ProofSection({ proofGroups }: ProofSectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const { lightboxImages, proofToLightboxIndex } = useMemo(() => {
    const images: { src: string; title: string; description: string }[] = []
    const map = new Map<string, number>()

    for (const group of proofGroups) {
      for (const proof of group.proofs) {
        if (proof.href && (proof.type === 'screenshot' || proof.type === 'schema')) {
          map.set(proof.id, images.length)
          images.push({
            src: proof.href,
            title: proof.title,
            description: proof.description,
          })
        }
      }
    }

    return { lightboxImages: images, proofToLightboxIndex: map }
  }, [proofGroups])

  const handleOpen = (proofId: string) => {
    const idx = proofToLightboxIndex.get(proofId)
    if (idx !== undefined) {
      setLightboxIndex(idx)
      setLightboxOpen(true)
    }
  }

  return (
    <>
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-[14px] font-semibold">Preuves par compétence</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-4">
          {proofGroups.map((group) => (
            <div
              key={group.competencyId}
              className="surface-card overflow-hidden rounded-lg"
            >
              <div className="flex items-center gap-3.5 px-5 py-4 bg-secondary/55 border-b border-border">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-primary text-primary-foreground">
                  {group.competencyCode}
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold">{group.competencyName}</p>
                </div>
              </div>

              {group.subCompetencies.length > 0 && (
                <div className="px-5 py-3 border-b border-border bg-card">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Sous-compétences travaillées
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.subCompetencies.map((sub) => (
                      <span
                        key={sub.id}
                        className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/80 px-2.5 py-1 text-[10px] font-medium text-muted-foreground shadow-xs"
                        title={sub.name}
                      >
                        <span className="font-mono font-bold text-foreground/80">
                          {sub.code}
                        </span>
                        <span>{sub.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="divide-y divide-border">
                {group.proofs.map((proof) => (
                  <ProofRow
                    key={proof.id}
                    proof={proof}
                    onLightboxOpen={
                      proofToLightboxIndex.has(proof.id)
                        ? () => handleOpen(proof.id)
                        : undefined
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxImages.length > 0 && (
        <ProofLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
        />
      )}
    </>
  )
}
