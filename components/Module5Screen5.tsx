import Image from "next/image";
import concession from "@/public/concession.svg";

const Module5Screen5 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={concession}
        alt=""
        className="relative select-none mx-auto top-10 scale-60"
      />
    </div>
  );
};

export default Module5Screen5;
