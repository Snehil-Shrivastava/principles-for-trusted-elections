// import React from "react";
// import Module1Text from "./Module1Text";
// import NCMap from "./NCMap";

// const Module1Main = () => {
//   return (
//     <div className="w-full h-full">
//       <Module1Text className="absolute top-[20%] select-none pointer-events-none" />
//       <NCMap />
//     </div>
//   );
// };

// export default Module1Main;

// -------------------------------------

"use client";

import React, { useState } from "react";
import Module1Text from "./Module1Text";
import NCMap from "./NCMap";

const Module1Main = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="w-full h-full relative">
      <Module1Text
        className="absolute top-[20%] select-none pointer-events-none"
        onComplete={() => setShowMap(true)}
      />

      {/* NCMap is hidden initially (opacity 0) and smoothly fades in over 1s */}
      {/* <div
        className={`w-full h-full transition-opacity duration-1000 ${
          showMap
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <NCMap />
      </div> */}
      {showMap && <NCMap />}
    </div>
  );
};

export default Module1Main;
