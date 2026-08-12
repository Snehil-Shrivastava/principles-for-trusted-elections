import Image from "next/image";
import lockedRoom from "@/public/locked-room.svg";

const Module3Screen6 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={lockedRoom}
        alt=""
        className="relative select-none mx-auto top-20 scale-60"
      />
    </div>
  );
};

export default Module3Screen6;
