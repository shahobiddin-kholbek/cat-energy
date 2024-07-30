import { additioalProds } from "../../../../dataes";
import CaptionInLine from "../../../ui/icons/CaptioninLine/CaptioninLine";
import catPhoto from "../../../../assets/img/cat_catalog.png";
import GiftIcon from "../../../ui/icons/GiftIcon";
import styles from "./additional.module.scss";

export default function AdditionalProducts() {
  return (
    <section className="pt-[100px] mb-[86px] md:mb-0">
      <CaptionInLine caption="Дополнительные товары" />
      <div className="flex md:flex-col w-full lg:items-center lg:gap-[79px] lg:justify-between">
        <ul className="relative md:border-2 md:border-[#CDCDCD] w-full md:w-auto ml-[110px] md:mx-[30px] mt-[81px] md:py-[26px] md:px-[38px] flex flex-col gap-4 items-start">
          {additioalProds.map((item) => (
            <li
              className={` h-[72px] border-t-2 md:border-t-0 md:mb-[28px]   ${
                item.id === 4 ? "border-b-2" : ""
              }`}
              key={item.id}
            >
              <h1 className=" text-[#222222] text-[20px] uppercase leading-5 font-normal">
                {item.label}
              </h1>
              <p className={`${styles.type} font-sans`}>{item.type}</p>
              <p className={`${styles.price} font-sans text-center`}>{item.price} Р.</p>
              <button className=" bg-[#68B738] hover:opacity-90 h-[40px] py-[8px] px-[26px] text-[16px] leading-[20px] text-white uppercase">
                заказать
              </button>
            </li>
          ))}
        </ul>
        <div className="relative md:overflow-hidden w-[245px] md:w-full md:max-w-[707px] h-[288px] md:h-[200px] mr-[110px] md:mr-[30px] mt-[81px] md:mx-[30px] bg-black bg-opacity-40 md:[69px] flex justify-center items-center">
          <div className="absolute w-[245px] md:w-full h-full flex lg:flex-col gap-[40px] justify-center md:justify-between md:pl-[77px] md:pr-[124px] items-center bg-[#68B738D9] bg-opacity-85 p-2">
            <GiftIcon />
            <p className="text-white font-sans leading-5 w-[161px] text-center md:text-start">
              Закажите все и получите чехол для кота в подарок!
            </p>
          </div>
          <img className="max-w-[245px] md:max-w-[707px] " src={catPhoto} alt="Cat" />
        </div>
      </div>
    </section>
  );
}
