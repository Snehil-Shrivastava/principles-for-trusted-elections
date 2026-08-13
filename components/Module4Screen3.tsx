import Image from "next/image";
import chat3 from "@/public/mobile-chat3.svg";

const Module4Screen3 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={chat3}
        alt=""
        className="relative select-none mx-auto -top-5 scale-62"
      />
    </div>
  );
};

export default Module4Screen3;
