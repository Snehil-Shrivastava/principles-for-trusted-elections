import Image from "next/image";
import ballotMachine from "@/public/ballot-machine.svg";

const Module3Screen2 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={ballotMachine}
        alt=""
        className="relative select-none mx-auto top-15 scale-60"
      />
    </div>
  );
};

export default Module3Screen2;
