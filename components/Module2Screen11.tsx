import Image from "next/image";
import stopScreen from "@/public/stop-screen.svg";

const Module2Screen11 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={stopScreen}
        alt=""
        className="relative select-none mx-auto top-12 scale-80"
      />
    </div>
  );
};

export default Module2Screen11;
