import Image from "next/image";
import recountTable from "@/public/recount-table.svg";

const Module5Screen2 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={recountTable}
        alt=""
        className="relative select-none mx-auto top-30 scale-80"
      />
    </div>
  );
};

export default Module5Screen2;
