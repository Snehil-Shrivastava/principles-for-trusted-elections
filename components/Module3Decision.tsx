// // const Module3Decision = () => {
// //   return (
// //     <div className="shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2)] border border-neutral-300 px-10 py-8 bg-white text-brand-blue relative z-99 h-full w-full select-none">
// //       <h2 className="font-bold text-xl text-center">
// //         Where do you think a ballot is most vulnerable?
// //       </h2>
// //       <div>{/* cards go here */}</div>
// //     </div>
// //   );
// // };

// // export default Module3Decision;

// // ----------------------------------------------

// import React, { useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import Image from "next/image";

// import machineIcon from "@/public/machine-icon.svg";
// import dropboxIcon from "@/public/dropbox-icon.svg";
// import transferIcon from "@/public/transfer-icon.svg";
// import mailinBallotIcon from "@/public/mailin-ballot-icon.svg";
// import internetIcon from "@/public/internet-icon.svg";
// import countIcon from "@/public/count-icon.svg";
// import safeIconSVG from "@/public/secured-safe.svg";

// // --- Cards Data ---
// const cardsData = [
//   {
//     id: "machine",
//     title: "The Machine",
//     icon: machineIcon,
//     side: "left",
//     backText: "Public logic and accuracy testing, before every election",
//   },
//   {
//     id: "drop-box",
//     title: "The Drop Box",
//     icon: dropboxIcon,
//     side: "right",
//     backText: "Cameras, seals, and scheduled bipartisan pickup teams",
//   },
//   {
//     id: "transfer",
//     title: "The Transfer",
//     icon: transferIcon,
//     side: "left",
//     backText: "Two-person teams, signed custody logs, sealed containers",
//   },
//   {
//     id: "mail-in",
//     title: "The Mail-in Ballot",
//     icon: mailinBallotIcon,
//     side: "right",
//     backText:
//       "Signatures verified against voter registration records by software and trained human reviewers. In many states, if something doesn't match, voters are notified and have a chance to fix it before their ballot is rejected",
//   },
//   {
//     id: "internet",
//     title: "The Internet",
//     icon: internetIcon,
//     side: "left",
//     backText: "Voting systems not connected. No remote access to hack.",
//   },
//   {
//     id: "count",
//     title: "The Count",
//     icon: countIcon,
//     side: "right",
//     backText: "Audits that check machine totals against the paper",
//   },
// ];

// const Module3Decision = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLHeadingElement>(null);

//   // Tracks flipped state for each card
//   const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>(
//     {},
//   );

//   const handleCardClick = (id: string) => {
//     setFlippedCards((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   useGSAP(
//     () => {
//       if (!containerRef.current || !headingRef.current) return;

//       const containerHeight = containerRef.current.offsetHeight;
//       const headingHeight = headingRef.current.offsetHeight;

//       // Calculate initial position to center the heading vertically inside the box
//       const centerOffsetY = containerHeight / 2 - headingHeight / 2 - 32;

//       // Initial state
//       gsap.set(headingRef.current, { y: centerOffsetY });
//       gsap.set(".card-left", { x: -120, opacity: 0 });
//       gsap.set(".card-right", { x: 120, opacity: 0 });

//       const tl = gsap.timeline({ delay: 2 });

//       // Step 1: Move heading to top
//       tl.to(headingRef.current, {
//         y: 0,
//         duration: 0.8,
//         ease: "power3.inOut",
//       });

//       // Step 2: Slide in left and right cards
//       tl.to(
//         ".card-left",
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.6,
//           stagger: 0.12,
//           ease: "power2.out",
//         },
//         "-=0.2",
//       ).to(
//         ".card-right",
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.6,
//           stagger: 0.12,
//           ease: "power2.out",
//         },
//         "<",
//       );
//     },
//     { scope: containerRef },
//   );

//   return (
//     <div
//       ref={containerRef}
//       className="shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2)] border border-neutral-300 px-6 py-10 bg-white text-brand-blue relative z-99 h-full w-full select-none flex flex-col justify-between overflow-hidden"
//     >
//       <h2
//         ref={headingRef}
//         className="font-bold text-xl text-[#0B2545] text-center tracking-tight z-10"
//       >
//         Where do you think a ballot is most vulnerable?
//       </h2>

