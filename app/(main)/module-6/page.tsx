"use client";

import { module6Screens } from "@/components/screens/module6Screens";
import ScreenStage from "@/components/screens/ScreenStage";
import { ScreenNavProvider } from "@/context/ScreenNavContext";

const Module6Page = () => {
  return (
    <ScreenNavProvider total={module6Screens.length}>
      <ScreenStage
        screens={module6Screens}
        hideNavOn={[1, 3, 4]}
        baseProgress={100}
        // progressMap={{ 16: 100 }}
      />
    </ScreenNavProvider>
  );
};

export default Module6Page;
