"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import newspaperSrc from "@/public/newspaper-headline.png";
import speechBubble from "@/public/speech-bubble.svg";
import { useRouter } from "next/navigation";

export default function IntroQuestion() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const newspaperRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let floatTween: gsap.core.Tween | null = null;

    // 1. Hide all elements initially before animating
    gsap.set(newspaperRef.current, {
      scale: 0,
      rotation: -360,
      opacity: 0,
      transformOrigin: "center center",
    });

    gsap.set(bubbleRef.current, {
      scale: 0,
      opacity: 0,
      transformOrigin: "bottom left",
    });

    gsap.set(buttonsRef.current, {
      opacity: 0,
      y: 25,
    });

    // 2. Build Sequence Timeline
    const tl = gsap.timeline({
      delay: 0.2, // Short breather after screen transition
      //   onComplete: () => {
      //     // Start continuous floating loop once entrance sequence completes
      //     if (bubbleRef.current) {
      //       floatTween = gsap.to(bubbleRef.current, {
      //         y: -10, // Floats 10px up from resting position
      //         duration: 1.6, // Duration of one direction (up or down)
      //         ease: "sine.inOut", // Smooth organic ease
      //         repeat: -1, // Infinite loop
      //         yoyo: true, // Go back and forth (up and down)
      //       });
      //     }
      //   },
    });

    tl
      // Step A: Newspaper scales and rotates up into place
      .to(newspaperRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 2,
        ease: "back.out(1.2)",
      })
      // Step B: "Did you see this?" speech bubble pops in
      .to(
        bubbleRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          onComplete: () => {
            // Start floating up & down IMMEDIATELY as soon as bubble finishes popping in
            if (bubbleRef.current) {
              floatTween = gsap.to(bubbleRef.current, {
                y: -10, // Floats 10px up from resting position
                duration: 1.6,
                ease: "sine.inOut",
                repeat: -1, // Infinite loop
                yoyo: true, // Go back and forth
              });
            }
          },
        },
        "-=0.2", // Overlap slightly with newspaper settling
      )
      // Step C: Action buttons slide and fade up from bottom
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "+=0.1",
      );

    return () => {
      tl.kill();
      if (floatTween) floatTween.kill();
    };
  }, []);

  const handleOpen = () => {
    router.push("/module-1");
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col justify-between items-center gap-y-10"
    >
      {/* --- NEWSPAPER + SPEECH BUBBLE AREA --- */}
      <div className="relative w-full flex-1 flex items-center justify-center min-h-0">
        {/* Newspaper Image (Scales & Rotates Up) */}
        <div ref={newspaperRef} className="relative w-full drop-shadow-2xl">
          <Image
            src={newspaperSrc}
            alt="Newspaper headline"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Speech Bubble Overlay ("Did you see this?") */}
        <div ref={bubbleRef} className="absolute top-0 right-10">
          <Image src={speechBubble} alt="" />
          <span className="text-white font-bold text-lg leading-tight font-sans absolute top-12 inset-x-0 px-8 text-center">
            Did you see this?
          </span>
        </div>
      </div>

      {/* --- ACTION BUTTONS AREA --- */}
      <div ref={buttonsRef} className="w-full flex justify-between gap-x-3">
        <button
          //   onClick={onIgnore}
          className="bg-[#D9394F] hover:opacity-90 active:scale-95 text-white py-3 px-8 rounded-xs text-base tracking-widest uppercase transition-all shadow-md cursor-pointer"
        >
          IGNORE IT
        </button>
        <button
          onClick={handleOpen}
          className="bg-[#222F5F] hover:opacity-90 active:scale-95 text-white py-3 px-8 rounded-xs text-base tracking-widest uppercase transition-all shadow-md cursor-pointer"
        >
          OPEN IT
        </button>
      </div>
    </div>
  );
}
