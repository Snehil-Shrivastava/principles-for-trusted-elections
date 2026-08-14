import groupIcon from "@/public/group-icon.svg";
import videoIcon from "@/public/video-icon.svg";
import registerIcon from "@/public/register-icon.svg";
import statusIcon from "@/public/status-icon.svg";
import planIcon from "@/public/plan-icon.svg";
import workIcon from "@/public/work-icon.svg";
import observeIcon from "@/public/observe-icon.svg";
import rulesIcon from "@/public/rules-icon.svg";
import convoIcon from "@/public/convo-icon.svg";
import Image from "next/image";

const pledgeResources = [
  {
    text: "Share the Principles for Trusted Elections with friends and family",
    icon: groupIcon,
  },
  {
    text: "Record a video about why I support trusted elections and share it",
    icon: videoIcon,
  },
  {
    text: "Register to vote",
    icon: registerIcon,
  },
  {
    text: "Check my registration status",
    icon: statusIcon,
  },
  {
    text: "Make a plan to vote",
    icon: planIcon,
  },
  {
    text: "Work at the polls",
    icon: workIcon,
  },
  {
    text: "Observe an election",
    icon: observeIcon,
  },
  {
    text: "Learn my state's rules",
    icon: rulesIcon,
  },
  {
    text: "Have one thoughtful conversation about elections",
    icon: convoIcon,
  },
];

const PledgeResources = ({ onComplete }: { onComplete?: () => void }) => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-x-0 bg-white z-777 shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2)] border border-neutral-300 px-4 py-6">
        <h3 className="text-brand-blue font-bold text-xl text-center">
          <span>You&apos;re a Trusted</span>
          <br />
          <span>Elections Champion</span>
        </h3>
        <div className="py-10 grid grid-cols-1 gap-y-8">
          {pledgeResources.map((resourceLimits, index) => (
            <div className="flex gap-6" key={index}>
              <span className="text-xs leading-tight font-medium flex-[0.8]">
                {resourceLimits.text}
              </span>
              <button
                onClick={onComplete}
                className="bg-[#4463AA] px-2 py-1.5 flex items-center justify-center flex-[0.2] cursor-pointer"
              >
                <Image src={resourceLimits.icon} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PledgeResources;
