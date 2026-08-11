// "use client";

// import ArtboardAnimation from "@/components/ArtboardAnimation";
// import IntroAnimation from "@/components/IntroAnimation";
// import IntroQuestion from "@/components/IntroQuestion";
// import IntroStatic from "@/components/IntroStatic";
// import { useState } from "react";

// const Main = () => {
//   const [screen, setScreen] = useState<"intro" | "blueprint" | "newspaper">(
//     "intro",
//   );
//   const [isFading, setIsFading] = useState(false);

//   const handleIntroComplete = () => {
//     setIsFading(true);
//     setTimeout(() => {
//       setScreen("blueprint");
//       setIsFading(false);
//     }, 500); // Smooth 500ms cross-fade transition
//   };

//   const handleBlueprintComplete = () => {
//     setIsFading(true);
//     setTimeout(() => {
//       setScreen("newspaper");
//       setIsFading(false);
//     }, 500); // 500ms cross-fade to newspaper
//   };
//   return (
//     // <div
//     //   className={`w-full h-156.5 transition-opacity duration-500 ${
//     //     isFading ? "opacity-0" : "opacity-100"
//     //   }`}
//     // >
//     //   {screen === "intro" ? (
//     //     <IntroAnimation onComplete={handleIntroComplete} />
//     //   ) : screen === "blueprint" ? (
//     //     <ArtboardAnimation onComplete={handleBlueprintComplete} />
//     //   ) : (
//     //     <IntroQuestion />
//     //   )}
//     // </div>
//   );
// };

// export default Main;

// ------------------------- new static screens

// import IntroStatic from "@/components/IntroStatic";

// const Main = () => {
//   return (
//     <div className={`w-full h-156.5 transition-opacity duration-500`}>
//       <IntroStatic />
//     </div>
//   );
// };

// export default Main;

// -------- claude

"use client";

import { ScreenNavProvider } from "@/context/ScreenNavContext";
import { screens } from "@/components/screens/screens";
import { homeScreens } from "@/components/screens/homeScreens";
import ScreenStage from "@/components/screens/ScreenStage";

// const ScreenStage = () => {
//   const { index, next, back, isFirst, isLast } = useScreenNav();
//   const stageRef = useRef<HTMLDivElement>(null);
//   const CurrentScreen = screens[index];

//   // fade IN whenever the index changes
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

//   // fade OUT, then swap the index once it's invisible
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
//         <div className="flex justify-between py-4 absolute inset-x-0 px-4">
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

const Main = () => (
  <ScreenNavProvider total={screens.length}>
    <ScreenStage screens={homeScreens} hideNavOn={6} />
  </ScreenNavProvider>
);

export default Main;
