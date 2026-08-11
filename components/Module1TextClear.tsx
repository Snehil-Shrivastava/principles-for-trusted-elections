import Image from "next/image";
import Module1Text from "@/public/module1-text.svg";

const Module1TextClear = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Image
        src={Module1Text}
        alt=""
        className="scale-120 relative left-6 top-45 select-none"
      />
    </div>
  );
};

export default Module1TextClear;
