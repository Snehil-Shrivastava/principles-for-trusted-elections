// src/components/screens/homeScreens.ts
import IntroMap from "@/components/IntroMap";
import IntroMapFilled from "@/components/IntroMapFilled";
import IntroParticles from "@/components/IntroParticles";
import IntroCrowd from "@/components/IntroCrowd";
import IntroCrowdVoted from "@/components/IntroCrowdVoted";
import IntroQuestion from "@/components/IntroQuestion";
import BuildingSVG from "@/components/BuildingSVG";

export const homeScreens = [
  IntroMap,
  IntroMapFilled,
  IntroParticles,
  IntroCrowd,
  IntroCrowdVoted,
  BuildingSVG,
  IntroQuestion,
] as const;
