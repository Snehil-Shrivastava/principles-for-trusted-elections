import Image from "next/image";
import courthouse from "@/public/courthouse.svg";

const Module5Screen3 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={courthouse}
        alt=""
        className="relative select-none mx-auto top-30 scale-80"
      />
    </div>
  );
};

export default Module5Screen3;
