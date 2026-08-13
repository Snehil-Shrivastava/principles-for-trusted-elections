import Image from "next/image";
import pollingPlaceOutside2 from "@/public/polling-place-observer-out2.svg";

const Module4Screen9 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={pollingPlaceOutside2}
        alt=""
        className="relative select-none mx-auto top-25 scale-100 -left-2.5"
      />
    </div>
  );
};

export default Module4Screen9;
