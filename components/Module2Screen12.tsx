import Image from "next/image";
import checkScreen from "@/public/check-screen.svg";

const Module2Screen12 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={checkScreen}
        alt=""
        className="relative select-none mx-auto top-12 scale-70"
      />
    </div>
  );
};

export default Module2Screen12;
