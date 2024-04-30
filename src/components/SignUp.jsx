import Form from "./Form";

export default function SignUp() {
  return (
    <div className="bg-[#5267DF] max-w-[1440px] pt-[58px] pb-[74px] flex flex-col items-center max-md:px-8">
      <p className="text-medium text-[13px] leading-10 tracking-[5px] text-white uppercase mb-6 max-sm:text-center">
        35,000+ already joined
      </p>
      <h2 className="text-medium text-[32px] leading-10 tracking-[-0.1px] text-white max-w-[408px] text-center mb-9">
        Stay up-to-date with what we’re doing
      </h2>
      <Form />
    </div>
  );
}
