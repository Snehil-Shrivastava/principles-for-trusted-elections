"use client";

import Image from "next/image";
import levels from "@/public/levels.svg";
import { useScreenNav } from "@/context/ScreenNavContext";
import { useRouter } from "next/navigation";

const Level = () => {
  const { back, isFirst } = useScreenNav();

  const router = useRouter();

  return (
    <div className="w-full h-full overflow-x-hidden relative">
      <Image
        src={levels}
        alt=""
        className="relative scale-90 -top-10 select-none"
      />
      <div className="flex justify-between py-4 absolute inset-x-0 px-4 select-none z-77777 bottom-10">
        <button
          onClick={back}
          disabled={isFirst}
          className="disabled:opacity-30 cursor-pointer px-5 py-1.5 rounded-full bg-white/20 hover:bg-white/50 text-white"
        >
          Back
        </button>
        <button
          onClick={() => router.push("/module-2")}
          //   disabled={isLast}
          className="disabled:opacity-30 cursor-pointer px-5 py-1.5 rounded-full bg-white/20 hover:bg-white/50 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Level;
