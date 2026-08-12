import Image from "next/image";
import ballotSorting from "@/public/ballot-sorting.svg";

const Module3Screen12 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={ballotSorting}
        alt=""
        className="relative select-none mx-auto top-10 scale-60"
      />
    </div>
  );
};

export default Module3Screen12;
