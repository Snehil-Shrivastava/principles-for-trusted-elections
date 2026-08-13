import Image from "next/image";
import podium from "@/public/podium.svg";

const Module5Screen4 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={podium}
        alt=""
        className="relative select-none mx-auto top-10 scale-60"
      />
    </div>
  );
};

export default Module5Screen4;
