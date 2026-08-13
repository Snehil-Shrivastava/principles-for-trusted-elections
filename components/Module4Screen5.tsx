// import Image from "next/image";
// import chat4 from "@/public/mobile-chat4.svg";

// import repostIcon from "@/public/repost-icon.svg";
// import askIcon from "@/public/ask-icon.svg";
// import reportIcon from "@/public/report-icon.svg";

// const Module4Screen4 = () => {
//   return (
//     <div className="w-full h-full overflow-hidden relative text-brand-blue">
//       <Image
//         src={chat4}
//         alt=""
//         className="relative select-none mx-auto -top-5 scale-62"
//       />
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-777 flex flex-col justify-center items-center gap-12">
//         <div className="bg-white flex flex-col items-center px-3 py-5.5 gap-2.5 w-38">
//           <div>
//             <Image src={repostIcon} alt="" />
//           </div>
//           <div className="flex flex-col items-center justify-center">
//             <span className="font-bold text-lg">Repost</span>
//             <span className="text-[10px]">Better safe than sorry</span>
//           </div>
//         </div>

//         <div className="bg-white flex flex-col items-center px-3 py-5.5 gap-2.5 w-38">
//           <div>
//             <Image src={askIcon} alt="" />
//           </div>
//           <div className="flex flex-col items-center justify-center">
//             <span className="font-bold text-lg">Ask</span>
//             <span className="text-[10px]">Where&apos;s this from?</span>
//           </div>
//         </div>

//         <div className="bg-white flex flex-col items-center px-3 py-5.5 gap-2.5 w-38">
//           <div>
//             <Image src={reportIcon} alt="" />
//           </div>
//           <div className="flex flex-col items-center justify-center text-brand-red">
//             <span className="font-bold text-lg">Report</span>
//             <span className="text-[10px]">Look up the official channel</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module4Screen4;

// -----------------------------------------

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import chat4 from "@/public/mobile-chat4.svg";

// import repostIcon from "@/public/repost-icon.svg";
// import askIcon from "@/public/ask-icon.svg";
// import reportIcon from "@/public/report-icon.svg";

// interface Module4Screen5Props {
//   onComplete?: () => void;
// }

// const cardsData = [
//   {
//     id: "repost",
//     icon: repostIcon,
//     title: "Repost",
//     subtitle: "Better safe than sorry",
//     backText:
//       "Now four hundred more people are alarmed, and nobody knows anything more than before. And showing up uninvited to 'keep watch' at a polling place can cross into voter intimidation — which is a crime.",
//   },
//   {
//     id: "ask",
//     icon: askIcon,
//     title: "Ask",
//     subtitle: "Where's this from?",
//     backText:
//       "Good instinct. 'My cousin saw it' melts fast under one question. Most rumors can't survive 'how do you know?'",
//   },
//   {
//     id: "report",
//     icon: reportIcon,
//     title: "Report",
//     subtitle: "Look up the official channel",
//     backText:
//       "That's the move. Every state has channels built for exactly this — poll supervisors, county election offices, hotlines. Concerns get investigated by people with the authority to actually check.",
//     isRed: true,
//   },
// ];

// const Module4Screen5 = ({ onComplete }: Module4Screen5Props) => {
//   const [selectedCard, setSelectedCard] = useState<string | null>(null);

//   const handleSelectCard = (id: string) => {
//     // Prevent changing selection once a card is picked
//     if (selectedCard !== null) return;
//     setSelectedCard(id);
//   };

//   // Wait 3 seconds after selection, then advance
//   useEffect(() => {
//     if (!selectedCard) return;

//     const timer = setTimeout(() => {
//       onComplete?.();
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [selectedCard, onComplete]);

//   return (
//     <div className="w-full h-full overflow-hidden relative text-brand-blue">
//       <Image
//         src={chat4}
//         alt=""
//         className="relative select-none mx-auto -top-5 scale-62"
//       />
//       <div
//         className={`absolute inset-0 bg-black/40 backdrop-blur-sm z-777 flex flex-col justify-center items-center gap-12 ${
//           selectedCard ? "pointer-events-none" : ""
//         }`}
//       >
//         {cardsData.map((card) => {
//           const isFlipped = selectedCard === card.id;

//           return (
//             <div
//               key={card.id}
//               className="cursor-pointer w-38"
//               style={{ perspective: "1000px" }}
//               onClick={() => handleSelectCard(card.id)}
//             >
//               <div
//                 className="relative w-full h-full min-h-[130px] duration-500 ease-in-out"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
//                   transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
//                 }}
//               >
//                 {/* Front Side */}
//                 <div
//                   className="absolute inset-0 bg-white flex flex-col items-center px-3 py-5.5 gap-2.5"
//                   style={{
//                     backfaceVisibility: "hidden",
//                     WebkitBackfaceVisibility: "hidden",
//                   }}
//                 >
//                   <div>
//                     <Image src={card.icon} alt="" />
//                   </div>
//                   <div className="flex flex-col items-center justify-center">
//                     <span
//                       className={`font-bold text-lg ${
//                         card.isRed ? "text-brand-red" : ""
//                       }`}
//                     >
//                       {card.title}
//                     </span>
//                     <span className="text-[10px]">{card.subtitle}</span>
//                   </div>
//                 </div>

