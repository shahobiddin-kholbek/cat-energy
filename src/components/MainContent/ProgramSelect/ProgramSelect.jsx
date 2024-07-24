import { useState } from "react";
import "./programSelect.css";
import Info from "./Blocks/Info";
import Contacts from "./Blocks/Contacts";
import Comment from "./Blocks/Comment";
import Additionally from "./Blocks/Additionally";
export default function ProgramSelect() {
  const [selectedOption, setSelectedOption] = useState("weight_loss");

  return (
    <section className="pt-[187px] pb-[82px]">
      <div className="px-[110px]">
        <h1 className=" pb-[56px] text-[60px] leading-[60px] font-normal text-black">
          Подбор программы
        </h1>
        <p className="uppercase w-[323px]  pb-[66px] text-[20px] leading-[30px] font-normal text-black">
          Заполните анкету, и мы подберем программу питания для вашего кота
        </p>
      </div>
      <form action="" className="">
        <Info
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <Contacts />
        <Comment />
        <Additionally />
        <div className="grid grid-cols-2 items-center gap-[81px] px-[110px]">
          <button className="uppercase py-[14px] hover:opacity-90 text-white bg-[#68B738]">
            отправить заявку
          </button>
          <p className="text-black text-[16px] leading-4">* — Обязательные поля</p>
        </div>
      </form>
    </section>
  );
}
