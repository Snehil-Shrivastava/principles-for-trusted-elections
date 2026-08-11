import Image from "next/image";
import buildingFoundationLight from "@/public/building-foundation-light.svg";
import { useProgress } from "@/app/(main)/module-1/layout";

const BuildingFoundationLight = () => {
  const { setProgress } = useProgress();

  setProgress(20);

  return (
    <div className="w-full h-full overflow-x-hidden">
      <Image
        src={buildingFoundationLight}
        alt=""
        className="relative scale-90 -top-10 select-none"
      />
    </div>
  );
};

export default BuildingFoundationLight;
