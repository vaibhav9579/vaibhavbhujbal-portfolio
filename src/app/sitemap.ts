import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vaibhavbhujbal.dev";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
