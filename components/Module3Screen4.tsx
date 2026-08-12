import Image from "next/image";
import ballotContainer from "@/public/ballot-container.svg";

const Module3Screen4 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={ballotContainer}
        alt=""
        className="relative select-none mx-auto top-20 scale-60"
      />
    </div>
  );
};

export default Module3Screen4;
