import Image from "next/image";
import raisedHand from "@/public/raised-hand.svg";

const RaisedHand = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Image
        src={raisedHand}
        alt=""
        className="relative scale-90 -top-10 select-none"
      />
    </div>
  );
};

export default RaisedHand;
