import Image from "next/image";
import posterTakedown from "@/public/takedown-poster.svg";

const Module5Screen6 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={posterTakedown}
        alt=""
        className="relative select-none mx-auto top-25 scale-70"
      />
    </div>
  );
};

export default Module5Screen6;
