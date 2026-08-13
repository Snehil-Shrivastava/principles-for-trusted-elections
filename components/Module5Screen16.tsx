import Image from "next/image";
import module5LastScreen from "@/public/module5-last-screen.svg";
import { useScreenNav } from "@/context/ScreenNavContext";
import { useRouter } from "next/navigation";

const Module5Screen16 = () => {
  const { next, back, isFirst } = useScreenNav();

  const router = useRouter();

  const handleNext = () => {
    router.push("/module-6");
    next();
  };
  const handleBack = () => {
    if (isFirst) return;
    back();
  };
  return (
    <div className="w-full h-full overflow-hidden relative">
      <Image
        src={module5LastScreen}
        alt=""
        className="relative select-none mx-auto top-50"
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

export default Module5Screen16;
