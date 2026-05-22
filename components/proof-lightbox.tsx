'use client'

import { useState, useEffect, useCallback } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, X, ImageOff } from 'lucide-react'

interface LightboxImage {
  src: string
  title: string
  description: string
}

interface ProofLightboxProps {
  images: LightboxImage[]
  initialIndex: number
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProofLightbox({ images, initialIndex, open, onOpenChange }: ProofLightboxProps) {
  const [index, setIndex] = useState(initialIndex)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    setIndex(initialIndex)
    setImgError(false)
  }, [initialIndex, open])

  const goNext = useCallback(() => {
    if (index < images.length - 1) {
      setImgError(false)
      setIndex(index + 1)
    }
  }, [index, images.length])

  const goPrev = useCallback(() => {
    if (index > 0) {
      setImgError(false)
      setIndex(index - 1)
    }
  }, [index])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, goNext, goPrev])

  const current = images[index]
  if (!current) return null

  const hasMultiple = images.length > 1

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[95vw] w-auto p-0 gap-0 bg-black/95 border-0 rounded-lg shadow-2xl"
        showCloseButton={false}
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">{current.title}</DialogTitle>
        <DialogDescription className="sr-only">{current.description}</DialogDescription>

        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/50 p-1.5 text-white/80 hover:text-white hover:bg-black/70 transition-colors"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col max-h-[90vh]">
          <div className="relative flex items-center justify-center min-h-0 flex-1 p-8">
            {imgError ? (
              <div className="flex flex-col items-center gap-3 text-white/60 py-16">
                <ImageOff className="h-10 w-10" />
                <p className="text-sm">Image non disponible</p>
                <p className="text-xs text-white/40">Ajoute le fichier dans public/preuves/</p>
              </div>
            ) : (
              <img
                src={current.src}
                alt={current.title}
                className="max-w-full max-h-[70vh] object-contain rounded"
                onError={() => setImgError(true)}
              />
            )}

            {hasMultiple && !imgError && (
              <>
                {index > 0 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); goPrev() }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/80 hover:text-white hover:bg-black/70 transition-colors"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                )}
                {index < images.length - 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); goNext() }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/80 hover:text-white hover:bg-black/70 transition-colors"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                )}
              </>
            )}
          </div>

          <div className="flex items-center justify-between px-6 py-3 border-t border-white/10">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-white truncate">{current.title}</p>
              <p className="text-xs text-white/50 truncate">{current.description}</p>
            </div>
            {hasMultiple && (
              <span className="ml-4 text-xs text-white/40 tabular-nums shrink-0">
                {index + 1} / {images.length}
              </span>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
