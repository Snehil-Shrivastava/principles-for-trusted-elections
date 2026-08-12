import Image from "next/image";
import module3Ballot from "@/public/module3-ballot.svg";

const Module3Screen1 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={module3Ballot}
        alt=""
        className="relative select-none mx-auto scale-60"
      />
    </div>
  );
};

export default Module3Screen1;
