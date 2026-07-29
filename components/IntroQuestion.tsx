"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import newspaperSrc from "@/public/newspaper-headline.png";
import speechBubble from "@/public/speech-bubble.svg";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function IntroQuestion() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const newspaperRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Prevent double-clicking while audio plays
  const [isProcessing, setIsProcessing] = useState(false);

  //   useEffect(() => {
  //     let floatTween: gsap.core.Tween | null = null;

  //     // Initial states
  //     gsap.set(newspaperRef.current, {
  //       scale: 0.08,
  //       rotation: -1080,
  //       rotationX: 55,
  //       rotationY: -20,
  //       opacity: 0,
  //       transformPerspective: 1200,
  //       transformOrigin: "center center",
  //       force3D: true,
  //     });

  //     gsap.set(bubbleRef.current, {
  //       scale: 0,
  //       opacity: 0,
  //       transformOrigin: "bottom left",
  //     });

  //     gsap.set(buttonsRef.current, {
  //       opacity: 0,
  //       y: 25,
  //     });

  //     const tl = gsap.timeline({
  //       delay: 0.2,
  //     });

  //     tl
  //       // Newspaper flies in
  //       .to(newspaperRef.current, {
  //         scale: 1.12,
  //         rotation: 20,
  //         rotationX: -8,
  //         rotationY: 3,
  //         opacity: 1,
  //         duration: 1.8,
  //         ease: "expo.out",
  //       })

  //       // Settle into final position
  //       .to(
  //         newspaperRef.current,
  //         {
  //           scale: 1,
  //           rotation: 0,
  //           rotationX: 0,
  //           rotationY: 0,
  //           duration: 0.45,
  //           ease: "back.out(2)",
  //         },
  //         ">",
  //       )

  //       // Bubble appears just before newspaper fully settles
  //       .to(
  //         bubbleRef.current,
  //         {
  //           scale: 1,
  //           opacity: 1,
  //           duration: 0.8,
  //           ease: "back.out(1.7)",
  //           onComplete: () => {
  //             if (bubbleRef.current) {
  //               floatTween = gsap.to(bubbleRef.current, {
  //                 y: -10,
  //                 duration: 1.6,
  //                 ease: "sine.inOut",
  //                 repeat: -1,
  //                 yoyo: true,
  //               });
  //             }
  //           },
  //         },
  //         "-=0.15",
  //       )

  //       // Buttons fade up
  //       .to(
  //         buttonsRef.current,
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.8,
  //           ease: "power2.out",
  //         },
  //         "+=0.1",
  //       );

  //     return () => {
  //       tl.kill();
  //       floatTween?.kill();
  //     };
  //   }, []);

  useGSAP(
    () => {
      // Initial states
      gsap.set(newspaperRef.current, {
        scale: 0.08,
        rotation: -1080,
        rotationX: 55,
        rotationY: -20,
        opacity: 0,
        transformPerspective: 1200,
        transformOrigin: "center center",
        force3D: true,
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

      const tl = gsap.timeline({
        delay: 0.2,
        defaults: {
          overwrite: "auto",
        },
      });

      tl
        // Newspaper flies toward the viewer
        .to(newspaperRef.current, {
          scale: 1.12,
          rotation: 20,
          rotationX: -8,
          rotationY: 3,
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
        })

        // Settle into place
        .to(newspaperRef.current, {
          scale: 1,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 0.45,
          ease: "back.out(2)",
        })

        // Speech bubble
        .to(
          bubbleRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            onComplete: () => {
              gsap.to(bubbleRef.current, {
                y: -10,
                duration: 1.6,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
              });
            },
          },
          "-=0.15",
        )

        // Buttons
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
    },
    {
      scope: containerRef,
    },
  );

  const handleOpen = () => {
    router.push("/module-1");
  };

  const handleIgnore = () => {
    if (isProcessing) return;
    setIsProcessing(true);

    // 1. Path to your audio file (e.g. inside public/ignore-sound.mp3)
    // const audio = new Audio("/gta-san-andreas-ah-shit-here-we-go-again.mp3");
    const audio = new Audio("/a-few-moments-later-sponge-bob-sfx-fun.mp3");

    let hasNavigated = false;
    const goToNextModule = () => {
      if (!hasNavigated) {
        hasNavigated = true;
        router.push("/module-1");
      }
    };

    // 2. When audio finishes playing -> navigate
    audio.onended = goToNextModule;

    // 3. Fallback: If audio fails to load -> navigate anyway
    audio.onerror = goToNextModule;

    // 4. Safety Timeout: Max 6s wait in case audio stalls
    setTimeout(goToNextModule, 6000);

    // 5. Play audio
    audio.play().catch((err) => {
      console.warn("Audio playback blocked or failed:", err);
      goToNextModule();
    });
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col justify-between items-center gap-y-10"
    >
      {/* --- NEWSPAPER + SPEECH BUBBLE AREA --- */}
      <div
        className="relative w-full flex-1 flex items-center justify-center min-h-0"
        style={{ perspective: "1200px" }}
      >
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
          onClick={handleIgnore}
          disabled={isProcessing}
          className="bg-[#D9394F] hover:opacity-90 active:scale-95 text-white py-3 px-8 rounded-xs text-base tracking-widest uppercase transition-all shadow-md cursor-pointer disabled:opacity-50"
        >
          IGNORE IT
        </button>
        <button
          onClick={handleOpen}
          disabled={isProcessing}
          className="bg-[#222F5F] hover:opacity-90 active:scale-95 text-white py-3 px-8 rounded-xs text-base tracking-widest uppercase transition-all shadow-md cursor-pointer disabled:opacity-50"
        >
          OPEN IT
        </button>
      </div>
    </div>
  );
}
