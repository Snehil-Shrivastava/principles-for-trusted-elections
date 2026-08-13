"use client";

import { module5Screens } from "@/components/screens/module5Screens";
import ScreenStage from "@/components/screens/ScreenStage";
import { ScreenNavProvider } from "@/context/ScreenNavContext";

const Module5Page = () => {
  return (
    <ScreenNavProvider total={module5Screens.length}>
      <ScreenStage
        screens={module5Screens}
        hideNavOn={[15, 16]}
        baseProgress={80}
        progressMap={{ 16: 100 }}
      />
    </ScreenNavProvider>
  );
};

export default Module5Page;
