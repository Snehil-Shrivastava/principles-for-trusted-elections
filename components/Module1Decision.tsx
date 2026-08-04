"use client";

import Image from "next/image";
import resultSVG from "@/public/result.svg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import certifySVG from "@/public/certify.svg";
import electionBoardSVG from "@/public/election-board.svg";
import legalProcessSVG from "@/public/legal-process.svg";

import incorrectSVG from "@/public/incorrect.svg";
import correctSVG from "@/public/correct.svg";

gsap.registerPlugin(useGSAP);

interface Module1DecisionProps {
  onComplete?: () => void;
}

const optionsData = [
  {
    id: "certify",
    text: "Certify it — the winner was declared and the loser has conceded",
    icon: certifySVG,
    type: "error", // Red
    title: "Not Quite",
    feedback:
      "The press can choose a winner and candidates can concede, but they do not control the result. Certification is the legal act that makes a result official — and officials have to be able to certify with confidence.",
  },
  {
    id: "board",
    text: "The Board of Elections should choose the winner based on party affiliation",
    icon: electionBoardSVG,
    type: "error", // Red
    title: "Incorrect",
    feedback:
      "The Board of Elections is legally bound to choose the winner based on who received the most votes. Selecting a winner based on partisan preference is illegal and would be overthrown in court.",
  },
  {
    id: "legal",
    text: "Use the legal process to investigate before certifying",
    icon: legalProcessSVG,
    type: "success", // Blue
    title: "Right",
    feedback:
      "When credible concerns arise, the answer is evidence, authority, and procedure — not rumors, pressure, or guesswork.",
  },
];

const Module1Decision = ({ onComplete }: Module1DecisionProps) => {
  const questionContainerRef = useRef(null);
  const questionInnerContainerRef = useRef(null);
  const svgImgRef = useRef(null);
  const svgRef = useRef(null);
  const statementRef = useRef(null);
  const optionsContainerRef = useRef(null);
  const questionRef = useRef(null);

  const optionRefs = useRef([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Handle option selection
  const handleSelectOption = (id: string) => {
    // Prevent changing selection once an option is picked
    if (selectedOption !== null) return;
    setSelectedOption(id);
  };

  // Wait for 2 seconds after option selection then trigger onComplete
  useEffect(() => {
    if (!selectedOption) return;

    const timer = setTimeout(() => {
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [selectedOption, onComplete]);

  useGSAP(
    () => {
      gsap.set(svgImgRef.current, {
        y: 100,
        opacity: 0,
      });

      gsap.set(statementRef.current, {
        y: 100,
        opacity: 0,
      });

      gsap.set(questionRef.current, {
        opacity: 0,
        y: 100,
        paddingTop: 60,
        paddingBottom: 60,
      });

      gsap.set(optionsContainerRef.current, {
        height: 0,
        opacity: 0,
      });

      gsap.set(optionRefs.current, {
        opacity: 0,
        yPercent: 50,
      });

      const tl = gsap.timeline({
        delay: 0.2,
      });

      tl.to(svgImgRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
      })
        .to(statementRef.current, {
          y: 0,
          opacity: 1,
        })
        .to(questionRef.current, {
          y: 0,
          opacity: 1,
        })

        .to({}, { duration: 0.8 })

        .to(svgImgRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(
          svgRef.current,
          { opacity: 0, duration: 0.6, ease: "power2.inOut" },
          "<",
        )
        .to(
          questionRef.current,
          {
            paddingBottom: 0,
            paddingTop: 0,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          questionInnerContainerRef.current,
          {
            flexGrow: 1,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          optionsContainerRef.current,
          {
            height: "auto",
            opacity: 1,
            duration: 0.6,
            flex: 1,
            ease: "power2.inOut",
          },
          "<",
        );

      tl.to(
        optionRefs.current,
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2",
      );
    },
    { scope: questionContainerRef },
  );

  return (
    <div
      ref={questionContainerRef}
      className="shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2)] border border-neutral-300 px-10 text-brand-blue h-161.25 w-full py-8 flex flex-col justify-center overflow-hidden bg-white select-none relative z-99"
    >
      <div
        ref={questionInnerContainerRef}
        className="text-center flex flex-col gap-y-3"
      >
        <div className="flex flex-col gap-y-5">
          <div ref={svgImgRef} className="opacity-0 overflow-hidden">
            <Image ref={svgRef} src={resultSVG} alt="" className="mx-auto" />
          </div>
          <h2 ref={statementRef} className="font-bold text-xl opacity-0">
            The result is close, and serious questions have been raised.
          </h2>
        </div>
        <span ref={questionRef} className="text-lg py-15">
          What should happen next ?
        </span>

        {/* Options Container - pointer-events-none added when selectedOption is set */}
        <div
          ref={optionsContainerRef}
          className={`w-full h-0 flex flex-col gap-y-3 justify-around py-5 ${
            selectedOption ? "pointer-events-none" : ""
          }`}
        >
          {optionsData.map((option, index) => {
            const isSelected = selectedOption === option.id;

            return (
              <div
                ref={(el) => {
                  // @ts-expect-error random
                  optionRefs.current[index] = el;
                }}
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className={`p-4 border rounded-sm transition-all duration-300 ease-in-out shadow-xs ${
                  selectedOption === null ? "cursor-pointer" : "cursor-default"
                } ${
                  isSelected
                    ? option.type === "error"
                      ? "bg-[#D9394F] border-[#D9394F] text-white" // Red Incorrect State
                      : "bg-[#4463AA] border-[#4463AA] text-white" // Blue Correct State
                    : "bg-white border-neutral-200 hover:border-neutral-400 hover:shadow-xs text-[#1A2B56]"
                }`}
              >
                {isSelected ? (
                  /* --- FEEDBACK CARD STATE (Selected) --- */
                  <div className="flex flex-col items-center text-center py-1">
                    <div className="flex items-center gap-x-2 text-xl font-bold mb-2">
                      <Image
                        src={
                          option.type === "error" ? incorrectSVG : correctSVG
                        }
                        alt=""
                        className="w-5 h-5 object-contain"
                      />
                      <span>{option.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed px-1 opacity-95">
                      {option.feedback}
                    </p>
                  </div>
                ) : (
                  /* --- NORMAL OPTION STATE --- */
                  <div className="flex items-center gap-x-4">
                    <div className="shrink-0">
                      <Image src={option.icon} alt="" />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-brand-blue leading-snug text-left">
                      {option.text}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Module1Decision;
