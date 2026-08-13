import Image from "next/image";
import pollingPlaceOutside from "@/public/polling-place-observer-out.svg";

const Module4Screen7 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={pollingPlaceOutside}
        alt=""
        className="relative select-none mx-auto top-28 scale-100"
      />
    </div>
  );
};

export default Module4Screen7;
