"use client";

import dynamic from "next/dynamic";

const Cursor = dynamic(() => import("@/components/layout/cursor").then((m) => m.Cursor), {
  ssr: false,
});

export function CursorMount() {
  return <Cursor />;
}
