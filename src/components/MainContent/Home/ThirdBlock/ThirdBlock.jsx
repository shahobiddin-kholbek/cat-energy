import ClockIcon from "../../../ui/icons/ClockIcon";
import LeaveIcon from "../../../ui/icons/LeaveIcon";
import LunchIcon from "../../../ui/icons/LunchIcon";
import WaterIcon from "../../../ui/icons/WaterIcon";

const dataes = [
  {
    id: 1,
    icon: <LeaveIcon />,
    description:
      "Функциональное питание содержит только полезные питательные вещества.",
  },
  {
    id: 2,
    icon: <WaterIcon />,
    description:
      "Выпускается в виде порошка, который нужно лишь залить кипятком и готово.",
  },
  {
    id: 3,
    icon: <LunchIcon />,
    description:
      "Замените один-два приема обычной еды на наше функциональное питание.",
  },
  {
    id: 4,
    icon: <ClockIcon />,
    description:
      "Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!",
  },
];
export default function ThirdBlock() {
  return (
    <section className="px-[110px] xs:px-[20px] md:px-[30px] mt-[71px]">
      <h1 className="lg:uppercase md:uppercase mb-[32px] text-[60px] xs:text-[36px] leading-[60px] xs:leading-[40px] font-normal whitespace-nowrap">
        Как это работает
      </h1>
      <ul className="flex gap-[79px] xs:gap-5 md:flex-wrap xs:flex-col md:pr-[81px] justify-between w-full">
        {dataes.map((item) => (
          <li className="relative max-w-[250px] xs:max-w-[100%] flex gap-[38px] xs:items-center xs:gap-[20px] xs:pt-0 " key={item.id}>
            <div className="pt-[40px] xs:pt-0">{item.icon}</div>
            <p className="max-w-[245px] text-base xs:text-[14px] leading-[18px] xs:pr-[2px] font-sans font-normal lg:absolute md:absolute bottom-[57px] xs:bottom-0 z-10 text-[#444444]">
              {item.description}
            </p>
            <div className="z-[0] text-[280px] xs:hidden leading-[280px] text-[#F2F2F2]">
              {item.id}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
