import Image from "next/image";
import verified from "@/public/verified.svg";

const Module5Screen12 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={verified}
        alt=""
        className="relative select-none mx-auto top-40 scale-70"
      />
    </div>
  );
};

export default Module5Screen12;
