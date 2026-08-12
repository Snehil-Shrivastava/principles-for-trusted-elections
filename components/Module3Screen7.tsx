import Image from "next/image";
import washingtonMap from "@/public/washington-map.svg";

const Module3Screen7 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={washingtonMap}
        alt=""
        className="relative select-none mx-auto top-45 scale-80"
      />
    </div>
  );
};

export default Module3Screen7;
