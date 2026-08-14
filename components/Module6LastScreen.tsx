import Image from "next/image";
import module6LastScreen from "@/public/module6-last-screen.svg";

const Module6LastScreen = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={module6LastScreen}
        alt=""
        className="relative select-none mx-auto top-30"
      />
    </div>
  );
};

export default Module6LastScreen;
