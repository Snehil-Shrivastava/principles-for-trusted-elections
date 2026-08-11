import Image from "next/image";
import USAMapFilledImg from "@/public/USAMap-filled.svg";

const IntroMapFilled = () => {
  return (
    <div>
      <Image src={USAMapFilledImg} alt="USA Map" />
    </div>
  );
};

export default IntroMapFilled;
