import Image from "next/image";
import resultStamp from "@/public/result-stamp.svg";

const Module1Result = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Image
        src={resultStamp}
        alt=""
        className="relative scale-90 -top-10 select-none"
      />
    </div>
  );
};

export default Module1Result;
