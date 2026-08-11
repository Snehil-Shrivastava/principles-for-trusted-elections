"use client";

import Image from "next/image";
import voted from "@/public/vote-v2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const IntroCrowdVoted = () => {
  useGSAP(() => {
    gsap.set(".usa-map", {
      opacity: 0,
      //   scale: 0.9,
    });

    gsap.to(".usa-map", {
      opacity: 1,
      //   scale: 1,
      duration: 1.2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div>
      <Image src={voted} alt="USA Map" className="usa-map opacity-0" />
    </div>
  );
};

export default IntroCrowdVoted;
