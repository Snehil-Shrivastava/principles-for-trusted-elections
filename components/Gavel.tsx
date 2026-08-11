import Image from "next/image";
import gavel from "@/public/gavel.svg";

const Gavel = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Image
        src={gavel}
        alt=""
        className="relative scale-90 -top-10 select-none"
      />
    </div>
  );
};

export default Gavel;
