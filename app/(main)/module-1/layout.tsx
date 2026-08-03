import GridSVG from "@/components/GridSVG";
import NavBuildingBlank from "@/components/NavBuildingBlank";
import ProgressBar from "@/components/ProgressBar";

const MOdule1Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full">
      <GridSVG />
      <div className="absolute inset-0">
        <ProgressBar className="absolute top-0 left-0 z-10 w-65" progress={8} />
        <NavBuildingBlank className="absolute top-0 right-0 w-25 pointer-events-none" />
        {children}
      </div>
    </div>
  );
};

export default MOdule1Layout;
