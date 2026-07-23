import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiDotnet,
  SiGithub,
  SiRabbitmq,
  SiNodered,
  SiMqtt,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { ComponentType } from "react";

export type TechItem = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
};

export const techStack: TechItem[] = [
  { name: "Angular", icon: SiAngular, description: "Enterprise-grade single-page applications at scale" },
  { name: "React", icon: SiReact, description: "Composable, high-performance user interfaces" },
  { name: "Next.js", icon: SiNextdotjs, description: "Server-rendered, SEO-ready React applications" },
  { name: "TypeScript", icon: SiTypescript, description: "Type-safe code across the entire stack" },
  { name: "Node.js", icon: SiNodedotjs, description: "Scalable backend services and APIs" },
  { name: "Express", icon: SiExpress, description: "Fast, unopinionated REST API layer" },
  { name: "MongoDB", icon: SiMongodb, description: "Flexible document storage for evolving domains" },
  { name: "PostgreSQL", icon: SiPostgresql, description: "Relational integrity for critical business data" },
  { name: "MySQL", icon: SiMysql, description: "Battle-tested relational storage" },
  { name: "TailwindCSS", icon: SiTailwindcss, description: "Consistent, maintainable design systems" },
  { name: "AWS", icon: FaAws, description: "Cloud infrastructure, deployment, and scaling" },
  { name: "ASP.NET", icon: SiDotnet, description: "Enterprise backend services on .NET" },
  { name: "Git & GitHub", icon: SiGithub, description: "Version control and collaborative engineering" },
  { name: "RabbitMQ", icon: SiRabbitmq, description: "Durable messaging for distributed systems" },
  { name: "Node-RED", icon: SiNodered, description: "Industrial device and data pipeline integration" },
  { name: "MQTT", icon: SiMqtt, description: "Lightweight device messaging for industrial IoT" },
];
