// "use client";

// import { createContext, useContext, useState } from "react";
// import GridSVG from "@/components/GridSVG";
// import ProgressBar from "@/components/ProgressBar";
// import BuildingNav from "@/components/BuildingNav";

// // 1. Create Context
// interface ProgressContextType {
//   progress: number;
//   setProgress: (value: number) => void;
// }

// const ProgressContext = createContext<ProgressContextType>({
//   progress: 8,
//   setProgress: () => {},
// });

// // Custom hook to consume progress context easily
// export const useProgress = () => useContext(ProgressContext);

// const MOdule1Layout = ({ children }: { children: React.ReactNode }) => {
//   const [progress, setProgress] = useState(8);

//   return (
//     <ProgressContext.Provider value={{ progress, setProgress }}>
//       <div className="relative w-full h-full">
//         <GridSVG />
//         <div className="absolute inset-0">
//           <ProgressBar
//             className="absolute top-0 left-0 z-10 w-65"
//             progress={progress}
//           />
//           <BuildingNav className="absolute top-6 right-4 w-20 pointer-events-none z-99" />
//           {children}
//         </div>
//       </div>
//     </ProgressContext.Provider>
//   );
// };

// export default MOdule1Layout;

// ---------------------------------------------------------

"use client";

import GridSVG from "@/components/GridSVG";
import ProgressBar from "@/components/ProgressBar";
import BuildingNav from "@/components/BuildingNav";
import { useProgress } from "@/context/ProgressContext";

const Module1Layout = ({ children }: { children: React.ReactNode }) => {
  const { progress } = useProgress();

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

export default Module1Layout;
