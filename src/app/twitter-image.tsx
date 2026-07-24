import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — Full Stack Developer & Enterprise Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#07080a",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#3fd6c4",
            }}
          />
          <span style={{ color: "#9498a1", fontSize: 24, letterSpacing: 2 }}>
            AVAILABLE FOR ENTERPRISE ENGINEERING ROLES
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 700,
            color: "#f3f4f6",
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          <span>Building Enterprise</span>
          <span>Software That Scales.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 32,
            color: "#5b6fd8",
            fontWeight: 600,
          }}
        >
          {profile.name} — {profile.titles[0]}
        </div>
      </div>
    ),
    { ...size }
  );
}
