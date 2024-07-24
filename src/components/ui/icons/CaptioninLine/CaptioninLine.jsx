// eslint-disable-next-line react/prop-types
export default function CaptionInLine({caption}) {
  return (
    <div className="relative pb-[76px]">
      <hr className="border-[2px] border-[#68B738] w-full" />
      <h1 className="text-[36px] whitespace-nowrap absolute top-[-40px] px-[40px] left-[110px] bg-white leading-[36px] font-400 text-black mt-[20px]">
        {caption}
      </h1>
    </div>
  );
}
