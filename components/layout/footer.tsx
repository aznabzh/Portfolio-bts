import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { studentInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 lg:px-6 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground font-medium">
            <span className="text-foreground font-semibold">{studentInfo.name}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40 hidden sm:block" />
            <span className="hidden sm:inline">BTS SIO SLAM</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40 hidden sm:block" />
            <span className="hidden sm:inline">{new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              href={studentInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={studentInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href={`mailto:${studentInfo.email}`}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
