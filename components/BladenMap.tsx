import Image from "next/image";
import bladenMap from "@/public/bladenNC.svg";

const BladenMap = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Image src={bladenMap} alt="" className="relative select-none" />
    </div>
  );
};

export default BladenMap;
