import Image from "next/image";
import buildingDoorOpen from "@/public/building-door-open.svg";

const Module2Screen14 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={buildingDoorOpen}
        alt=""
        className="relative select-none mx-auto top-25 scale-90"
      />
    </div>
  );
};

export default Module2Screen14;
