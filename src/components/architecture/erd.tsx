type Entity = {
  name: string;
  fields: string[];
};

const entities: Entity[] = [
  { name: "Tenant", fields: ["id (pk)", "name", "plan", "created_at"] },
  { name: "User", fields: ["id (pk)", "tenant_id (fk)", "email", "password_hash", "role_id (fk)"] },
  { name: "Role", fields: ["id (pk)", "name", "permissions[]", "parent_role_id (fk)"] },
  { name: "Patient", fields: ["id (pk)", "tenant_id (fk)", "name", "ward_id (fk)", "admitted_at"] },
  { name: "Ward", fields: ["id (pk)", "tenant_id (fk)", "name", "capacity"] },
  { name: "Invoice", fields: ["id (pk)", "patient_id (fk)", "amount", "status", "line_items[]"] },
  { name: "Device", fields: ["id (pk)", "tenant_id (fk)", "topic", "last_seen_at"] },
  { name: "AuditLog", fields: ["id (pk)", "user_id (fk)", "action", "resource", "created_at"] },
];

const relations = [
  "Tenant 1 — * User",
  "Tenant 1 — * Ward",
  "Role 1 — * User (role_id)",
  "Role 1 — * Role (self-referencing hierarchy)",
  "Ward 1 — * Patient",
  "Patient 1 — * Invoice",
  "Tenant 1 — * Device",
  "User 1 — * AuditLog",
];

export function Erd() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        {entities.map((entity) => (
          <div key={entity.name} className="rounded-xl border border-border bg-surface">
            <div className="border-b border-border bg-surface-elevated px-4 py-2">
              <span className="text-sm font-semibold text-foreground">{entity.name}</span>
            </div>
            <ul className="flex flex-col gap-1 p-4 font-mono text-xs text-muted">
              {entity.fields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-surface p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">Relationships</p>
        <ul className="mt-4 flex flex-col gap-3 font-mono text-xs text-muted">
          {relations.map((rel) => (
            <li key={rel} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {rel}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
