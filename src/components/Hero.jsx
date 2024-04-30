import Header from "./Header";
import illustration from "../assets/illustration-hero.svg";
import Image from "next/image";

export default function Hero({ toggle, setToggle }) {
  const vari = ["Chrome", "Firefox"];
  return (
    <section className=" mb-[212px] max-lg:mb-[180px] mx-5">
      <Header toggle={toggle} setToggle={setToggle} />
      <div className="flex mt-[108px] max-lg:flex-col-reverse max-lg:items-center z-10">
        <div className="flex flex-col max-w-[540px] mt-[65px]">
          <h1 className="text-[#242A45] font-medium text-5xl leading-[52px] tracking-[-0.15px] max-lg:text-center">
            A Simple Bookmark Manager
          </h1>
          <p className="text-[18px] text-[#242A45] opacity-50 max-w-[540px] mt-6 max-md:text-center">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex items-center gap-4 mt-8 max-lg:justify-center">
            {vari.map((vari, index) => (
              <button
                className={`font-medium text-sm leading-7 tracking-[0.25px] rounded-[5px] px-6 py-[10px] border transition cursor-pointer hover:bg-white ${
                  index === 0
                    ? "bg-[#5267DF] text-white border-[#5267DF] hover:text-[#5267df]"
                    : "bg-[#F7F7F7] border-[#F7F7F7] text-[#242A45] hover:border-[#5B6074] hover:text-[#242A45] hover:text-opacity-75"
                }`}
                key={index}
              >
                Get it on {vari}
              </button>
            ))}
          </div>
        </div>
        <Image
          src={illustration}
          alt="UI illustration"
          width={579}
          height={386}
        />
      </div>
      {/* <div className="rounded-full bg-[#5267DF] absolute h-[352px] max-w-[1000px] z-0 bottom-[220px] right-[-580px]"></div> */}
    </section>
  );
}
