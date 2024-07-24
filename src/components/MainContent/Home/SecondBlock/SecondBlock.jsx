import { Link } from "react-router-dom";
import WeightGain from "../../../ui/icons/weight_gain";
import WeightLossIcon from "../../../ui/icons/weight_loss_icon";
import Arrow from "../../../ui/icons/Arrow";
import styles from "./secondBlock.module.scss";

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
    <section className={`${styles.section} px-[110px] mt-[82px]`}>
      <ul className={`${styles.ul} flex justify-between gap-[80px]`}>
        {weightLossGainDataes.map((item) => (
          <li
            className={`${styles.li} pt-[41px] pb-[55px] px-[52px] bg-[#F2F2F2] h-[374px]`}
            key={item.id}
          >
            <div className={`${styles.icon}`}>{item.icon}</div>
            <h1 className={`${styles.title} text-[36px] leading-[36px] font-normal`}>{item.title}</h1>
            <p className={`${styles.description} w-[467px] font-sans`}>{item.description}</p>
            <Link
              to={"/"}
              className={`${styles.catalog} flex h-[38px] items-center py-[4px] gap-[25px] group`}
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