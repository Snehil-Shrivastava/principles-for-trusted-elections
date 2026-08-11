import Image from "next/image";
import module2screen1 from "@/public/Module2Screen1.svg";

const Module2Screen1 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image src={module2screen1} alt="" className="relative select-none" />
    </div>
  );
};

export default Module2Screen1;