//       {/* Grid container for cards */}
//       <div className="grid grid-cols-2 gap-4 mt-8 flex-1">
//         {cardsData.map((card) => {
//           const isFlipped = !!flippedCards[card.id];
//           const sideClass = card.side === "left" ? "card-left" : "card-right";

//           return (
//             <div
//               key={card.id}
//               className={`cursor-pointer ${sideClass}`}
//               style={{ perspective: "1000px" }}
//               onClick={() => handleCardClick(card.id)}
//             >
//               <div
//                 className="relative w-full h-full min-h-[160px] duration-500 ease-in-out"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
//                   transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
//                 }}
//               >
//                 {/* Front Side */}
//                 <div
//                   className="absolute inset-0 border border-neutral-300 bg-white flex flex-col items-center justify-center p-1.5 text-center hover:border-[#4463AA] transition-colors"
//                   style={{
//                     backfaceVisibility: "hidden",
//                     WebkitBackfaceVisibility: "hidden",
//                   }}
//                 >
//                   <div className="text-[#0B2545] mb-3">
//                     <Image src={card.icon} alt="" />
//                   </div>
//                   <span className="font-bold text-[#0B2545] text-sm">
//                     {card.title}
//                   </span>
//                 </div>

//                 {/* Back Side */}
//                 <div
//                   className={`absolute inset-0 border border-[#4463AA] bg-[#4463AA] text-white flex flex-col items-center justify-center text-center shadow-lg ${card.id === "mail-in" ? "p-4" : "p-6"}`}
//                   style={{
//                     backfaceVisibility: "hidden",
//                     WebkitBackfaceVisibility: "hidden",
//                     transform: "rotateY(180deg)",
//                   }}
//                 >
//                   <p
//                     className={`${card.id === "mail-in" ? "text-[9px] leading-1" : "text-xs"} leading-relaxed text-neutral-100`}
//                   >
//                     {card.backText}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Module3Decision;

// -------------- new

"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import machineIcon from "@/public/machine-icon.svg";
import dropboxIcon from "@/public/dropbox-icon.svg";
import transferIcon from "@/public/transfer-icon.svg";
import mailinBallotIcon from "@/public/mailin-ballot-icon.svg";
import internetIcon from "@/public/internet-icon.svg";
import countIcon from "@/public/count-icon.svg";
import safeIconSVG from "@/public/secured-safe.svg";

// --- Cards Data ---
const cardsData = [
  {
    id: "machine",
    title: "The Machine",
    icon: machineIcon,
    side: "left",
    backText: "Public logic and accuracy testing, before every election",
  },
  {
    id: "drop-box",
    title: "The Drop Box",
    icon: dropboxIcon,
    side: "right",
    backText: "Cameras, seals, and scheduled bipartisan pickup teams",
  },
  {
    id: "transfer",
    title: "The Transfer",
    icon: transferIcon,
    side: "left",
    backText: "Two-person teams, signed custody logs, sealed containers",
  },
  {
    id: "mail-in",
    title: "The Mail-in Ballot",
    icon: mailinBallotIcon,
    side: "right",
    backText:
      "Signatures verified against voter registration records by software and trained human reviewers. In many states, if something doesn't match, voters are notified and have a chance to fix it before their ballot is rejected",
  },
  {
    id: "internet",
    title: "The Internet",
    icon: internetIcon,
    side: "left",
    backText: "Voting systems not connected. No remote access to hack.",
  },
  {
    id: "count",
    title: "The Count",
    icon: countIcon,
    side: "right",
    backText: "Audits that check machine totals against the paper",
  },
];

interface Module3DecisionProps {
  onComplete?: () => void;
}

