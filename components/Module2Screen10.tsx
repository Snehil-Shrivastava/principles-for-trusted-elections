"use client";

import Image from "next/image";
import shareCard from "@/public/share-card.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useScreenNav } from "@/context/ScreenNavContext";

gsap.registerPlugin(useGSAP);

const Module2Screen10 = () => {
  const containerRef = useRef(null);

  const { goTo } = useScreenNav();

  useGSAP(
    () => {
      gsap.set(".share-img", {
        opacity: 0,
        yPercent: 25,
      });

      gsap.set(".share-btn", {
        opacity: 0,
        yPercent: 50,
      });

      gsap.set(".hold-btn", {
        opacity: 0,
        yPercent: 50,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
        },
      });

      tl.to(".share-img", {
        opacity: 1,
        yPercent: 0,
        duration: 1.2,
        delay: 0.5,
      })
        .to(".share-btn", {
          opacity: 1,
          yPercent: 0,
          duration: 0.6,
        })
        .to(".hold-btn", {
          opacity: 1,
          yPercent: 0,
          duration: 0.6,
        });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden relative">
      <Image
        src={shareCard}
        alt=""
        className="relative select-none opacity-0 share-img scale-60 top-40"
      />
      <div className="absolute inset-x-0 bottom-0 pb-12">
        <div className="flex flex-col gap-8 justify-between items-center text-white select-none">
          <button
            onClick={() => goTo(10)}
            className="uppercase bg-brand-pink w-35 py-2.5 border border-white tracking-widest share-btn opacity-0 cursor-pointer"
          >
            <span>share</span>
          </button>
          <button
            onClick={() => goTo(12)}
            className="uppercase bg-brand-blue w-35 py-2.5 border border-white tracking-widest hold-btn opacity-0 cursor-pointer"
          >
            <span>hold on</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Module2Screen10;
