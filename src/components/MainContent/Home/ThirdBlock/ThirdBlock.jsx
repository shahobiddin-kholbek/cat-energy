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
    <section className="px-[110px] md:px-[30px] mt-[71px]">
      <h1 className="uppercase mb-[32px] text-[60px] leading-[60px] font-normal whitespace-nowrap">
        Как это работает
      </h1>
      <ul className="flex gap-[79px] md:flex-wrap md:pr-[81px] justify-between w-full">
        {dataes.map((item) => (
          <li className="relative max-w-[250px] flex gap-[38px]  " key={item.id}>
            <div className="pt-[40px]">{item.icon}</div>
            <p className="max-w-[245px] text-base font-sans font-normal absolute bottom-[57px]  z-10 text-[#444444]">
              {item.description}
            </p>
            <div className="z-[0] text-[280px] leading-[280px] text-[#F2F2F2]">
              {item.id}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
