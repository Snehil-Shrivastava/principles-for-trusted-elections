import GridSVG from "@/components/GridSVG";
import Module1Text from "@/components/Module1Text";
import NavBuildingBlank from "@/components/NavBuildingBlank";
import ProgressBar from "@/components/ProgressBar";
import ProgressFill from "@/components/ProgressFill";

const MOdule1Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full">
      <GridSVG />
      <div className="absolute inset-0">
        <ProgressBar className="absolute top-0 left-0 z-10 w-65" progress={8} />
        {/* <ProgressFill /> */}
        <NavBuildingBlank className="absolute top-0 right-0 w-25 pointer-events-none" />
        {/* <Module1Text className="absolute top-1/2 -translate-y-1/2" /> */}
        {children}
      </div>
    </div>
  );
};

export default MOdule1Layout;
