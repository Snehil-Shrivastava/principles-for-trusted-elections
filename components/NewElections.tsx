import Image from "next/image";
import newElection from "@/public/new-election.svg";

const NewElections = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Image
        src={newElection}
        alt=""
        className="relative scale-90 -top-10 select-none"
      />
    </div>
  );
};

export default NewElections;
