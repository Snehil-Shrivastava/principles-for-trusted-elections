"use client";

import BuildingNav from "@/components/BuildingNav";
import GridSVG from "@/components/GridSVG";
import ProgressBar from "@/components/ProgressBar";
import { useProgress } from "@/context/ProgressContext";
import { useUIChrome } from "@/context/UIChromeContext";
import React from "react";

const Module6Layout = ({ children }: { children: React.ReactNode }) => {
  const { progress } = useProgress();
  const { isBuildingNavVisible } = useUIChrome();
  return (
    <div className="relative w-full h-full">
      <GridSVG />
      <div className="absolute inset-0">
        {isBuildingNavVisible && (
          <ProgressBar
            className="absolute top-0 left-0 z-10 w-65"
            progress={progress}
          />
        )}
        {isBuildingNavVisible && (
          <BuildingNav className="absolute top-6 right-4 w-20 pointer-events-none z-99" />
        )}
        {children}
      </div>
    </div>
  );
};

export default Module6Layout;
