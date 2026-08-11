"use client";

import { module2Screens } from "@/components/screens/module2Screens";
import ScreenStage from "@/components/screens/ScreenStage";
import { ScreenNavProvider } from "@/context/ScreenNavContext";

const Module2Page = () => {
  return (
    <ScreenNavProvider total={module2Screens.length}>
      <ScreenStage screens={module2Screens} />
    </ScreenNavProvider>
  );
};

export default Module2Page;
