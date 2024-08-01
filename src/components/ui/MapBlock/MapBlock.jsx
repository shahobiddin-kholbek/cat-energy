import { useState, useEffect } from "react";
import mapFoto from "../../../assets/img/map.png";
import mapPad from "../../../assets/img/map_pad.png";
import mark from "../../../assets/img/mark.png";

export default function MapBlock() { 
  const [isPad, setIsPad] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPad(window.innerWidth < 769); 
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative">
      <div className="lg:absolute lg:shadow-lg lg:w-[570px] w-full h-[201px] xs:h-[114px] bg-white lg:top-[27%] lg:left-[7%] flex items-center justify-center md:px-[71px]">
        <div className="flex items-center md:justify-between xs:justify-between xs:px-[20px] w-full justify-center gap-[87px] xs:gap-[10px]">
          <p className="text-black w-[163px] xs:w-1/2 xs:pr-2 uppercase font-normal text-[20px] xs:text-base leading-[21px]">
            приглашаем к сотрудничеству дилеров!
          </p>
          <div className="text-[#444444] text-base xs:text-[14px] flex flex-col justify-between font-normal">
            <p className="w-[155px] xs:w-1/2">ул. Большая <span className="xs:whitespace-nowrap">Конюшенная, д. 19/8</span></p>
            <p className="">Санкт-Петербург</p>
          </div>
        </div>
      </div>
      <img src={isPad ? mapPad : mapFoto} alt="map" className="xs:h-[362px]" />
      <img className={`absolute xs:w-[57px] xs:h-[53px] md:top-[57%] xs:top-1/2 lg:top-[33%] lg:right-[29%] xs:right-[42%] md:right-[41%]`} src={mark} alt="mark" />
    </section>
  );
}
