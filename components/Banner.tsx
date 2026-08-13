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
  "/module-3": {
    title: "Secure Voting (The Vault)",
  },
  "/module-4": {
    title: "Responsible Oversight (The Windows)",
  },
  "/module-5": {
    title: "Trusted Outcomes (The Keystone)",
  },
  "/module-6": {
    title: "Your Part",
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
      <h1 className={`font-bold ${pathname === "/" ? "text-2xl" : "text-lg"}`}>
        {content.title}
      </h1>
      {content.subtitle && (
        <span className="font-light">{content.subtitle}</span>
      )}
    </div>
  );
}
