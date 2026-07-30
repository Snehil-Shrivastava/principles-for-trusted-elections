"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Import all artboards
import artboard6 from "@/public/Artboard6.svg";
import artboard7 from "@/public/Artboard7.svg";
import artboard8 from "@/public/Artboard8.svg";
import artboard9 from "@/public/Artboard9.svg";
import artboard10 from "@/public/Artboard10.svg";
import artboard11 from "@/public/Artboard11.svg";

const artboards = [
  { id: 6, src: artboard6, alt: "Artboard 6" },
  { id: 7, src: artboard7, alt: "Artboard 7" },
  { id: 8, src: artboard8, alt: "Artboard 8" },
  { id: 9, src: artboard9, alt: "Artboard 9" },
  { id: 10, src: artboard10, alt: "Artboard 10" },
  { id: 11, src: artboard11, alt: "Artboard 11" },
];

export default function ArtboardAnimation({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const images = containerRef.current?.querySelectorAll(".artboard-img");
      if (!images || images.length === 0) return;

      // Set initial state: Artboard 6 is visible, all others hidden
      gsap.set(images, { opacity: 0 });
      gsap.set(images[0], { opacity: 1 });

      const tl = gsap.timeline({
        onComplete: () => {
          // Triggers after Artboard 11 finishes displaying
          gsap.delayedCall(3, () => {
            onComplete?.();
          });
        },
      });

      // Sequence through Artboards 7 to 11
      for (let i = 1; i < images.length; i++) {
        tl.to(
          images[i],
          {
            opacity: 1,
            duration: 0.6, // Transition duration (0.6s cross-fade)
            ease: "power2.inOut",
          },
          "+=3.0", // Wait 2 seconds on the current artboard before revealing the next
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
    >
      {artboards.map((artboard, index) => (
        <Image
          key={artboard.id}
          src={artboard.src}
          alt={artboard.alt}
          priority
          className="artboard-img absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
      ))}
    </div>
  );
}
