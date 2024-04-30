import Image from "next/image";
import chrome from "../assets/logo-chrome.svg";
import firefox from "../assets/logo-firefox.svg";
import opera from "../assets/logo-opera.svg";
import dots from "../assets/bg-dots.svg";

export default function Extentions() {
  const extensions = [
    {
      img: chrome,
      name: "Chrome",
      version: 62,
      width: 102,
    },
    {
      img: firefox,
      name: "Firefox",
      version: 55,
      width: 105,
    },
    {
      img: opera,
      name: "Opera",
      version: 46,
      width: 96,
    },
  ];
  return (
    <div className="flex flex-col items-center mb-[150px] mx-5">
      <h1 className="font-medium text-[32px] leading-[52px] tracking-[-0.1px] text-[#242A45] mb-4 text-center">
        Download the extension
      </h1>
      <p className="text-center max-w-[540px] text-lg opacity-50 text-[#242A45]">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="mt-12 flex gap-[34px] max-lg:flex-wrap max-lg:justify-center">
        {extensions.map((extension, index) => (
          <div
            className={`flex flex-col items-center w-[280px] h-[371px] pt-[49px] pb-6 shadow-[0_0_10px_-5px_rgba(0,0,0,0.3)] rounded-[15px] ${
              index === 1
                ? "mt-10 max-lg:mt-0"
                : index === 2
                ? "mt-20 max-lg:mt-0"
                : ""
            }`}
          >
            <Image
              src={extension.img}
              alt={`${extension.name} logo`}
              width={extension.width}
              height={100}
              className="mb-8"
            />
            <h3 className="text-xl tracking-[0.25px] font-medium text-[#242A45] mb-[6px]">
              Add to {extension.name}
            </h3>
            <p className="text-[15px] leading-7 opacity-50 text-[#242A45] mb-8">
              Minimum version {extension.version}
            </p>
            <Image
              src={dots}
              alt="Dots"
              width={280}
              height={4}
              className="mb-6"
            />
            <button className="bg-[#5267DF] font-medium text-sm leading-7 tracking-[0.25px] text-white py-[10px] px-[35.5px] rounded-[5px] border-[#5267DF] hover:text-[#5267df] hover:bg-white transition border">
              Add & Intall Extension
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
