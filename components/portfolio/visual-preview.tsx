import {
  Blocks,
  Bot,
  Braces,
  BriefcaseBusiness,
  FileText,
  Globe2,
  Newspaper,
  PanelsTopLeft,
  PenTool,
  Smartphone,
  TerminalSquare,
  Type,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type VisualPreviewVariant =
  | "api"
  | "web"
  | "desktop"
  | "mobile"
  | "portfolio"
  | "stage"
  | "article"
  | "docs"
  | "css"
  | "ai"
  | "framework"
  | "typescript";

interface VisualPreviewProps {
  image?: string;
  imageAlt: string;
  label: string;
  variant?: VisualPreviewVariant;
  className?: string;
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const variantConfig: Record<
  VisualPreviewVariant,
  {
    icon: typeof Braces;
    label: string;
    lines: string[];
  }
> = {
  api: {
    icon: Braces,
    label: "API",
    lines: ["GET /api/items", "POST /auth/login", "200 OK"],
  },
  web: {
    icon: Globe2,
    label: "Web",
    lines: ["Header", "Section", "Responsive"],
  },
  desktop: {
    icon: PanelsTopLeft,
    label: "App",
    lines: ["Dashboard", "Data grid", "Module"],
  },
  mobile: {
    icon: Smartphone,
    label: "Mobile",
    lines: ["Screen", "State", "Storage"],
  },
  portfolio: {
    icon: TerminalSquare,
    label: "Portfolio",
    lines: ["Next.js", "Static export", "E5"],
  },
  stage: {
    icon: BriefcaseBusiness,
    label: "Stage",
    lines: ["Mission", "Tickets", "Livrable"],
  },
  article: {
    icon: Newspaper,
    label: "Article",
    lines: ["Source", "Synthese", "Tags"],
  },
  docs: {
    icon: FileText,
    label: "Docs",
    lines: ["Guide", "Concept", "Exemple"],
  },
  css: {
    icon: PenTool,
    label: "CSS",
    lines: ["Layout", "Container", "Responsive"],
  },
  ai: {
    icon: Bot,
    label: "IA",
    lines: ["Prompt", "Suggestion", "Review"],
  },
  framework: {
    icon: Blocks,
    label: "Framework",
    lines: ["Router", "Component", "Server"],
  },
  typescript: {
    icon: Type,
    label: "TypeScript",
    lines: ["Types", "Inference", "Build"],
  },
};

function getAssetSrc(src: string) {
  if (!src.startsWith("/") || src.startsWith(BASE_PATH)) {
    return src;
  }

  return `${BASE_PATH}${src}`;
}

export function VisualPreview({
  image,
  imageAlt,
  label,
  variant = "web",
  className,
}: VisualPreviewProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "relative aspect-[16/8] overflow-hidden border-b border-border bg-secondary",
        className,
      )}
    >
      {image ? (
        <img
          src={getAssetSrc(image)}
          alt={imageAlt}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      ) : (
        <div className="relative h-full w-full bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:30px_30px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,var(--card)_0,transparent_32%),linear-gradient(135deg,transparent,var(--background))]" />
          <div className="absolute inset-4 grid grid-cols-[0.78fr_1.22fr] gap-3 rounded-lg border border-border bg-card/90 p-3 shadow-sm backdrop-blur">
            <div className="flex min-h-0 flex-col justify-between rounded-md border border-border bg-secondary/70 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {config.label}
                </p>
                <p className="mt-1 text-[12px] font-semibold leading-none">{label}</p>
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-between py-1">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/20" />
              </div>
              <div className="space-y-2.5">
                {config.lines.map((line, index) => (
                  <div key={line} className="space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {line}
                      </span>
                      <span className="h-1.5 w-8 rounded-full bg-muted-foreground/20" />
                    </div>
                    <div
                      className={cn(
                        "h-1.5 rounded-full bg-muted-foreground/20",
                        index === 0 && "w-11/12",
                        index === 1 && "w-8/12",
                        index === 2 && "w-10/12",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background/14 to-transparent" />
    </div>
  );
}
