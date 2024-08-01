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
    <div className="relative flex pt-[141px] xs:pt-[65px] h-[694px] xs:h-auto">
      <div className="">
        <div className="pl-[190px]  md:pl-[117px] xs:pl-[30px] xs:pr-[36px] h-full  flex flex-col justify-center xs:justify-start md:justify-start">
          <h1 className="text-[60px] xs:text-[36px] z-10 font-normal w-[420px] xs:text-center xs:w-full leading-[60px] xs:leading-[36px] mb-[40px] xs:mb-[25px] xs:text-white text-black">
            Функциональное питание для котов
          </h1>
          <p className="uppercase z-10 text-[20px] xs:text-center xs:text-[14px] mb-[52px] xs:mb-[380px] leading-[20px] xs:leading-[14px] text-black xs:text-white">
            Занялся собой? Займись котом!
          </p>
          <Link to={PAGES_URLS.PROGRAM_SELECTION} onClick={() => window.scrollTo(0, 0)} className="z-40">
            <button className="uppercase  whitespace-nowrap hover:opacity-90 xs:w-full  bg-[#68B738] py-[14px] px-[26px] text-[20px] leading-[20px] text-white">
              Подобрать программу
            </button>
          </Link>   
        </div>
        <div className="absolute top-[141px] md:top-[49%] xs:top-[38%] z-10 md:z-0  lg:-right-[38.7%] md:-right-[15%] xs:-right-[5%]  w-full ">
          {showRollton && <img className="max-w-[552px] xs:max-w-[90%]" src={indexCan} alt="indexCan" />}
        </div>
        <div className="bg-[#68B738D9] md:hidden w-1/2 xs:w-full bg-opacity-85 h-[694px] xs:h-[302px] absolute top-0 right-0 z-[1] "></div>
        <img className="absolute md:hidden w-1/2 xs:w-full xs:h-[302px] right-0 top-0" src={catBg} alt="cat" />
      </div>
    </div>
  );
}
