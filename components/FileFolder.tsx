import Image from "next/image";
import fileFolder from "@/public/folder.svg";

const FileFolder = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Image
        src={fileFolder}
        alt=""
        className="relative scale-90 -top-10 select-none"
      />
    </div>
  );
};

export default FileFolder;
