import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.titles.join(" · ")}
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted">
          <a href={`mailto:${profile.email}`} data-cursor-hover className="hover:text-foreground">
            Email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pb-8 text-xs text-muted/70">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript, and Framer Motion.
        </span>
        <Link
          href="/architecture"
          data-cursor-hover
          className="text-muted/30 transition-colors hover:text-muted"
          title="System architecture"
        >
          ./architecture
        </Link>
      </div>
    </footer>
  );
}
