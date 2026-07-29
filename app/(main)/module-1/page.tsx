import Image from "next/image";
import resultSVG from "@/public/result.svg";

const Module1 = () => {
  return (
    <div className="shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2)] border border-neutral-300 px-10 text-brand-blue h-full w-full">
      <div className="text-center">
        <div>
          <Image src={resultSVG} alt="" className="mx-auto" />
        </div>
        <h2 className="font-bold text-xl">
          The result is close, and serious questions have been raised.
        </h2>
        <span className="text-lg">What should happen next?</span>
      </div>
    </div>
  );
};

export default Module1;
