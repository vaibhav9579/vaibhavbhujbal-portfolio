export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  responsibilities: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Enterprise Software Team",
    role: "Full Stack Developer — Angular Specialist",
    period: "2023 — Present",
    summary:
      "Leading frontend architecture and building backend services for enterprise ERP systems across healthcare and education.",
    achievements: [
      "Shipped a multi-tenant Hospital ERP used across multiple facilities",
      "Built a real-time dashboard engine handling live industrial data streams",
      "Reduced core dashboard load time significantly through code-splitting and query optimization",
    ],
    responsibilities: [
      "Owning Angular and React frontend architecture across projects",
      "Designing REST APIs and role-based authorization systems",
      "Integrating real-time data pipelines with WebSocket, MQTT, and RabbitMQ",
      "Collaborating directly with stakeholders to translate operations into system design",
    ],
  },
  {
    company: "Freelance / Contract Engineering",
    role: "Full Stack Developer",
    period: "2022 — 2023",
    summary:
      "Delivered full-stack applications for school administration and small business operations.",
    achievements: [
      "Delivered a School ERP covering attendance, fees, and parent communication",
      "Built and deployed production Node.js/Express APIs on AWS",
    ],
    responsibilities: [
      "End-to-end ownership from requirements to deployment",
      "Database schema design in MongoDB, PostgreSQL, and MySQL",
      "Building responsive UIs with Angular, React, and TailwindCSS",
    ],
  },
];

export const engineeringPrinciples = [
  {
    title: "Scalability",
    description:
      "Systems are designed to handle growth in users, data, and tenants from day one — not retrofitted after the first outage.",
  },
  {
    title: "Performance",
    description:
      "Every millisecond in a hot path is a decision. Query plans, bundle size, and re-renders are treated as first-class concerns.",
  },
  {
    title: "Security",
    description:
      "Authorization is enforced at the API layer, not just hidden in the UI. Role hierarchies are modeled explicitly, not bolted on.",
  },
  {
    title: "Reusable Architecture",
    description:
      "Shared modules and design systems mean new features ship faster without duplicating logic across the codebase.",
  },
  {
    title: "Clean Code",
    description:
      "Code is written for the engineer who reads it in a year — clear boundaries, explicit contracts, no cleverness for its own sake.",
  },
  {
    title: "Enterprise UI",
    description:
      "Interfaces are built for people using them eight hours a day, not for a five-second demo. Density, clarity, and speed win.",
  },
  {
    title: "API Design",
    description:
      "APIs are treated as products — versioned, documented, and predictable for every team that depends on them.",
  },
];

export const testimonials = [
  {
    quote:
      "Vaibhav rebuilt our hospital operations system from the ground up. The multi-tenant architecture alone saved us from standing up separate infrastructure per facility.",
    name: "Operations Director",
    role: "Healthcare Network",
  },
  {
    quote:
      "The real-time dashboard platform he built now runs our plant floor monitoring. It just works, even under heavy device load.",
    name: "Plant Systems Manager",
    role: "Industrial Automation",
  },
  {
    quote:
      "He thinks in systems, not just screens. Every feature request came back with a better architectural question than the one we asked.",
    name: "Engineering Lead",
    role: "SaaS Platform",
  },
];
