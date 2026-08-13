import Image from "next/image";
import chat4 from "@/public/mobile-chat4.svg";

const Module4Screen4 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={chat4}
        alt=""
        className="relative select-none mx-auto -top-5 scale-62"
      />
    </div>
  );
};

export default Module4Screen4;
