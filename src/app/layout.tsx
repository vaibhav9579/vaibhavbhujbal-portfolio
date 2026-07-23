import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { CursorMount } from "@/components/layout/cursor-mount";
import { profile } from "@/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} — Full Stack Developer & Enterprise Software Engineer`;
const description =
  "I design and build high-performance business applications used in healthcare, education, and industrial environments. Angular specialist, full-stack engineer, systems thinker.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vaibhavbhujbal.dev"),
  title,
  description,
  keywords: [
    "Vaibhav Bhujbal",
    "Full Stack Developer",
    "Angular Specialist",
    "Enterprise Software Engineer",
    "React Developer",
    "Next.js Developer",
    "System Design",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SmoothScrollProvider>
            <CursorMount />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
