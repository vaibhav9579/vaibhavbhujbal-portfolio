import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SystemDiagram } from "@/components/architecture/system-diagram";
import { CodeTree } from "@/components/architecture/code-tree";
import { FlowDiagram } from "@/components/architecture/flow-diagram";
import { TreeDiagram } from "@/components/architecture/tree-diagram";
import { Erd } from "@/components/architecture/erd";

export const metadata: Metadata = {
  title: "System Architecture — Vaibhav Bhujbal",
  description: "How I structure enterprise systems: architecture, auth flow, role hierarchy, API design, and deployment.",
  robots: { index: false, follow: false },
};

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-16">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{description}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function ArchitecturePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-32 pt-32">
      <Link
        href="/"
        data-cursor-hover
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>

      <header className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Internal / Engineering</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          System Architecture
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          A look under the hood — how I structure multi-tenant enterprise platforms, from request to
          database to deployment. This page isn&apos;t linked in the main navigation; it&apos;s here for
          anyone curious enough to look.
        </p>
      </header>

      <Section
        id="system"
        title="High-Level System Diagram"
        description="A representative architecture for the ERP and real-time platforms I build — layered by client, service, and data concerns."
      >
        <SystemDiagram />
      </Section>

      <Section
        id="folders"
        title="Folder Structure"
        description="Domain-oriented structure — feature modules own their guards, services, and types instead of scattering logic across generic folders."
      >
        <CodeTree />
      </Section>

      <Section
        id="auth-flow"
        title="Authentication Flow"
        description="Every request is authenticated and authorized at the API boundary, not just the UI layer."
      >
        <FlowDiagram
          direction="vertical"
          steps={[
            { title: "Client submits credentials", note: "Angular / React login form" },
            { title: "Auth service verifies credentials", note: "Password hash comparison, rate-limited" },
            { title: "JWT issued with tenant + role claims", note: "Short-lived access token + refresh token" },
            { title: "Token stored client-side", note: "HttpOnly cookie for web clients" },
            { title: "Subsequent requests include token", note: "Sent via Authorization header" },
            { title: "Gateway validates token & role", note: "Rejects on expiry, tenant mismatch, or missing scope" },
            { title: "Request reaches protected resource", note: "Scoped to tenant + role automatically" },
          ]}
        />
      </Section>

      <Section
        id="roles"
        title="Role Hierarchy"
        description="Permissions are modeled as a hierarchy, not a flat list — each role inherits the constraints of the one above it."
      >
        <TreeDiagram
          root={{
            label: "Super Admin",
            note: "Cross-tenant platform access",
            children: [
              {
                label: "Tenant Admin",
                note: "Full access within a single tenant",
                children: [
                  {
                    label: "Manager (Doctor / Teacher)",
                    note: "Department or class-level access",
                    children: [
                      { label: "Staff (Nurse / Front-desk)", note: "Operational, day-to-day access" },
                      { label: "Read-only (Parent / Guest)", note: "Scoped visibility, no mutation rights" },
                    ],
                  },
                  { label: "Billing", note: "Financial modules only" },
                ],
              },
            ],
          }}
        />
      </Section>

      <Section
        id="api-flow"
        title="API Request Flow"
        description="Every request moves through the same predictable pipeline, regardless of which module it hits."
      >
        <FlowDiagram
          steps={[
            { title: "Rate Limiter" },
            { title: "Auth Middleware" },
            { title: "Schema Validation" },
            { title: "Controller" },
            { title: "Service Layer" },
            { title: "Repository" },
            { title: "Database" },
          ]}
        />
      </Section>

      <Section
        id="db-schema"
        title="Database Schema"
        description="A simplified view of the core multi-tenant schema shared across the ERP platforms."
      >
        <Erd />
      </Section>

      <Section
        id="deployment"
        title="Deployment Pipeline"
        description="Every merge to main goes through the same automated path to production."
      >
        <FlowDiagram
          steps={[
            { title: "Git Push", note: "Feature branch → PR" },
            { title: "CI: Lint, Test, Build", note: "Type checks + unit tests" },
            { title: "Container Image", note: "Built and tagged" },
            { title: "Staging Deploy", note: "Smoke tested" },
            { title: "Manual Approval" },
            { title: "Production (AWS)", note: "Rolling deploy" },
            { title: "Monitoring & Rollback", note: "Auto-rollback on health check failure" },
          ]}
        />
      </Section>
    </main>
  );
}
