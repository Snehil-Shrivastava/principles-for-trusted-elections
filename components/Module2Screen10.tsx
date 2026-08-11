"use client";

import Image from "next/image";
import module2screen10 from "@/public/Module2Screen10.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Module2Screen10 = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".share-img", {
        opacity: 0,
        yPercent: 25,
      });

      gsap.to(".share-img", {
        opacity: 1,
        yPercent: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden">
      <Image
        src={module2screen10}
        alt=""
        className="relative select-none opacity-0 share-img"
      />
    </div>
  );
};

export default Module2Screen10;
