"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { studentInfo } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${studentInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {"N'hésitez pas à me contacter pour toute question."}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
          {/* Contact Form */}
          <div className="p-5 rounded-md border border-border bg-card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium mb-1.5">
                  Nom
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-9 text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-1.5">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-9 text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium mb-1.5">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="text-sm resize-none"
                />
              </div>

              <Button type="submit" size="sm">
                Envoyer
                <Send className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </form>

            <p className="mt-4 text-[11px] text-muted-foreground">
              Ce formulaire ouvre votre client email.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <Link
              href={`mailto:${studentInfo.email}`}
              className="flex items-center gap-3 p-4 rounded-md border border-border bg-card hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded bg-secondary">
                <Mail className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium">Email</p>
                <p className="text-[11px] text-muted-foreground truncate">{studentInfo.email}</p>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>

            <Link
              href={studentInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-md border border-border bg-card hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded bg-secondary">
                <Github className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium">GitHub</p>
                <p className="text-[11px] text-muted-foreground truncate">{studentInfo.github.replace("https://", "")}</p>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>

            <Link
              href={studentInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-md border border-border bg-card hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded bg-secondary">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium">LinkedIn</p>
                <p className="text-[11px] text-muted-foreground truncate">{studentInfo.linkedin.replace("https://", "")}</p>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>

            <div className="p-4 rounded-md bg-secondary/30 border border-border">
              <p className="text-xs text-muted-foreground">
                Portfolio BTS SIO SLAM pour l&apos;épreuve E5.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
