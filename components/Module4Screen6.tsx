import Image from "next/image";
import pollingPlace from "@/public/polling-place.svg";

const Module4Screen6 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={pollingPlace}
        alt=""
        className="relative select-none mx-auto top-45"
      />
    </div>
  );
};

export default Module4Screen6;
