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
    <div className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="page-title">Contact</h1>
          <p className="page-intro">
            {"N'hésitez pas à me contacter pour toute question."}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr,340px]">
          {/* Contact Form */}
          <div className="surface-card rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-[12px] font-semibold">
                  Nom
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-10 text-[13px]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-[12px] font-semibold">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-10 text-[13px]"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-[12px] font-semibold">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="text-[13px] resize-none"
                />
              </div>

              <Button type="submit" className="h-10 px-5 text-[13px] font-medium">
                Envoyer
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <p className="mt-5 text-[11px] text-muted-foreground font-medium">
              Ce formulaire ouvre votre client email.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <Link
              href={`mailto:${studentInfo.email}`}
              className="surface-card surface-card-hover flex items-center gap-4 rounded-lg p-5"
            >
              <div className="icon-tile h-11 w-11">
                <Mail className="h-5 w-5 text-foreground/70" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold">Email</p>
                <p className="text-[12px] text-muted-foreground truncate font-medium mt-0.5">{studentInfo.email}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Link
              href={studentInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card surface-card-hover flex items-center gap-4 rounded-lg p-5"
            >
              <div className="icon-tile h-11 w-11">
                <Github className="h-5 w-5 text-foreground/70" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold">GitHub</p>
                <p className="text-[12px] text-muted-foreground truncate font-medium mt-0.5">{studentInfo.github.replace("https://", "")}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Link
              href={studentInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card surface-card-hover flex items-center gap-4 rounded-lg p-5"
            >
              <div className="icon-tile h-11 w-11">
                <Linkedin className="h-5 w-5 text-foreground/70" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold">LinkedIn</p>
                <p className="text-[12px] text-muted-foreground truncate font-medium mt-0.5">{studentInfo.linkedin.replace("https://", "")}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <div className="muted-panel rounded-lg p-5">
              <p className="text-[12px] text-muted-foreground leading-relaxed">
                Portfolio BTS SIO SLAM pour l&apos;épreuve E5.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
