"use client";

import { usePathname } from "next/navigation";

// Define banner title/subtitle for each route here
const bannerContent: Record<string, { title: string; subtitle?: string }> = {
  "/": {
    title: "Introduction",
    subtitle: "The Improbable Thing",
  },
  "/module-1": {
    title: "Honest Process (The Foundation)",
  },
  "/module-2": {
    title: "Non-Violet Campaigns (The Doors)",
  },
};

export default function Banner() {
  const pathname = usePathname();

  // Get current content based on path, or fallback to default
  const content = bannerContent[pathname] || {
    title: "Introduction",
    subtitle: "The Improbable Thing",
  };

  return (
    <div className="bg-brand-pink text-white text-center py-3">
      <h1
        className={`font-bold ${pathname === "/module-1" || pathname === "/module-2" ? "text-xl" : "text-2xl"}`}
      >
        {content.title}
      </h1>
      {content.subtitle && (
        <span className="font-light">{content.subtitle}</span>
      )}
    </div>
  );
}
