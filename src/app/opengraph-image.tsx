import { ImageResponse } from "next/og";
import { profile, stats } from "@/data/profile";

export const alt = `${profile.name} — Enterprise Full Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const highlighted = stats.slice(0, 4);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#07080a",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(91,111,216,0.35), rgba(7,8,10,0) 55%)",
          color: "#f3f4f6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 22,
              color: "#9498a1",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#3fd6c4" }} />
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 66,
              fontWeight: 600,
              lineHeight: 1.15,
              maxWidth: 920,
              letterSpacing: -1,
            }}
          >
            {profile.heroHeadline}
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#9498a1", maxWidth: 780 }}>
            {profile.heroSubheading}
          </div>
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          {highlighted.map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 40, fontWeight: 600, color: "#5b6fd8" }}>
                {stat.value}
                {stat.suffix}
              </div>
              <div style={{ display: "flex", marginTop: 6, fontSize: 18, color: "#9498a1" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
