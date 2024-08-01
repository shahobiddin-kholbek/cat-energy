import { additioalProds } from "../../../../dataes";
import CaptionInLine from "../../../ui/icons/CaptioninLine/CaptioninLine";
import catPhoto from "../../../../assets/img/cat_catalog.png";
import GiftIcon from "../../../ui/icons/GiftIcon";
import styles from "./additional.module.scss";

export default function AdditionalProducts() {
  return (
    <section className="pt-[100px] xs:pt-[25px] mb-[86px] xs:mb-[35px] md:mb-0">
      <CaptionInLine caption="Дополнительные товары" />
      <div className="flex md:flex-col xs:flex-col w-full lg:items-center lg:gap-[79px] lg:justify-between">
        <ul className="relative md:border-2 md:border-[#CDCDCD] w-full xs:w-auto md:w-auto ml-[110px] md:mx-[30px] xs:mx-[20px] mt-[81px] xs:mt-[36px] md:py-[26px] md:px-[38px]  flex flex-col gap-4 items-start">
          {additioalProds.map((item) => (
            <li
              className={` h-[72px] xs:h-auto border-t-2 md:border-t-0 md:mb-[28px] xs:pt-[12px]  ${
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
        <div className="relative md:overflow-hidden w-[245px] md:w-full xs:w-auto md:max-w-[707px] h-[288px] md:h-[200px] xs:h-auto mr-[110px] md:mr-[30px] mt-[81px] xs:mt-[35px] md:mx-[30px] xs:mx-[20px] bg-black xs:bg-inherit bg-opacity-40 md:[69px] flex justify-center items-center">
          <div className="absolute w-[245px] xs:w-full md:w-full h-full flex lg:flex-col xs:flex-col gap-[40px] justify-center md:justify-between  md:pl-[77px] md:pr-[124px] items-center bg-[#68B738D9] bg-opacity-85 p-2">
            <GiftIcon />
            <p className="text-white font-sans leading-5 w-[161px] text-center md:text-start">
              Закажите все и получите чехол для кота в подарок!
            </p>
          </div>
          <img className="max-w-[245px] md:max-w-[707px] xs:max-w-[100%]" src={catPhoto} alt="Cat" />
        </div>
      </div>
    </section>
  );
}
