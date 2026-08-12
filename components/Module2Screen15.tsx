import Image from "next/image";
import module2LastScreen from "@/public/module2-last-screen.svg";

const Module2Screen15 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={module2LastScreen}
        alt=""
        className="relative select-none mx-auto top-35 scale-90"
      />
    </div>
  );
};

export default Module2Screen15;
