// "use client";

// import { useRef, useState } from "react";
// import Image from "next/image";
// import gsap from "gsap";

// import newspaperSrc from "@/public/newspaper-headline.png";
// import speechBubble from "@/public/speech-bubble.svg";
// import { useRouter } from "next/navigation";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// export default function IntroQuestion() {
//   const router = useRouter();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const newspaperRef = useRef<HTMLDivElement>(null);
//   const bubbleRef = useRef<HTMLDivElement>(null);
//   const buttonsRef = useRef<HTMLDivElement>(null);
//   const scrollHelperRef = useRef<HTMLDivElement>(null);
//   const scrollArrowRef = useRef<HTMLDivElement>(null);

//   // Prevent double-clicking while audio plays
//   const [isProcessing, setIsProcessing] = useState(false);

//   useGSAP(
//     () => {
//       // Initial states
//       gsap.set(newspaperRef.current, {
//         scale: 0.08,
//         rotation: -1080,
//         rotationX: 55,
//         rotationY: -20,
//         opacity: 0,
//         transformPerspective: 1200,
//         transformOrigin: "center center",
//         force3D: true,
//       });

//       gsap.set(bubbleRef.current, {
//         scale: 0,
//         opacity: 0,
//         transformOrigin: "bottom left",
//       });

//       gsap.set(buttonsRef.current, {
//         opacity: 0,
//         y: 25,
//       });

//       const tl = gsap.timeline({
//         delay: 0.2,
//         defaults: {
//           overwrite: "auto",
//         },
//       });

//       tl
//         // Newspaper flies toward the viewer
//         .to(newspaperRef.current, {
//           scale: 1.12,
//           rotation: 20,
//           rotationX: -8,
//           rotationY: 3,
//           opacity: 1,
//           duration: 1.1,
//           ease: "expo.out",
//         })

//         // Settle into place
//         .to(newspaperRef.current, {
//           scale: 1,
//           rotation: 0,
//           rotationX: 0,
//           rotationY: 0,
//           duration: 0.45,
//           ease: "back.out(2)",
//         })

//         // Speech bubble
//         .to(
//           bubbleRef.current,
//           {
//             scale: 1,
//             opacity: 1,
//             duration: 0.8,
//             ease: "back.out(1.7)",
//             onComplete: () => {
//               gsap.to(bubbleRef.current, {
//                 y: -10,
//                 duration: 1.6,
//                 ease: "sine.inOut",
//                 repeat: -1,
//                 yoyo: true,
//               });
//             },
//           },
//           "-=0.15",
//         )

//         // Buttons
//         .to(
//           buttonsRef.current,
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             ease: "power2.out",
//           },
//           "+=0.1",
//         );
//     },
//     {
//       scope: containerRef,
//     },
//   );

//   const handleOpen = () => {
//     router.push("/module-1");
//   };

//   const handleIgnore = () => {
//     if (isProcessing) return;
//     setIsProcessing(true);

//     // 1. Path to your audio file (e.g. inside public/ignore-sound.mp3)
//     // const audio = new Audio("/gta-san-andreas-ah-shit-here-we-go-again.mp3");
//     const audio = new Audio("/a-few-moments-later-sponge-bob-sfx-fun.mp3");

//     let hasNavigated = false;
//     const goToNextModule = () => {
//       if (!hasNavigated) {
//         hasNavigated = true;
//         router.push("/module-1");
//       }
//     };

//     // 2. When audio finishes playing -> navigate
//     audio.onended = goToNextModule;

//     // 3. Fallback: If audio fails to load -> navigate anyway
//     audio.onerror = goToNextModule;

//     // 4. Safety Timeout: Max 6s wait in case audio stalls
//     setTimeout(goToNextModule, 6000);

//     // 5. Play audio
//     audio.play().catch((err) => {
//       console.warn("Audio playback blocked or failed:", err);
//       goToNextModule();
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-full flex flex-col justify-between items-center gap-y-10 select-none bg-white relative"
//     >
//       {/* --- NEWSPAPER + SPEECH BUBBLE AREA --- */}
//       <div
//         className="relative w-full flex-1 flex items-center justify-center min-h-0"
//         style={{ perspective: "1200px" }}
//       >
//         {/* Newspaper Image (Scales & Rotates Up) */}
//         <div ref={newspaperRef} className="relative w-full drop-shadow-2xl">
//           <Image
//             src={newspaperSrc}
//             alt="Newspaper headline"
//             className="w-full h-auto object-contain mx-auto"
//           />
//         </div>

//         {/* Speech Bubble Overlay ("Did you see this?") */}
//         <div ref={bubbleRef} className="absolute top-0 right-10">
//           <Image src={speechBubble} alt="" />
//           <span className="text-white font-bold text-lg leading-tight font-sans absolute top-12 inset-x-0 px-8 text-center">
//             Did you see this?
//           </span>
//         </div>
//       </div>

