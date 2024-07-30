import { useEffect, useState } from "react";
import catBg from "../../../../assets/cat_bg_desk.png";
import indexCan from "../../../../assets/img/index-can.png";
import { Link } from "react-router-dom";
import { PAGES_URLS } from "../../../../config/urls.config";

export default function FirstBlock() {
  const [showRollton, setShowRollton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowRollton(true);
    }, 250);
  }, [])
  

  return (
    <div className="relative flex pt-[141px] h-[694px] ">
      <div className="">
        <div className="pl-[190px] md:pl-[117px] h-full flex flex-col justify-center md:justify-start">
          <h1 className="text-[60px] font-normal w-[420px] leading-[60px] mb-[40px] text-black">
            Функциональное питание для котов
          </h1>
          <p className="uppercase text-[20px] mb-[52px] leading-[20px] text-black">
            Занялся собой? Займись котом!
          </p>
          <Link to={PAGES_URLS.PROGRAM_SELECTION} onClick={() => window.scrollTo(0, 0)} className="z-10">
            <button className="uppercase whitespace-nowrap hover:opacity-90 bg-[#68B738] py-[14px] px-[26px] text-[20px] leading-[20px] text-white">
              Подобрать программу
            </button>
          </Link>   
        </div>
        <div className="absolute top-[141px] md:top-[49%] z-20 md:z-0  -right-[38.7%] md:-right-[15%]  w-full ">
          {showRollton && <img className="max-w-[552px]" src={indexCan} alt="indexCan" />}
        </div>
        <div className="bg-[#68B738D9] md:hidden w-1/2 bg-opacity-85 h-[694px] absolute top-0 right-0 z-[1] "></div>
        <img className="absolute md:hidden w-1/2 right-0 top-0" src={catBg} alt="cat" />
      </div>
    </div>
  );
}
