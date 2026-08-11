"use client";

import React, { useEffect } from "react";
import { useProgress } from "@/context/ProgressContext";
import GridSVG from "@/components/GridSVG";
import ProgressBar from "@/components/ProgressBar";
import BuildingNav from "@/components/BuildingNav";

const Module2Layout = ({ children }: { children: React.ReactNode }) => {
  const { setProgress, progress } = useProgress();
  useEffect(() => {
    setProgress(28);
  }, [progress]);
  return (
    <div className="relative w-full h-full">
      <GridSVG />
      <div className="absolute inset-0">
        <ProgressBar
          className="absolute top-0 left-0 z-10 w-65"
          progress={progress}
        />
        <BuildingNav className="absolute top-6 right-4 w-20 pointer-events-none z-99" />
        {children}
      </div>
    </div>
  );
};

export default Module2Layout;
