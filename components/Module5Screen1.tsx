import Image from "next/image";
import screen1 from "@/public/module5-screen1.svg";

const Module5Screen1 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={screen1}
        alt=""
        className="relative select-none mx-auto top-40 scale-80"
      />
    </div>
  );
};

export default Module5Screen1;
