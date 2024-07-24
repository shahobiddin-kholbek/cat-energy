export default function Comment() {
  return (
    <div className="pb-[67px]">
      <div className="relative pb-[69px]">
        <hr className="border-[2px] border-[#68B738] w-full" />
        <h1 className="text-[36px] whitespace-nowrap absolute top-[-40px] px-[40px] left-[110px] bg-white leading-[36px] font-400 text-black mt-[20px]">
          Комментарий
        </h1>
      </div>
      <div className="px-[110px]">
        <textarea
          name="comment"
          id="comment"
          placeholder="Расскажите обо всех повадках кота"
          className="w-full text-[#444444] resize-none uppercase text-[20px] leading-[30px] pr-[25px] h-[174px] border border-[#E7E7E7] px-[19px] py-[10px] outline-none"
        ></textarea>
      </div>
    </div>
  );
}
