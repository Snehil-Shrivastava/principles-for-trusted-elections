"use client";

import Image from "next/image";
import USAMapImg from "@/public/USAMap.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const IntroMap = () => {
  useGSAP(() => {
    gsap.set(".usa-map", {
      opacity: 0,
      scale: 0.9,
    });

    gsap.to(".usa-map", {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div>
      <Image
        src={USAMapImg}
        alt="USA Map"
        className="usa-map opacity-0 scale-0"
      />
    </div>
  );
};

export default IntroMap;
