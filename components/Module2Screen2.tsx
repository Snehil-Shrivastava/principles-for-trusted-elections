import Image from "next/image";
import module2screen2 from "@/public/Module2Screen2.svg";

const Module2Screen2 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image src={module2screen2} alt="" className="relative select-none" />
    </div>
  );
};

export default Module2Screen2;
