"use client";

import IntroAnimation from "@/components/IntroAnimation";
import IntroQuestion from "@/components/IntroQuestion";
import { useState } from "react";

const Main = () => {
  const [screen, setScreen] = useState<"intro" | "newspaper">("intro");
  const [isFading, setIsFading] = useState(false);

  const handleAnimationComplete = () => {
    setIsFading(true);
    setTimeout(() => {
      setScreen("newspaper");
      setIsFading(false);
    }, 500); // Smooth 500ms cross-fade transition
  };
  return (
    <div
      className={`w-full h-full transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {screen === "intro" ? (
        <IntroAnimation onComplete={handleAnimationComplete} />
      ) : (
        <IntroQuestion />
      )}
    </div>
  );
};

export default Main;
