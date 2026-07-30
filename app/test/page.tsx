// import TestIntroAnimation from "@/components/TestIntroAnimation";

// const TestPage = () => {
//   return (
//     <div className="w-full h-full">
//       <div className="w-full h-full">
//         <TestIntroAnimation />
//       </div>
//     </div>
//   );
// };

// export default TestPage;

// -------------------------

"use client";

import { useState } from "react";
import TestIntroAnimation from "@/components/TestIntroAnimation";
import Module0Animation from "@/components/Module0Animation";

export default function TestPage() {
  const [startModule0, setStartModule0] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="relative w-full h-[685px] bg-brand-blue overflow-hidden">
      {/* 1. STAGE 2: Module0Animation (Fades in during cross-fade) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          startModule0 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {startModule0 && (
          <Module0Animation
            crowdImageSrc="/crowd-v2.png"
            voteImageSrc="/vote-v2.png"
            onComplete={() => {
              console.log("All animations finished!");
            }}
          />
        )}
      </div>

      {/* 2. STAGE 1: TestIntroAnimation (Fades out during cross-fade) */}
      {!introFinished && (
        <div className="absolute inset-0 z-10">
          <TestIntroAnimation
            onStartFadeOut={() => {
              setStartModule0(true); // Triggers Module0 to start fading in simultaneously!
            }}
            onComplete={() => {
              setIntroFinished(true); // Unmounts Intro after fade-out completes
            }}
          />
        </div>
      )}
    </div>
  );
}
