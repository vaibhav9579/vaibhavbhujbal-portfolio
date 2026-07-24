const structure = `src/
├── app/                      # Next.js App Router — routes & layouts
│   ├── (marketing)/          # Public marketing routes
│   ├── dashboard/            # Authenticated application shell
│   │   ├── patients/
│   │   ├── wards/
│   │   ├── billing/
│   │   └── reports/
│   ├── api/                  # Route handlers (REST endpoints)
│   │   ├── auth/
│   │   ├── tenants/
│   │   └── webhooks/
│   └── architecture/         # This page
├── components/
│   ├── ui/                   # Design system primitives
│   ├── layout/                # Nav, shell, providers
│   └── sections/             # Feature/page sections
├── modules/                  # Domain modules (DDD-style boundaries)
│   ├── auth/
│   │   ├── guards/
│   │   ├── services/
│   │   └── types.ts
│   ├── tenants/
│   ├── patients/
│   └── billing/
├── lib/                      # Cross-cutting utilities (db, cache, cn)
├── data/                     # Static content & config
└── hooks/                    # Shared React hooks`;

export function CodeTree() {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-border bg-surface p-6 font-mono text-xs leading-relaxed text-foreground/80 md:text-sm">
      {structure}
    </pre>
  );
}
