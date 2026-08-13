import Image from "next/image";
import pickingYardSign from "@/public/picking-yard-sign.svg";

const Module5Screen7 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={pickingYardSign}
        alt=""
        className="relative select-none mx-auto top-35 scale-80"
      />
    </div>
  );
};

export default Module5Screen7;