//                 {/* Back Side */}
//                 <div
//                   className="absolute inset-0 bg-[#4463AA] text-white flex flex-col items-center justify-center text-center p-4 shadow-lg"
//                   style={{
//                     backfaceVisibility: "hidden",
//                     WebkitBackfaceVisibility: "hidden",
//                     transform: "rotateY(180deg)",
//                   }}
//                 >
//                   <p className="text-xs leading-relaxed text-neutral-100">
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

// export default Module4Screen5;

// ------------------------------------------------

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import chat4 from "@/public/mobile-chat4.svg";

import repostIcon from "@/public/repost-icon.svg";
import askIcon from "@/public/ask-icon.svg";
import reportIcon from "@/public/report-icon.svg";

gsap.registerPlugin(useGSAP);

interface Module4Screen5Props {
  onComplete?: () => void;
}

const cardsData = [
  {
    id: "repost",
    icon: repostIcon,
    title: "Repost",
    subtitle: "Better safe than sorry",
    type: "error", // Red
    feedback:
      "Now four hundred more people are alarmed, and nobody knows anything more than before. And showing up uninvited to 'keep watch' at a polling place can cross into voter intimidation — which is a crime.",
  },
  {
    id: "ask",
    icon: askIcon,
    title: "Ask",
    subtitle: "Where's this from?",
    type: "success", // Blue
    feedback:
      "Good instinct. 'My cousin saw it' melts fast under one question. Most rumors can't survive 'how do you know?'",
  },
  {
    id: "report",
    icon: reportIcon,
    title: "Report",
    subtitle: "Look up the official channel",
    type: "success", // Blue
    feedback:
      "That's the move. Every state has channels built for exactly this — poll supervisors, county election offices, hotlines. Concerns get investigated by people with the authority to actually check.",
  },
];

// Fixed collapsed/expanded box sizes in px — tune these against real copy length
const COLLAPSED_WIDTH = 152;
const COLLAPSED_HEIGHT = 160;
const EXPANDED_WIDTH = 250;
const EXPANDED_HEIGHT = 170;

const Module4Screen5 = ({ onComplete }: Module4Screen5Props) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const flipperRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleSelectCard = (id: string) => {
    // Prevent changing selection once a card is picked
    if (selectedCard !== null) return;
    setSelectedCard(id);
  };

  // Flip + resize the selected card together, on one timeline
  useGSAP(() => {
    if (!selectedCard) return;

    const cardEl = cardRefs.current[selectedCard];
    const flipperEl = flipperRefs.current[selectedCard];
    if (!cardEl || !flipperEl) return;

    const tl = gsap.timeline();

    tl.to(
      cardEl,
      {
        width: EXPANDED_WIDTH,
        height: EXPANDED_HEIGHT,
        duration: 0.6,
        ease: "power2.inOut",
      },
      0,
    ).to(
      flipperEl,
      {
        rotationY: 180,
        duration: 0.6,
        ease: "power2.inOut",
      },
      0,
    );
  }, [selectedCard]);

  // Wait 3 seconds after selection, then advance
  useEffect(() => {
    if (!selectedCard) return;

    const timer = setTimeout(() => {
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [selectedCard, onComplete]);

  return (
    <div className="w-full h-full overflow-hidden relative text-brand-blue">
      <Image
        src={chat4}
        alt=""
        className="relative select-none mx-auto -top-5 scale-62"
      />
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm z-777 flex flex-col justify-center items-center gap-8 select-none ${
          selectedCard ? "pointer-events-none" : ""
        }`}
      >
        {cardsData.map((card) => (
          <div
            key={card.id}
            ref={(el) => {
              cardRefs.current[card.id] = el;
            }}
            onClick={() => handleSelectCard(card.id)}
            style={{
              width: COLLAPSED_WIDTH,
              height: COLLAPSED_HEIGHT,
              perspective: "1000px",
            }}
            className="cursor-pointer"
          >
            <div
              ref={(el) => {
                flipperRefs.current[card.id] = el;
              }}
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div
                className="absolute inset-0 bg-white flex flex-col items-center justify-center px-3 py-5.5 gap-2.5"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div>
                  <Image src={card.icon} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span
                    className={`font-bold text-lg ${
                      card.id === "report" ? "text-brand-red" : ""
                    }`}
                  >
                    {card.title}
                  </span>
                  <span className="text-[10px]">{card.subtitle}</span>
                </div>
              </div>

              {/* Back Side */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-4 ${
                  card.type === "error" ? "bg-[#D9394F]" : "bg-[#4463AA]"
                }`}
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <p className="text-xs leading-relaxed text-white">
                  {card.feedback}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Module4Screen5;
