import Image from "next/image";
import ballotRecieved from "@/public/ballot-recieved.svg";

const Module3Screen8 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={ballotRecieved}
        alt=""
        className="relative select-none mx-auto top-45 scale-80"
      />
    </div>
  );
};

export default Module3Screen8;
