import Image from "next/image";
import afterCheckScreen from "@/public/after-check-screen.svg";

const Module2Screen13 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={afterCheckScreen}
        alt=""
        className="relative select-none mx-auto top-12 scale-70"
      />
    </div>
  );
};

export default Module2Screen13;
