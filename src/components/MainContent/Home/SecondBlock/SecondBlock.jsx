import { Link } from "react-router-dom";
import WeightGain from "../../../ui/icons/weight_gain";
import WeightLossIcon from "../../../ui/icons/weight_loss_icon";
import Arrow from "../../../ui/icons/Arrow";
import styles from "./secondBlock.module.scss";
import { PAGES_URLS } from "../../../../config/urls.config";

const weightLossGainDataes = [
  {
    id: 1,
    title: "Похудение",
    description:
      "Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.",
    icon: <WeightLossIcon />,
    catalog: "Каталог slim",
  },
  {
    id: 2,
    title: "Набор массы",
    description:
      "Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!",
    icon: <WeightGain />,
    catalog: "Каталог pro",
  },
];


export default function SecondBlock() {
  return (
    <section className={`${styles.section} px-[110px] md:px-[30px] xs:px-[20px] mt-[82px] xs:mt-[22px] md:mt-[140px]`}>
      <ul className={`${styles.ul} flex md:flex-col xs:flex-col justify-between gap-[80px] md:gap-[30px] xs:gap-[20px]`}>
        {weightLossGainDataes.map((item) => (
          <li
            className={`${styles.li} pt-[41px] xs:pt-[21px] pb-[55px] xs:pb-[18px] md:pb-[53px] px-[52px] xs:px-[20px] bg-[#F2F2F2] h-[374px] xs:h-auto`}
            key={item.id}
          >
            <div className={`${styles.icon}`}>{item.icon}</div>
            <h1
              className={`${styles.title} text-[36px] xs:text-[24px] xs:leading-[37px] leading-[36px] font-normal`}
            >
              {item.title}
            </h1>
            <p className={`${styles.description} w-[467px] text-[#444444] xs:text-[14px] xs:w-auto md:w-[340px] font-sans`}>
              {item.description}
            </p>
            <Link
              to={PAGES_URLS.PRODUCTS}
              onClick={() => {
                item.id === 1
                  ? window.scrollTo(0, 750)
                  : window.scrollTo(0, 0);
              }}
              className={`${styles.catalog} w-[165px] hover:border-b hover:border-b-black flex h-[38px] items-center py-[4px] gap-[25px] group`}
            >
              <p
                className={`text-[20px] text-black whitespace-nowrap uppercase leading-[29.64px] font-normal`}
              >
                {item.catalog}
              </p>
              <Arrow />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
