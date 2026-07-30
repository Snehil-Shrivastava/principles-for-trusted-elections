"use client";

import ArtboardAnimation from "@/components/ArtboardAnimation";
import IntroAnimation from "@/components/IntroAnimation";
import IntroQuestion from "@/components/IntroQuestion";
import { useState } from "react";

const Main = () => {
  const [screen, setScreen] = useState<"intro" | "blueprint" | "newspaper">(
    "intro",
  );
  const [isFading, setIsFading] = useState(false);

  const handleIntroComplete = () => {
    setIsFading(true);
    setTimeout(() => {
      setScreen("blueprint");
      setIsFading(false);
    }, 500); // Smooth 500ms cross-fade transition
  };
  return (
    <div
      className={`w-full h-156.5 transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {screen === "intro" ? (
        <IntroAnimation onComplete={handleIntroComplete} />
      ) : screen === "blueprint" ? (
        <ArtboardAnimation
          onComplete={() => {
            // Automatically transition to IntroQuestion when Artboard 11 finishes!
            setIsFading(true);
            setTimeout(() => {
              setScreen("newspaper");
              setIsFading(false);
            }, 500);
          }}
        />
      ) : (
        <IntroQuestion />
      )}
    </div>
  );
};

export default Main;
