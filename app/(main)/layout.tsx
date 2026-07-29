import Image from "next/image";
import trustedElectionsLogo from "@/public/principles for trusted elections logo.svg";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen mb-20 bg-white text-black flex flex-col gap-y-5 font-ubuntu">
      <div className="w-full py-5">
        <Image src={trustedElectionsLogo} alt="" className="mx-auto" />
      </div>
      <div className="bg-brand-pink text-white text-center py-3">
        <h1 className="font-bold text-2xl">Introduction</h1>
        <span className="font-light">The Improbable Thing</span>
      </div>
      <div className="h-4/5 max-h-120 w-9/10 mx-auto flex-1">{children}</div>
    </div>
  );
};

export default MainLayout;
