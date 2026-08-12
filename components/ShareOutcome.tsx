"use client";

import Image from "next/image";
import shareOutcome from "@/public/share-outcome.svg";
import { useUIChrome } from "@/context/UIChromeContext";
import { useEffect } from "react";

const ShareOutcome = () => {
  const { setIsBuildingNavVisible } = useUIChrome();

  useEffect(() => {
    setIsBuildingNavVisible(false);
    return () => setIsBuildingNavVisible(true); // restore for every other screen
  }, [setIsBuildingNavVisible]);

  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={shareOutcome}
        alt=""
        className="relative select-none mx-auto top-8 scale-105"
      />
    </div>
  );
};

export default ShareOutcome;
