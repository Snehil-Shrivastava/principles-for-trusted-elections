// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useScreenNav } from "@/context/ScreenNavContext";

// gsap.registerPlugin(useGSAP);

// type ScreenComponent = React.ComponentType;

// const ScreenStage = ({ screens }: { screens: readonly ScreenComponent[] }) => {
//   const { index, next, back, isFirst, isLast } = useScreenNav();
//   const stageRef = useRef<HTMLDivElement>(null);
//   const CurrentScreen = screens[index];

//   useGSAP(
//     () => {
//       gsap.fromTo(
//         stageRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 0.5, ease: "power2.inOut" },
//       );
//     },
//     { dependencies: [index] },
//   );

//   const handleNext = () => {
//     if (isLast) return;
//     gsap.to(stageRef.current, {
//       opacity: 0,
//       duration: 0.25,
//       ease: "power2.inOut",
//       onComplete: next,
//     });
//   };
//   const handleBack = () => {
//     if (isFirst) return;
//     gsap.to(stageRef.current, {
//       opacity: 0,
//       duration: 0.25,
//       ease: "power2.inOut",
//       onComplete: back,
//     });
//   };

//   return (
//     <div className="w-full h-156.5 flex flex-col relative">
//       <div ref={stageRef} className="flex-1">
//         <CurrentScreen />
//       </div>
//       {index !== 6 && (
//         <div className="flex justify-between py-4 absolute inset-x-0 px-4 select-none z-77777 bottom-10">
//           <button
//             onClick={handleBack}
//             disabled={isFirst}
//             className="disabled:opacity-30 cursor-pointer px-5 py-1.5 rounded-full bg-white/20 hover:bg-white/50 text-white"
//           >
//             Back
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={isLast}
//             className="disabled:opacity-30 cursor-pointer px-5 py-1.5 rounded-full bg-white/20 hover:bg-white/50 text-white"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScreenStage;

// -------------------------------------------------------------------------------

// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useScreenNav } from "@/context/ScreenNavContext";

// gsap.registerPlugin(useGSAP);

// type ScreenComponent = React.ComponentType<{ onComplete?: () => void }>;

// const ScreenStage = ({
//   screens,
//   hideNavOn = [],
// }: {
//   screens: readonly ScreenComponent[];
//   hideNavOn?: number | number[]; // index or indices where Next/Back should be hidden
// }) => {
//   const { index, next, back, isFirst, isLast } = useScreenNav();
//   const stageRef = useRef<HTMLDivElement>(null);
//   const CurrentScreen = screens[index];

//   const hiddenIndices = Array.isArray(hideNavOn) ? hideNavOn : [hideNavOn];
//   const isNavHidden = hiddenIndices.includes(index);

//   const handleNext = () => {
//     if (isLast) return;
//     next();
//   };
//   const handleBack = () => {
//     if (isFirst) return;
//     back();
//   };

//   return (
//     <div className="w-full h-156.5 flex flex-col relative">
//       <div ref={stageRef} className="flex-1">
//         <CurrentScreen onComplete={handleNext} />
//       </div>
//       {!isNavHidden && (
//         <div className="flex justify-between py-4 absolute inset-x-0 px-4 select-none z-77777 bottom-5">
//           <button
//             onClick={handleBack}
//             disabled={isFirst}
//             className="disabled:opacity-30 cursor-pointer px-5 py-1.5 rounded-full bg-white/20 hover:bg-white/50 text-white"
//           >
//             Back
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={isLast}
//             className="disabled:opacity-30 cursor-pointer px-5 py-1.5 rounded-full bg-white/20 hover:bg-white/50 text-white"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScreenStage;

// -------------------- new progress map

"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useScreenNav } from "@/context/ScreenNavContext";
import { useProgress } from "@/context/ProgressContext";

gsap.registerPlugin(useGSAP);

type ScreenComponent = React.ComponentType<{ onComplete?: () => void }>;

const ScreenStage = ({
  screens,
  hideNavOn = [],
  baseProgress,
  progressMap = {},
}: {
  screens: readonly ScreenComponent[];
  hideNavOn?: number | number[];
  baseProgress?: number; // progress value for screens with no override
  progressMap?: Record<number, number>; // sparse: only screens that bump progress
}) => {
  const { index, next, back, isFirst, isLast } = useScreenNav();
  const { setProgress } = useProgress();
  const stageRef = useRef<HTMLDivElement>(null);
  const CurrentScreen = screens[index];

  const hiddenIndices = Array.isArray(hideNavOn) ? hideNavOn : [hideNavOn];
  const isNavHidden = hiddenIndices.includes(index);

  // Derive progress from index — walk 0..index, take the last override seen.
  // Re-running this on every index change (forward OR back) means back
  // naturally lands on the correct prior value, with nothing to undo.
  useEffect(() => {
    if (baseProgress === undefined) return;
    let resolved = baseProgress;
    for (let i = 0; i <= index; i++) {
      if (progressMap[i] !== undefined) resolved = progressMap[i];
    }
    setProgress(resolved);
  }, [index, baseProgress, progressMap, setProgress]);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       stageRef.current,
  //       { opacity: 0 },
  //       { opacity: 1, duration: 0.5, ease: "power2.inOut" },
  //     );
  //   },
  //   { dependencies: [index] },
  // );

  const handleNext = () => {
    if (isLast) return;
    next();
  };
  const handleBack = () => {
    if (isFirst) return;
    back();
  };

  return (
    <div className="w-full h-156.5 flex flex-col relative">
      <div ref={stageRef} className="h-full">
        <CurrentScreen onComplete={handleNext} />
      </div>
      {!isNavHidden && (
        <div className="flex justify-between py-4 absolute inset-x-0 px-4 select-none z-77777 bottom-10">
          <button
            onClick={handleBack}
            disabled={isFirst}
            className="disabled:opacity-30 cursor-pointer px-5 py-1.5 rounded-full bg-white/20 hover:bg-white/50 text-white"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={isLast}
            className="disabled:opacity-30 cursor-pointer px-5 py-1.5 rounded-full bg-white/20 hover:bg-white/50 text-white"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ScreenStage;
