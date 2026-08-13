import Image from "next/image";
import tvNews from "@/public/tv-news.svg";

const Module5Screen10 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={tvNews}
        alt=""
        className="relative select-none mx-auto top-50 scale-80"
      />
    </div>
  );
};

export default Module5Screen10;
