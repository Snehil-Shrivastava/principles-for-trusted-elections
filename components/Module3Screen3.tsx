import Image from "next/image";
import paperRecord from "@/public/paper-record.svg";

const Module3Screen3 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={paperRecord}
        alt=""
        className="relative select-none mx-auto top-20 scale-60"
      />
    </div>
  );
};

export default Module3Screen3;
