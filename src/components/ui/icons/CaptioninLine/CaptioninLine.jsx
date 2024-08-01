// eslint-disable-next-line react/prop-types
export default function CaptionInLine({caption}) {
  return (
    <div className="relative ">
      <hr className="border-[2px] border-[#68B738] w-full" />
      <h1 className="text-[36px] xs:text-[24px] whitespace-nowrap absolute top-[-40px] px-[40px] xs:px-[22px] left-[110px] xs:left-[20px] bg-white leading-[36px] font-400 text-black mt-[20px]">
        {caption}
      </h1>
    </div>
  );
}
