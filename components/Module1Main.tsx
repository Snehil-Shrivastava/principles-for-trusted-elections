"use client";

import { useState } from "react";
import Module1Text from "./Module1Text";
import NCMap from "./NCMap";
import Module1ResultCertification from "./Module1ResultCertification";
import Module1RaisedHand from "./Module1RaisedHand";
import FileSVG from "./FileSVG";
import GavelSVG from "./GavelSVG";
import NewElectionSVG from "./NewElectionSVG";
import Module1BuildingFoundation from "./Module1BuildingFoundation";
import Module1LastSVG from "./Module1LastSVG";
import Module1Decision from "./Module1Decision";
import { useProgress } from "@/context/ProgressContext";

const Module1Main = () => {
  const { setProgress } = useProgress();

  const [showMap, setShowMap] = useState(false);
  const [showDecision, setShowDecision] = useState(false);
  const [showCertification, setShowCertification] = useState(false);
  const [showRaisedHand, setShowRaisedHand] = useState(false);
  const [showFileSvg, setShowFileSvg] = useState(false);
  const [showGavelSvg, setShowGavelSvg] = useState(false);
  const [showNewElectionSvg, setShowNewElectionSvg] = useState(false);
  const [showBuildingFoundationSvg, setShowBuildingFoundationSvg] =
    useState(false);
  const [showModule1LastSvg, setShowModule1LastSvg] = useState(false);

  const handleMapComplete = () => {
    setShowMap(false); // Unmounts NCMap
    setShowDecision(true); // Mounts Module1Decision
  };

  const handleDecisionComplete = () => {
    setShowDecision(false); // Unmounts Module1Decision
    setShowCertification(true); // Mounts Module1ResultCertification
  };

  const handleCertComplete = () => {
    setShowCertification(false); // Unmounts Module1ResultCertification
    setShowRaisedHand(true); // Mounts Module1RaisedHand
  };

  const handleHandComplete = () => {
    setShowRaisedHand(false); // Unmounts Module1RaisedHand
    setShowFileSvg(true); // Mounts FileSVG
  };

  const handleFileComplete = () => {
    setShowFileSvg(false);
    setShowGavelSvg(true);
  };

  const handleGavelComplete = () => {
    setShowGavelSvg(false);
    setShowNewElectionSvg(true);
  };

  const handleNewElectionComplete = () => {
    setShowNewElectionSvg(false);
    setShowBuildingFoundationSvg(true);
  };

  const handleBuildingFoundationComplete = () => {
    setShowBuildingFoundationSvg(false);
    setShowModule1LastSvg(true);

    setProgress(20);
  };

  return (
    <div className="w-full h-full relative">
      {!showCertification &&
        !showRaisedHand &&
        !showFileSvg &&
        !showGavelSvg &&
        !showNewElectionSvg &&
        !showBuildingFoundationSvg &&
        !showModule1LastSvg && (
          <Module1Text
            className="absolute top-[20%] select-none pointer-events-none"
            onComplete={() => setShowMap(true)}
          />
        )}
      {showMap && <NCMap onComplete={handleMapComplete} />}
      {showDecision && <Module1Decision onComplete={handleDecisionComplete} />}
      {showCertification && (
        <Module1ResultCertification onComplete={handleCertComplete} />
      )}
      {showRaisedHand && <Module1RaisedHand onComplete={handleHandComplete} />}

      {showFileSvg && <FileSVG onComplete={handleFileComplete} />}

      {showGavelSvg && <GavelSVG onComplete={handleGavelComplete} />}

      {showNewElectionSvg && (
        <NewElectionSVG onComplete={handleNewElectionComplete} />
      )}

      {showBuildingFoundationSvg && (
        <Module1BuildingFoundation
          onComplete={handleBuildingFoundationComplete}
        />
      )}

      {showModule1LastSvg && <Module1LastSVG />}
    </div>
  );
};

export default Module1Main;
