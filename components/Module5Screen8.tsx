import Image from "next/image";
import cleaningOffice from "@/public/cleaning-office.svg";

const Module5Screen8 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={cleaningOffice}
        alt=""
        className="relative select-none mx-auto top-30 scale-80"
      />
    </div>
  );
};

export default Module5Screen8;
