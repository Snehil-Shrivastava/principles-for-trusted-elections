"use client";

import ScreenStage from "@/components/screens/ScreenStage";
import { ScreenNavProvider } from "@/context/ScreenNavContext";
import { module4Screens } from "@/components/screens/module4Screens";

const Module4Page = () => {
  return (
    <ScreenNavProvider total={module4Screens.length}>
      <ScreenStage
        screens={module4Screens}
        // hideNavOn={[6, 14]}
        baseProgress={60}
        // progressMap={{ 14: 60 }}
      />
    </ScreenNavProvider>
  );
};

export default Module4Page;
