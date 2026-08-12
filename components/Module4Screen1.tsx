import Image from "next/image";
import chat1 from "@/public/mobile-chat1.svg";

const Module4Screen1 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={chat1}
        alt=""
        className="relative select-none mx-auto top-15 scale-80 left-8"
      />
    </div>
  );
};

export default Module4Screen1;
