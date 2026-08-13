import Image from "next/image";
import pollingObservers from "@/public/poll-observers.svg";

const Module4Screen8 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={pollingObservers}
        alt=""
        className="relative select-none mx-auto top-28 scale-100"
      />
    </div>
  );
};

export default Module4Screen8;
