import Image from "next/image";
import calendar from "@/public/calendar.svg";

const Module4Screen10 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={calendar}
        alt=""
        className="relative select-none mx-auto top-30 scale-80 left-5"
      />
    </div>
  );
};

export default Module4Screen10;
