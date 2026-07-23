export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Building interfaces that feel instant, accessible, and rock-solid at enterprise scale.",
    skills: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "RxJS", "TailwindCSS"],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Designing services and APIs that hold up under real production load.",
    skills: ["Node.js", "Express", "ASP.NET Framework", "REST APIs", "Node-RED"],
  },
  {
    id: "database",
    title: "Database",
    description: "Modeling data for consistency, performance, and long-term maintainability.",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    id: "cloud",
    title: "Cloud & Infra",
    description: "Deploying and operating systems that stay up, and stay fast.",
    skills: ["AWS", "Git", "GitHub", "CI/CD"],
  },
  {
    id: "realtime",
    title: "Real-Time Systems",
    description: "Streaming data from devices and services to dashboards, live.",
    skills: ["WebSocket", "RabbitMQ", "MQTT", "Real-time Dashboards"],
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "The decisions that determine whether a system survives year three.",
    skills: ["System Design", "Role Based Authentication", "Enterprise ERP", "API Design"],
  },
];
