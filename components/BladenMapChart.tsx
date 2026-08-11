import Image from "next/image";
import bladenMapChart from "@/public/bladenNCChart.svg";

const BladenMapChart = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Image src={bladenMapChart} alt="" className="relative select-none" />
    </div>
  );
};

export default BladenMapChart;
