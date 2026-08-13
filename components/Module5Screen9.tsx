import Image from "next/image";
import hugging from "@/public/hugging.svg";

const Module5Screen9 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={hugging}
        alt=""
        className="relative select-none mx-auto top-30 scale-80"
      />
    </div>
  );
};

export default Module5Screen9;
