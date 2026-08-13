import Image from "next/image";
import labelBuildingDestroyed from "@/public/building-with-labels-destroyed.svg";

const Module5Screen15 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={labelBuildingDestroyed}
        alt=""
        className="relative select-none mx-auto top-50"
      />
    </div>
  );
};

export default Module5Screen15;
