export type Project = {
  slug: string;
  name: string;
  tagline: string;
  cover: { gradient: string };
  stack: string[];
  problem: string;
  architecture: string;
  challenges: string[];
  solution: string;
  features: string[];
  performance: string[];
  lessons: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "hospital-erp",
    name: "Hospital ERP",
    tagline: "Multi-tenant hospital management platform running patient care operations end-to-end.",
    cover: { gradient: "from-zinc-800 via-zinc-900 to-black" },
    stack: ["Angular", "Node.js", "Express", "PostgreSQL", "REST APIs", "RBAC"],
    problem:
      "Hospital groups were running patient records, billing, and ward operations across disconnected spreadsheets and legacy desktop software, with no shared source of truth across departments or facilities.",
    architecture:
      "A multi-tenant architecture with a shared application layer and isolated tenant schemas, so each hospital's data stays fully partitioned while the platform ships from a single codebase. Role-based access control gates every route and API call at the permission level, not just the UI level.",
    challenges: [
      "Isolating tenant data safely without duplicating infrastructure per hospital",
      "Modeling ward, bed, and patient-transfer state without race conditions",
      "Designing a billing engine flexible enough for different hospitals' pricing rules",
      "Keeping the UI usable for non-technical hospital staff under time pressure",
    ],
    solution:
      "Built a tenant-aware data layer with row-level scoping enforced at the query layer, a role hierarchy (admin, doctor, nurse, billing, front-desk) driving both routing and API authorization, and a ward/bed management module with optimistic UI backed by transactional writes.",
    features: [
      "Multi-tenant hospital onboarding",
      "Role-based login and permission hierarchy",
      "Patient management and medical history",
      "Ward and bed management",
      "Billing and invoicing engine",
      "Operational dashboards",
      "Exportable reports",
    ],
    performance: [
      "Sub-200ms API response on core patient lookups",
      "Optimized PostgreSQL indexes for high-volume ward queries",
      "Route-level code splitting for fast first load",
    ],
    lessons:
      "Multi-tenancy decisions made early — schema isolation vs. shared tables — have outsized long-term cost. Getting the role hierarchy right on day one saved months of retrofitting permission checks later.",
  },
  {
    slug: "dashboard-builder",
    name: "Dashboard Builder",
    tagline: "A ThingsBoard-inspired real-time dashboard engine for industrial data.",
    cover: { gradient: "from-slate-800 via-slate-900 to-black" },
    stack: ["React", "Next.js", "WebSocket", "Node-RED", "MQTT", "RabbitMQ"],
    problem:
      "Industrial teams needed a way to visualize live device and sensor data without waiting on engineering to hand-build a new dashboard for every use case.",
    architecture:
      "A drag-and-drop widget canvas backed by a normalized dashboard schema (widgets, data sources, layout) persisted independently of the data itself. A WebSocket layer streams live values into subscribed widgets, decoupled from the REST layer used for configuration.",
    challenges: [
      "Keeping dozens of live charts in sync without over-rendering the UI",
      "Bridging industrial protocols (MQTT) into a web-friendly real-time stream",
      "Making a drag-and-drop builder that non-engineers could actually use",
      "Handling reconnection and backfill gracefully when devices drop offline",
    ],
    solution:
      "Used Node-RED as an integration layer between MQTT device data and RabbitMQ as a durable message backbone, with a WebSocket gateway fanning updates out to subscribed dashboard clients. Widgets subscribe only to the data channels they render, keeping re-renders scoped and cheap.",
    features: [
      "Drag-and-drop widget canvas",
      "Real-time charts and gauges",
      "Live WebSocket data updates",
      "Dynamic, per-user dashboards",
      "Node-RED integration for device data pipelines",
      "Industrial automation data ingestion",
    ],
    performance: [
      "Handles high-frequency device updates without UI jank via scoped subscriptions",
      "Backpressure-aware message queue (RabbitMQ) to prevent data loss under load",
      "Reconnect-and-backfill strategy for dropped device connections",
    ],
    lessons:
      "Real-time UI is a data-modeling problem before it's a rendering problem. Getting the subscription granularity right mattered more than any chart library choice.",
  },
  {
    slug: "school-erp",
    name: "School ERP",
    tagline: "A role-driven school management system for attendance, fees, and communication.",
    cover: { gradient: "from-neutral-800 via-neutral-900 to-black" },
    stack: ["Angular", "Node.js", "MongoDB", "REST APIs", "RBAC"],
    problem:
      "Schools needed one system to replace manual attendance registers, paper fee receipts, and ad-hoc parent communication, usable by admins, teachers, and parents alike.",
    architecture:
      "A role-first design where admin, teacher, and parent portals are three views over the same domain model, gated by a shared authorization layer rather than three separate applications.",
    challenges: [
      "Designing attendance flows fast enough for a teacher to use in front of a live class",
      "Modeling fee structures that vary by class, term, and discount rules",
      "Giving parents visibility without exposing internal school data",
    ],
    solution:
      "Built a single role-aware application shell with three tailored dashboards, a fee engine supporting per-class and per-term rule sets, and a notification layer so parents see attendance and fee status in real time.",
    features: [
      "Daily attendance tracking",
      "Fee management and receipts",
      "Parent portal with real-time updates",
      "Admin dashboard for school-wide operations",
      "Teacher dashboard for class-level workflows",
      "Role-based access management",
    ],
    performance: [
      "Optimized MongoDB queries for attendance rollups across classes",
      "Cached dashboard aggregates to keep admin views fast at scale",
    ],
    lessons:
      "The hardest part of multi-role software isn't the permissions matrix — it's making each role's daily workflow feel like the app was built only for them.",
  },
];
