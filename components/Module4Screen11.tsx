import Image from "next/image";
import judges from "@/public/judges.svg";

const Module4Screen11 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={judges}
        alt=""
        className="relative select-none mx-auto top-40"
      />
    </div>
  );
};

export default Module4Screen11;
