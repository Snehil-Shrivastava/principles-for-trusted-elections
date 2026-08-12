"use client";

import ScreenStage from "@/components/screens/ScreenStage";
import { ScreenNavProvider } from "@/context/ScreenNavContext";
import { module3Screens } from "@/components/screens/module3Screens";

const Module3Page = () => {
  return (
    <ScreenNavProvider total={module3Screens.length}>
      <ScreenStage
        screens={module3Screens}
        hideNavOn={[6, 14]}
        baseProgress={40}
        progressMap={{ 14: 60 }}
      />
    </ScreenNavProvider>
  );
};

export default Module3Page;
