import Image from "next/image";
import lastScreen from "@/public/module3-last-screen.svg";
import { useScreenNav } from "@/context/ScreenNavContext";
import { useRouter } from "next/navigation";

const Module3Screen14 = () => {
  const { next, back, isFirst } = useScreenNav();

  const router = useRouter();

  const handleNext = () => {
    router.push("/module-4");
    next();
  };
  const handleBack = () => {
    if (isFirst) return;
    back();
  };
  return (
    <div className="w-full h-full overflow-hidden relative">
      <Image
        src={lastScreen}
        alt=""
        className="relative select-none mx-auto top-45 scale-90"
      />
      <div className="flex justify-between py-4 absolute inset-x-0 px-4 select-none z-77777 bottom-10">
        <button
          onClick={handleBack}
          disabled={isFirst}
          className="disabled:opacity-30 cursor-pointer px-5 py-1.5 rounded-full bg-white/20 hover:bg-white/50 text-white"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="disabled:opacity-30 cursor-pointer px-5 py-1.5 rounded-full bg-white/20 hover:bg-white/50 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Module3Screen14;
