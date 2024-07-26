import { additioalProds } from "../../../../dataes";
import CaptionInLine from "../../../ui/icons/CaptioninLine/CaptioninLine";
import catPhoto from "../../../../assets/img/cat_catalog.png";
import GiftIcon from "../../../ui/icons/GiftIcon";

export default function AdditionalProducts() {
  return (
    <section className="pt-[100px] mb-[86px]">
      <CaptionInLine caption="Дополнительные товары" />
      <div className="flex items-center justify-between">
        <ul className="relative ml-[110px] pt-[81px] flex flex-col gap-4 items-start">
          {additioalProds.map((item) => (
            <li
              className={`grid grid-cols-[200px_132px_44px_244px] gap-[4.5rem] items-center h-[72px] border-t-2 ${
                item.id === 4 ? "border-b-2" : ""
              }`}
              key={item.id}
            >
              <h1 className=" text-[#222222] text-[20px] uppercase leading-5 font-normal">
                {item.label}
              </h1>
              <p className="font-sans ">{item.type}</p>
              <p className="font-sans  text-center">
                {item.price} Р.
              </p>
              <button className=" bg-[#68B738] hover:opacity-90 h-[40px] py-[8px] px-[26px] text-[16px] leading-[20px] text-white uppercase">
                заказать
              </button>
            </li>
          ))}
        </ul>
        <div className="relative w-[245px] h-[288px] mr-[110px] mt-[81px] flex justify-center items-center">
          <div className="absolute bg w-[245px] h-[288px] flex flex-col gap-[40px] justify-center items-center bg-[#68B738D9] bg-opacity-85 p-2">
            <GiftIcon />
            <p className="text-white font-sans leading-5 w-[161px] text-center">Закажите все и получите чехол для кота в подарок!</p>
          </div>
          <img className="max-w-[245px]" src={catPhoto} alt="Cat" />
        </div>
      </div>
    </section>
  );
}
