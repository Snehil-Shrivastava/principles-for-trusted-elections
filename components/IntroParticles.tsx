import Image from "next/image";
import Particles from "@/public/ScreenParticles.svg";

const IntroParticles = () => {
  return (
    <div>
      <Image src={Particles} alt="USA Map" />
    </div>
  );
};

export default IntroParticles;
