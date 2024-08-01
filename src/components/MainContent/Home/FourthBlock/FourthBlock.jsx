import { useState } from "react";
import after from "../../../../assets/img/cat-skinny.png";
import before from "../../../../assets/img/cat-fat.png";
import "./fourth.css";

export default function FourthBlock() {
  const [value, setValue] = useState(50);
  const [isBefore, setIsBefore] = useState("before");

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <section className="relative md:bg-[#F2F2F2] xs:bg-[#EAEAEA] md:pb-[50px] xs:pb-[25px] xs:mt-[42px]">
      <div className="h-[194px] xs:pt-[27px] xs:h-auto md:bg-white flex items-center px-[110px] xs:px-[20px] md:px-[30px]">
        <h1 className="whitespace-nowrap text-[60px] xs:text-[36px] leading-[60px] font-normal text-black">
          Живой пример
        </h1>
      </div>
      <div className="bg-[#F2F2F2] md:bg-white xs:bg-[#EAEAEA] px-[110px] xs:px-[20px] md:px-[30px] w-full pt-[70px] xs:pt-[33px] md:pt-0 pb-[100px] md:pb-[170px] xs:pb-0">
        <p className="max-w-[436px] md:max-w-[100%] font-sans mb-[69px] xs:mb-[25px] md:mb-[54px] text-base xs:text-[14px] xs:leading-[18px] text-[#444444] font-normal">
          Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на
          Cat Energy Slim. Отличный результат без изнуряющих тренировок! При
          этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
        </p>
        <div className="mb-[55px] xs:mb-[25px] flex flex-col md:flex-row md:justify-between xs:gap-6 md:items-center">
          <div className=" lg:mb-[55px] xs:mb-[26px] flex gap-[42px] xs:gap-[5%]">
            <div className="relative flex justify-center items-center w-[162px] h-[72px] border border-[#CDCDCD] rounded-[4px]">
              <p className="uppercase text-[30px] leading-[37px] font-400 text-black">
                5 кг
              </p>
              <p className="absolute whitespace-nowrap bottom-[-11px] bg-[#F2F2F2] md:bg-white xs:bg-[#EAEAEA] px-[5px]">
                снижение веса
              </p>
            </div>
            <div className="relative flex justify-center items-center w-[162px] h-[72px] border border-[#CDCDCD] rounded-[4px]">
              <p className="uppercase text-[30px] leading-[37px] font-400 text-black">
                60 ДНЕЙ
              </p>
              <p className="absolute whitespace-nowrap bottom-[-11px] bg-[#F2F2F2] md:bg-white xs:bg-[#EAEAEA] px-[5px]">
                затрачено времени
              </p>
            </div>
          </div>
          <div className="flex md:flex-col items-center gap-[63px] xs:justify-center md:gap-[9px] xs:gap-1">
            <p className="uppercase text-[20px] font-normal tracking-tighter leading-5 text-black">
              Затраты на питание:
            </p>
            <div className="uppercase text-[20px] tracking-tighter leading-5 text-black">
              15 000 РУБ.
            </div>
          </div>
        </div>
      </div>
      <div
        draggable="false"
        className="slider-controls h-[656px] select-none md:-mt-[180px] lg:absolute lg:top-0 lg:right-0 w-full flex justify-end items-center"
      >
        <div
          draggable="false"
          className="relative pb-[67px] select-none slider-container w-[690px] "
        >
          <img
            draggable="false"
            src={before}
            alt="Before"
            className="slider-image select-none"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          />
          <img
            draggable="false"
            src={after}
            alt="After"
            className="slider-image select-none"
            style={{ clipPath: `inset(0 0 0 ${value}%)` }}
          />
          <div className="flex items-center justify-center gap-[20px] absolute bottom-[41.5px] w-full">
            <p className="uppercase text-[20px] leading-[29.64px]">Было</p>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleSliderChange}
              className="slider"
            />
            <p className="uppercase text-[20px] leading-[29.64px]">Стало</p>
          </div>
        </div>
      </div>
      <div
        draggable="false"
        className="switcher-controls relative pb-[67px] xs:flex xs:justify-center select-none slider-container w-[690px] xs:w-[100%] "
      >
        <img
          draggable="false"
          src={isBefore === "before" ? before : after}
          alt={isBefore === "before" ? "Before" : "After"}
          className="slider-image h-[232px] w-[330px] select-none xs:max-w-[100%] pb-[23px]"
        />
        <div className="flex h-[40px] items-center justify-center gap-[20px] absolute bottom-[41.5px] w-full">
          <p className="uppercase text-[20px] leading-[29.64px]">Было</p>
          <div className="h-[14px] px-[6px] flex items-center border border-[#EAEAEA] bg-[#FFFFFF] rounded-md">
            <button
              onClick={() => setIsBefore("before")}
              className={`h-[6px] w-[35px] rounded-md ${
                isBefore === "before" ? "bg-[#68B738]" : "bg-white"
              }`}
            >
              
            </button>
            <button
              onClick={() => setIsBefore("after")}
              className={`h-[6px] w-[35px] rounded-md ${
                isBefore === "after" ? "bg-[#68B738]" : "bg-white"
              }`}
            >
              
            </button>
          </div>

          <p className="uppercase text-[20px] leading-[29.64px]">Стало</p>
        </div>
      </div>
    </section>
  );
}
