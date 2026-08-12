import Image from "next/image";
import ballotLog from "@/public/ballot-log.svg";

const Module3Screen5 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={ballotLog}
        alt=""
        className="relative select-none mx-auto top-20 scale-60"
      />
    </div>
  );
};

export default Module3Screen5;
