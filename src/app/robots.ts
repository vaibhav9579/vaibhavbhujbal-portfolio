import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/architecture"] },
    ],
    sitemap: "https://vaibhavbhujbal.dev/sitemap.xml",
  };
}
