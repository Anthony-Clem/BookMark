import Features from "./Features";

export default function Marketing() {
  return (
    <div className="flex flex-col items-center mb-[150px] mx-5">
      <h2 className="font-medium text-[32px] leading-[52px] tracking-[-0.1px] mb-4">
        Features
      </h2>
      <p className="max-w-[540px] text-center text-lg opacity-50 text-[#242A45] mb-[72px]">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <Features />
    </div>
  );
}
