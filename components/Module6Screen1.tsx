import Image from "next/image";
import module6Screen1 from "@/public/module6-screen1.svg";

const Module6Screen1 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={module6Screen1}
        alt=""
        className="relative select-none mx-auto top-50"
      />
    </div>
  );
};

export default Module6Screen1;
