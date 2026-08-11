import Image from "next/image";
import levels from "@/public/levels.svg";

const Level = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Image
        src={levels}
        alt=""
        className="relative scale-90 -top-10 select-none"
      />
    </div>
  );
};

export default Level;
