import Image from "next/image";
import chat2 from "@/public/mobile-chat2.svg";

const Module4Screen2 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={chat2}
        alt=""
        className="relative select-none mx-auto -top-5 scale-62"
      />
    </div>
  );
};

export default Module4Screen2;
