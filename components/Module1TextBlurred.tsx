import Image from "next/image";
import Module1Text from "@/public/module1-text.svg";

const Module1TextBlurred = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Image
        src={Module1Text}
        alt=""
        className="scale-120 blur-xs relative left-6 top-45 select-none"
      />
    </div>
  );
};

export default Module1TextBlurred;
