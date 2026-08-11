// import Module1Main from "@/components/Module1Main";

// const Module1Page = () => {
//   return (
//     <>
//       <Module1Main />
//     </>
//   );
// };

// export default Module1Page;

// ------------------------ new

"use client";

import IntroTextBlurred from "@/components/Module1TextBlurred";
import { module1Screens } from "@/components/screens/module1Screens";
import ScreenStage from "@/components/screens/ScreenStage";
import { ScreenNavProvider } from "@/context/ScreenNavContext";

const Module1Page = () => {
  return (
    // <div className="w-full h-full flex items-center justify-center">
    //   <IntroTextBlurred />
    // </div>
    <ScreenNavProvider total={module1Screens.length}>
      <ScreenStage screens={module1Screens} hideNavOn={[4, 11]} />
    </ScreenNavProvider>
  );
};

export default Module1Page;
