import Image from "next/image";
import labelBuilding from "@/public/building-with-labels.svg";

const Module5Screen14 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={labelBuilding}
        alt=""
        className="relative select-none mx-auto top-50"
      />
    </div>
  );
};

export default Module5Screen14;
