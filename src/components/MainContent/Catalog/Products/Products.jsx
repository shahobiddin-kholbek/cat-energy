import { useState } from "react";
import { dataes as products } from "../../../../dataes";
import PlusIcon from "../../../ui/icons/PlusIcon";
export default function Products() {
  const [productHovered, setProductHovered] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const isAll = showAll ? products : products.slice(0, 7);

  const productsExeptAll = products?.slice(7).length;

  return (
    <section className="">
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-[60px] lg:gap-[80px] w-full">
        {isAll.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => setProductHovered(item.id)}
            onMouseLeave={() => setProductHovered(null)}
            className="relative xs:border-b xs:border-[#EBEBEB] bg-[#F2F2F2] xs:bg-white pb-[40px] flex flex-col justify-center cursor-pointer"
          >
            <div className="px-[35px] xs:pt-[11px] xs:flex mt-[-50px] xs:mt-0 mb-[33px]">
              <div className="w-full xs:w-1/2 flex justify-center xs:justify-start">
                <img
                  className={`mb-[42px] xs:mb-0 xs:py-[13px] transition-transform duration-300 ${
                    productHovered === item.id
                      ? "scale-110 xs:scale-90"
                      : "scale-90"
                  }`}
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className="flex w-1/2 flex-col">
                <div className="mb-[21.58px] xs:mb-[16px] flex justify-center xs:justify-start text-center xs:text-start w-full">
                  <h1 className="text-[20px] uppercase w-[145px] xs:w-[76px] xs:text-[16px] leading-[21px] text-[#222222] font-normal">
                    {item.title}
                  </h1>
                </div>
                <div className="">
                  {item.info.map((item, i) => (
                    <div
                      key={i}
                      className="flex  justify-between gap-[5.52px] xs:gap-[10%] pb-[9.36px] border-b-[#CDCDCD] border-b xs:border-b-0"
                    >
                      <p>{item.label}</p>
                      <p>
                        {item.value} {i === 2 && "Р."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full text-center xs:px-[20px]">
              <button className="bg-[#68B738] xs:w-full hover:opacity-90 md:py-[9px] lg:py-[10px] md:px-[93px] lg:px-[53px] uppercase text-base xs:py-[10px] leading-[20px] text-white">
                заказать
              </button>
            </div>
          </li>
        ))}
        <div className="float-right xs:px-[20px] xs:py-[25px] border-2 flex flex-col justify-center items-center border-[#F2F2F2]">
          <PlusIcon showAll={showAll} />
          <h1 className="text-center text-[20px] xs:text-[16px] mt-[49px] xs:mt-[23px] mb-[23px] xs:mb-[8px] text-[#111111] leading-[22px] xs:leading-[20px] w-[134px] xs:w-full uppercase">
            {showAll
              ? `Показать только ${isAll.length - productsExeptAll}`
              : `Показать еще ${productsExeptAll} товаров`}
          </h1>
          <p className="text-[#444444] text-base xs:text-xs leading-[18px] text-center w-[167px] xs:w-full">
            На самом деле вкусов гораздо больше!
          </p>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-[#F2F2F2] hover:opacity-90 py-[20px] uppercase text-[16px] mt-[87px] xs:mt-[21px] leading-[20px] text-[#444444] w-[169px] xs:w-full "
          >
            {showAll ? "Показать меньше" : "Показать все"}
          </button>
        </div>
      </ul>
    </section>
  );
}
