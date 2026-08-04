// import GridSVG from "@/components/GridSVG";
// import NavBuildingBlank from "@/components/NavBuildingBlank";
// import ProgressBar from "@/components/ProgressBar";

// const MOdule1Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="relative w-full h-full">
//       <GridSVG />
//       <div className="absolute inset-0">
//         <ProgressBar className="absolute top-0 left-0 z-10 w-65" progress={8} />
//         <NavBuildingBlank className="absolute top-0 right-0 w-25 pointer-events-none" />
//         {children}
//       </div>
//     </div>
//   );
// };

// export default MOdule1Layout;

// ---------------------------------------

"use client";

import { createContext, useContext, useState } from "react";
import GridSVG from "@/components/GridSVG";
import NavBuildingBlank from "@/components/NavBuildingBlank";
import ProgressBar from "@/components/ProgressBar";

// 1. Create Context
interface ProgressContextType {
  progress: number;
  setProgress: (value: number) => void;
}

const ProgressContext = createContext<ProgressContextType>({
  progress: 8,
  setProgress: () => {},
});

// Custom hook to consume progress context easily
export const useProgress = () => useContext(ProgressContext);

const MOdule1Layout = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(8);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      <div className="relative w-full h-full">
        <GridSVG />
        <div className="absolute inset-0">
          <ProgressBar
            className="absolute top-0 left-0 z-10 w-65"
            progress={progress}
          />
          <NavBuildingBlank className="absolute top-0 right-0 w-25 pointer-events-none" />
          {children}
        </div>
      </div>
    </ProgressContext.Provider>
  );
};

export default MOdule1Layout;
