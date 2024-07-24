import EmailIcon from "../../../ui/icons/EmailIcon";
import PhoneIcon from "../../../ui/icons/PhoneIcon";

export default function Contacts() {
  return (
    <div className="pb-[67px]">
      <div className="relative pb-[76px]">
        <hr className="border-[2px] border-[#68B738] w-full" />
        <h1 className="text-[36px] whitespace-nowrap absolute top-[-40px] px-[40px] left-[110px] bg-white leading-[36px] font-400 text-black mt-[20px]">
          Контактные данные (владельца кота)
        </h1>
      </div>
      <div className="px-[110px] grid grid-cols-2 gap-[78px]">
        <label htmlFor="email" className="relative flex items-center gap-[13px] ">
            <p className="uppercase whitespace-nowrap text-[20px] leading-[30px] font-normal text-[#444444]">E-mail:*</p>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full text-[#444444] uppercase text-[20px] leading-[30px] pr-[25px] h-[52px] border border-[#E7E7E7] pl-[13px] outline-none"
          />
          <span className="absolute  right-[19.72px]"><EmailIcon /></span>
        </label>
        <label htmlFor="phone" className="relative flex items-center gap-[13px] ">
            <p className="uppercase whitespace-nowrap text-[20px] leading-[30px] font-normal text-[#444444]">Телефон:*</p>
          <input
            type="phone"
            id="phone"
            placeholder="Phone"
            className="w-full text-[#444444] uppercase text-[20px] leading-[30px] pr-[25px] h-[52px] border border-[#E7E7E7] pl-[13px] outline-none"
          />
          <span className="absolute  right-[19.72px]"><PhoneIcon /></span>
        </label>
      </div>
    </div>
  );
}
