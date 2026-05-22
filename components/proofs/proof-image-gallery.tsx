"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ProofImage } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProofImageGalleryProps {
  images: ProofImage[];
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 2.5;
const ZOOM_STEP = 0.15;
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function clampZoom(value: number) {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
}

function getAssetSrc(src: string) {
  if (!src.startsWith("/") || src.startsWith(BASE_PATH)) {
    return src;
  }

  return `${BASE_PATH}${src}`;
}

export function ProofImageGallery({ images }: ProofImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const selectedImage =
    selectedImageIndex === null ? null : images[selectedImageIndex] ?? null;
  const hasMultipleImages = images.length > 1;
  const canShowPreviousImage =
    selectedImageIndex !== null && selectedImageIndex > 0;
  const canShowNextImage =
    selectedImageIndex !== null && selectedImageIndex < images.length - 1;

  function closeGallery() {
    setSelectedImageIndex(null);
  }

  function showPreviousImage() {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === 0 ? currentIndex : currentIndex - 1;
    });
  }

  function showNextImage() {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === images.length - 1 ? currentIndex : currentIndex + 1;
    });
  }

  useEffect(() => {
    setZoom(MIN_ZOOM);
  }, [selectedImageIndex]);

  useEffect(() => {
    if (!selectedImage || !hasMultipleImages) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (canShowPreviousImage) {
          showPreviousImage();
        }
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (canShowNextImage) {
          showNextImage();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canShowNextImage, canShowPreviousImage, hasMultipleImages, selectedImage]);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mt-3 flex flex-wrap gap-3">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedImageIndex(images.findIndex((item) => item.id === image.id))}
            className="group relative h-24 w-36 overflow-hidden rounded-lg border border-border bg-secondary text-left shadow-sm transition hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title={image.title ?? image.alt}
          >
            <img
              src={getAssetSrc(image.thumbnail ?? image.src)}
              alt={image.alt}
              className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/35 group-hover:opacity-100">
              <ZoomIn className="h-5 w-5" aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && closeGallery()}>
        <DialogContent
          showCloseButton={false}
          overlayClassName="bg-transparent"
          className="h-[100dvh] max-h-[100dvh] w-[100vw] max-w-none border-0 bg-transparent p-0 shadow-none sm:max-w-none"
        >
          {selectedImage && (
            <div
              className="flex h-[100dvh] w-[100vw] flex-col items-center justify-center bg-transparent px-5 py-8"
              onClick={closeGallery}
            >
              <DialogTitle className="sr-only">
                {selectedImage.title ?? selectedImage.alt}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Apercu agrandi de la preuve selectionnee.
              </DialogDescription>

              <DialogClose
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Fermer l'image"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </DialogClose>

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    disabled={!canShowPreviousImage}
                    onClick={(event) => {
                      event.stopPropagation();
                      showPreviousImage();
                    }}
                    className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white transition hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-25"
                    aria-label="Image precedente"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    disabled={!canShowNextImage}
                    onClick={(event) => {
                      event.stopPropagation();
                      showNextImage();
                    }}
                    className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white transition hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-25"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}

              <div
                className="flex h-auto max-h-[82dvh] w-fit max-w-[88vw] items-center justify-center overflow-auto rounded-lg bg-white p-3"
                onClick={(event) => event.stopPropagation()}
                onWheel={(event) => {
                  event.preventDefault();
                  const direction = event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
                  setZoom((currentZoom) => clampZoom(currentZoom + direction));
                }}
                onDoubleClick={() => setZoom((currentZoom) => (currentZoom > MIN_ZOOM ? MIN_ZOOM : 1.75))}
              >
                <img
                  src={getAssetSrc(selectedImage.src)}
                  alt={selectedImage.alt}
                  className={cn(
                    "block h-auto max-h-[78dvh] w-auto max-w-[84vw] select-none object-contain transition-transform duration-150",
                    zoom > MIN_ZOOM && "cursor-zoom-out",
                  )}
                  draggable={false}
                  style={{ transform: `scale(${zoom})` }}
                />
              </div>

            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
