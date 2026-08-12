import Image from "next/image";
import marginNarrows from "@/public/margin-narrows.svg";

const Module3Screen9 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={marginNarrows}
        alt=""
        className="relative select-none mx-auto top-50 scale-90 left-5"
      />
    </div>
  );
};

export default Module3Screen9;
