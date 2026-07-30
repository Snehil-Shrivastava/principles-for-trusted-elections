import Image from "next/image";
import trustedElectionsLogo from "@/public/principles for trusted elections logo.svg";
import Banner from "@/components/Banner";

const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen mb-20 bg-white text-black flex flex-col gap-y-5 font-ubuntu">
      <div className="w-full py-5">
        <Image src={trustedElectionsLogo} alt="" className="mx-auto" />
      </div>
      <Banner />
      <div className="h-4/5 max-h-[685px] w-9/10 mx-auto flex-1 mt-5 border border-neutral-200">
        {children}
      </div>
    </div>
  );
};

export default TestLayout;