const Module3Decision = ({ onComplete }: Module3DecisionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const questionSectionRef = useRef<HTMLDivElement>(null);
  const revealSectionRef = useRef<HTMLDivElement>(null);

  // Tracks flipped state for each card
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [revealed, setRevealed] = useState(false);

  const tapCountRef = useRef(0);
  const triggeredRef = useRef(false);

  const handleCardClick = (id: string) => {
    if (revealed) return; // ignore taps once we've moved on to the reveal

    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    tapCountRef.current += 1;

    if (tapCountRef.current >= 2 && !triggeredRef.current) {
      triggeredRef.current = true;
      setTimeout(() => {
        setRevealed(true);
      }, 2000);
    }
  };

  // Intro animation: heading centers then moves up, cards slide in
  useGSAP(
    () => {
      if (!containerRef.current || !headingRef.current) return;

      const containerHeight = containerRef.current.offsetHeight;
      const headingHeight = headingRef.current.offsetHeight;

      // Calculate initial position to center the heading vertically inside the box
      const centerOffsetY = containerHeight / 2 - headingHeight / 2 - 32;

      // Initial state
      gsap.set(headingRef.current, { y: centerOffsetY });
      gsap.set(".card-left", { x: -120, opacity: 0 });
      gsap.set(".card-right", { x: 120, opacity: 0 });

      const tl = gsap.timeline({ delay: 2 });

      // Step 1: Move heading to top
      tl.to(headingRef.current, {
        y: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });

      // Step 2: Slide in left and right cards
      tl.to(
        ".card-left",
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.2",
      ).to(
        ".card-right",
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
        },
        "<",
      );
    },
    { scope: containerRef },
  );

  // Crossfade: question + cards fade out, reveal content slides in from below
  useGSAP(
    () => {
      if (!revealed) return;

      const tl = gsap.timeline();

      tl.to(questionSectionRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });

      gsap.set(revealSectionRef.current, { opacity: 0, y: 100 });
      tl.to(revealSectionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { dependencies: [revealed], scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2)] border border-neutral-300 bg-white text-brand-blue relative z-99 h-full w-full select-none overflow-hidden"
    >
      {/* Question + cards section */}
      <div
        ref={questionSectionRef}
        className="absolute inset-0 px-6 py-10 flex flex-col justify-between"
      >
        <h2
          ref={headingRef}
          className="font-bold text-xl text-[#0B2545] text-center tracking-tight z-10"
        >
          Where do you think a ballot is most vulnerable?
        </h2>

        {/* Grid container for cards */}
        <div className="grid grid-cols-2 gap-4 mt-8 flex-1">
          {cardsData.map((card) => {
            const isFlipped = !!flippedCards[card.id];
            const sideClass = card.side === "left" ? "card-left" : "card-right";

            return (
              <div
                key={card.id}
                className={`cursor-pointer ${sideClass}`}
                style={{ perspective: "1000px" }}
                onClick={() => handleCardClick(card.id)}
              >
                <div
                  className="relative w-full h-full duration-500 ease-in-out"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 border border-neutral-300 bg-white flex flex-col items-center justify-center p-1.5 text-center hover:border-[#4463AA] transition-colors"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <div className="text-[#0B2545] mb-3">
                      <Image src={card.icon} alt="" />
                    </div>
                    <span className="font-bold text-[#0B2545] text-sm">
                      {card.title}
                    </span>
                  </div>

                  {/* Back Side */}
                  <div
                    className={`absolute inset-0 border border-[#4463AA] bg-[#4463AA] text-white flex flex-col items-center justify-center text-center shadow-lg ${card.id === "mail-in" ? "p-4" : "p-6"}`}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p
                      className={`${card.id === "mail-in" ? "text-[9px] leading-1" : "text-xs"} leading-relaxed text-neutral-100`}
                    >
                      {card.backText}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reveal section */}
      {revealed && (
        <div
          ref={revealSectionRef}
          className="absolute inset-0 px-8 py-10 flex flex-col items-center justify-center gap-y-8 opacity-0"
          style={{ pointerEvents: revealed ? "auto" : "none" }}
        >
          <Image src={safeIconSVG} alt="" className="w-24 h-24" />
          <p className="font-bold text-lg text-[#0B2545] text-center leading-snug">
            Trick question. Every point has a lock on it.
            <br />
            That&apos;s the design, no single point of failure.
          </p>
          <button
            onClick={onComplete}
            className="w-full py-3 bg-[#1A2B56] text-white font-bold tracking-wide cursor-pointer"
          >
            CONTINUE
          </button>
        </div>
      )}
    </div>
  );
};

export default Module3Decision;