//       {/* --- ACTION BUTTONS AREA --- */}
//       <div ref={buttonsRef} className="w-full flex justify-around gap-x-3">
//         <button
//           onClick={handleIgnore}
//           disabled={isProcessing}
//           className="bg-[#D9394F] hover:opacity-90 active:scale-95 text-white py-3 px-8 rounded-xs text-base tracking-widest uppercase transition-all shadow-md cursor-pointer disabled:opacity-50"
//         >
//           IGNORE IT
//         </button>
//         <button
//           onClick={handleOpen}
//           disabled={isProcessing}
//           className="bg-[#222F5F] hover:opacity-90 active:scale-95 text-white py-3 px-8 rounded-xs text-base tracking-widest uppercase transition-all shadow-md cursor-pointer disabled:opacity-50"
//         >
//           OPEN IT
//         </button>
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------------

"use client";

import { useRef, useState } from "react";
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

  // ✅ Scroll helper refs
  const scrollHelperRef = useRef<HTMLDivElement>(null);
  const scrollArrowRef = useRef<HTMLSpanElement>(null);
  const scrollHaloRef = useRef<HTMLSpanElement>(null);

  // Prevent double-clicking while audio plays
  const [isProcessing, setIsProcessing] = useState(false);

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

      // ✅ Scroll helper initial state
      gsap.set(scrollHelperRef.current, {
        autoAlpha: 0,
        y: 16,
      });

      gsap.set(scrollArrowRef.current, {
        transformOrigin: "center center",
        y: 0,
        scale: 1,
        rotation: 0,
      });

      gsap.set(scrollHaloRef.current, {
        transformOrigin: "center center",
        scale: 0.7,
        autoAlpha: 0,
      });

      const startScrollHelperAnimation = () => {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) return;

        // Soft pulsing halo
        gsap.fromTo(
          scrollHaloRef.current,
          {
            scale: 0.7,
            autoAlpha: 0.45,
          },
          {
            scale: 1.55,
            autoAlpha: 0,
            duration: 1.25,
            ease: "power1.out",
            repeat: -1,
            repeatDelay: 0.25,
          },
        );

        // Playful arrow bounce
        gsap
          .timeline({
            repeat: -1,
            repeatDelay: 0.45,
          })
          .to(scrollArrowRef.current, {
            y: 6,
            scaleY: 1.2,
            rotation: 0,
            duration: 0.22,
            ease: "power2.in",
          })
          .to(scrollArrowRef.current, {
            y: -3,
            scaleY: 0.9,
            rotation: 5,
            duration: 0.18,
            ease: "power2.out",
          })
          .to(scrollArrowRef.current, {
            y: 0,
            scaleY: 1,
            rotation: 0,
            duration: 0.75,
            ease: "elastic.out(1, 0.35)",
          });
      };

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
        )

        // ✅ Scroll helper entrance
        .to(
          scrollHelperRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            onComplete: startScrollHelperAnimation,
          },
          "-=0.2",
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

    // 1. Path to your audio file
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
      className="relative w-full h-full flex flex-col justify-between items-center select-none bg-white"
    >
      {/* --- NEWSPAPER + SPEECH BUBBLE AREA --- */}
      <div
        className="relative w-full flex-1 flex flex-col items-center justify-start min-h-0 gap-y-3"
        style={{ perspective: "1200px" }}
      >
        {/* Newspaper Image */}
        <div ref={newspaperRef} className="relative w-full drop-shadow-2xl">
          <Image
            src={newspaperSrc}
            alt="Newspaper headline"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Speech Bubble Overlay */}
        <div ref={bubbleRef} className="absolute top-0 right-10">
          <Image src={speechBubble} alt="" />
          <span className="text-white font-bold text-lg leading-tight font-sans absolute top-12 inset-x-0 px-8 text-center">
            Did you see this?
          </span>
        </div>
        <div ref={buttonsRef} className="w-full flex justify-around gap-x-3">
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

      {/* --- ACTION BUTTONS AREA --- */}
      {/* <div ref={buttonsRef} className="w-full flex justify-around gap-x-3">
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
      </div> */}

      {/* ✅ Scroll helper layer */}
      <div className="pointer-events-none absolute inset-x-0 bottom-50 z-50 flex justify-center">
        {/* <div
          ref={scrollHelperRef}
          className="flex flex-col items-center gap-1.5 rounded-full border border-[#222F5F]/10 bg-white/10 px-5 py-2.5 text-[#222F5F]/70 shadow-lg backdrop-blur-sm"
        > */}
        <div
          ref={scrollHelperRef}
          className="flex flex-col items-center rounded-full bg-white/10 px-5 pt-2.5 text-brand-blue/70 shadow-sm backdrop-blur-sm"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
            what will you do?
          </span>

          <span className="relative flex h-7 w-7 items-center justify-center">
            {/* Pulsing halo */}
            <span
              ref={scrollHaloRef}
              className="absolute inset-0 rounded-full bg-brand-blue/10"
            />

            {/* Animated arrow */}
            <span ref={scrollArrowRef} className="relative inline-flex">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
