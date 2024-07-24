import { useState, useRef, useEffect } from "react";
import mapFoto from "../../../assets/img/map.png";
import mark from "../../../assets/img/mark.png";

export default function MapBlock() {
  const [showAddress, setShowAddress] = useState(false);
  const addressRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        addressRef.current &&
        !addressRef.current.contains(event.target) &&
        !event.target.matches(".addressBlock")
      ) {
        setShowAddress(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative">
      <img src={mapFoto} alt="map" />
      <img
        onClick={() => setShowAddress(true)}
        className={`hover:transform ${
          showAddress ? "scale-100" : "scale-95"
        } addressBlock hover:cursor-pointer absolute top-[33%] right-[29%]`}
        src={mark}
        alt="mark"
      />
      {showAddress && (
        <div
          ref={addressRef}
          className="absolute addressBlock w-[570px] h-[201px] bg-white top-[27%] left-[7%] flex items-center justify-center"
        >
          <div className="flex items-center justify-center gap-[87px]">
            <p className="text-black w-[163px] uppercase font-normal text-[20px] leading-[21px]">
              приглашаем к сотрудничеству дилеров!
            </p>
            <div className="text-[#444444] text-base flex flex-col justify-between font-normal">
              <p className="w-[155px]">ул. Большая Конюшенная, д. 19/8</p>
              <p className="">Санкт-Петербург</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
