import Image from "next/image";
import ballotCounting from "@/public/ballot-counting.svg";

const Module3screen11 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={ballotCounting}
        alt=""
        className="relative select-none mx-auto top-45"
      />
    </div>
  );
};

export default Module3screen11;
