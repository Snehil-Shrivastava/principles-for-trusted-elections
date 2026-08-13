import Image from "next/image";
import counted from "@/public/counted.svg";

const Module5Screen11 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={counted}
        alt=""
        className="relative select-none mx-auto top-40 scale-70"
      />
    </div>
  );
};

export default Module5Screen11;
