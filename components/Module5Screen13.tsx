import Image from "next/image";
import certified from "@/public/certified.svg";

const Module5Screen13 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={certified}
        alt=""
        className="relative select-none mx-auto top-40 scale-70"
      />
    </div>
  );
};

export default Module5Screen13;
