"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";

const username = profile.github.split("/").filter(Boolean).pop() ?? "";

type GithubStats = {
  public_repos: number;
  followers: number;
  created_at: string;
};

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface-elevated px-5 py-4 text-center">
      <p className="font-display text-2xl font-semibold text-foreground">{value}</p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  );
}

export function OpenSource() {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [failed, setFailed] = useState(false);
  const [chartFailed, setChartFailed] = useState(false);

  useEffect(() => {
    if (!username) return;
    let cancelled = false;

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: GithubStats) => {
        if (!cancelled) setStats(data);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!username) return null;

  const yearsOnGithub = stats
    ? Math.max(1, new Date().getFullYear() - new Date(stats.created_at).getFullYear())
    : null;

  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Open Source"
          title="Code speaks louder than a résumé bullet."
          description="Live activity from my GitHub — no curation, just what I've actually shipped and committed."
        />

        <Reveal className="mt-16 overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="flex flex-col gap-8 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface-elevated text-accent">
                <FaGithub className="h-7 w-7" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">@{username}</p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="text-sm text-accent hover:underline"
                >
                  View full profile →
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <StatBlock label="Public Repos" value={stats ? String(stats.public_repos) : failed ? "—" : "···"} />
              <StatBlock label="Followers" value={stats ? String(stats.followers) : failed ? "—" : "···"} />
              <StatBlock
                label="Years Active"
                value={yearsOnGithub ? `${yearsOnGithub}+` : failed ? "—" : "···"}
              />
            </div>
          </div>

          {!chartFailed && (
            <div className="overflow-x-auto border-t border-border bg-surface-elevated/40 p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://ghchart.rshah.org/5b6fd8/${username}`}
                alt={`${username}'s GitHub contribution graph`}
                className="mx-auto h-auto min-w-[640px] max-w-full opacity-90"
                loading="lazy"
                onError={() => setChartFailed(true)}
              />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
