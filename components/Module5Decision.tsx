"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import channelIcon from "@/public/channel-icon.svg";
import shortcutIcon from "@/public/shortcut-icon.svg";

import channelBackIcon from "@/public/channel-back-icon.svg";
import shortcutBackIcon from "@/public/shortcut-back-icon.svg";

import starIcon from "@/public/star.svg";
import { useUIChrome } from "@/context/UIChromeContext";

// --- Cards Data ---
const cardsData = [
  {
    id: "channel",
    title: "The Channel",
    icon: channelIcon,
    side: "top",
    type: "success", // Blue
    backText:
      "The building stands; everyone is still at the table for the next round.",
    backIcon: channelBackIcon,
  },
  {
    id: "shortcut",
    title: "The Shortcut",
    icon: shortcutIcon,
    side: "bottom",
    type: "error", // Red
    backText: "The screen holds on the crack a beat longer than is comfortable",
    backIcon: shortcutBackIcon,
  },
];

interface Module5DecisionProps {
  onComplete?: () => void;
}

const Module5Decision = ({ onComplete }: Module5DecisionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const questionSectionRef = useRef<HTMLDivElement>(null);
  const revealSectionRef = useRef<HTMLDivElement>(null);

  const { setIsBuildingNavVisible } = useUIChrome();

  useEffect(() => {
    setIsBuildingNavVisible(false);
    return () => setIsBuildingNavVisible(true); // restore for every other screen
  }, [setIsBuildingNavVisible]);

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

    if (tapCountRef.current && !triggeredRef.current) {
      triggeredRef.current = true;
      setTimeout(() => {
        setRevealed(true);
      }, 3000);
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
      gsap.set(".card-top", { y: 120, opacity: 0 });
      gsap.set(".card-bottom", { y: 120, opacity: 0 });

      const tl = gsap.timeline({ delay: 2 });

      // Step 1: Move heading to top
      tl.to(headingRef.current, {
        y: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });

      // Step 2: Slide in left and right cards
      tl.to(
        ".card-top",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          //   stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.2",
      ).to(".card-bottom", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        //   stagger: 0.12,
        ease: "power2.out",
      });
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
      className="shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2)] border border-neutral-300 text-brand-blue relative z-99 h-full w-full select-none overflow-hidden"
    >
      {/* Question + cards section */}
      <div
        ref={questionSectionRef}
        className="absolute inset-0 px-6 py-10 flex flex-col justify-between"
      >
        <h2
          ref={headingRef}
          className="font-bold text-xl text-white text-center tracking-tight z-10"
        >
          The race is close, and you believe something went wrong. Which way?
        </h2>

        {/* Grid container for cards */}
        <div className="grid grid-cols-1 gap-4 mt-8 flex-1">
          {cardsData.map((card) => {
            const isFlipped = !!flippedCards[card.id];
            const sideClass = card.side === "top" ? "card-top" : "card-bottom";

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
                    className="absolute inset-0 border border-white text-white flex flex-col items-center justify-center p-1.5 text-center transition-colors"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <div className="mb-3">
                      <Image src={card.icon} alt="" />
                    </div>
                    <span className="font-bold text-xl">{card.title}</span>
                  </div>

                  {/* Back Side */}
                  <div
                    className={`absolute inset-0 border border-white text-white flex flex-col gap-8 items-center justify-center text-center shadow-lg ${card.id === "mail-in" ? "p-4" : "py-6 px-3"} ${
                      card.type === "error" ? "bg-[#D9394F]" : "bg-[#4463AA]"
                    }`}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <Image
                      src={
                        card.id === "channel"
                          ? channelBackIcon
                          : shortcutBackIcon
                      }
                      alt=""
                    />
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
          className="absolute inset-0 px-8 py-10 flex flex-col items-center justify-center gap-y-8 opacity-0 text-white"
          style={{ pointerEvents: revealed ? "auto" : "none" }}
        >
          <Image src={starIcon} alt="" className="w-24 h-24" />
          <p className="font-bold text-lg text-center leading-snug">
            The channel doesn&apos;t always give you the answer you want.
            <br />
            <br />
            It gives you an answer everyone can verify and that&apos;s the only
            kind that holds
          </p>
          <button
            onClick={onComplete}
            className="w-full py-3 bg-[#4463AA] text-white font-bold tracking-wide cursor-pointer"
          >
            CONTINUE
          </button>
        </div>
      )}
    </div>
  );
};

export default Module5Decision;
