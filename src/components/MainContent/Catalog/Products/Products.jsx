import { useState } from "react";
import { dataes as products } from "../../../../dataes";
import PlusIcon from "../../../ui/icons/PlusIcon";
export default function Products() {
  const [productHovered, setProductHovered] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const isAll = showAll ? products : products.slice(0, 7);

  const productsExeptAll = products?.slice(7).length;

  return (
    <section>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-[60px] lg:gap-[80px] w-full">
        {isAll.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => setProductHovered(item.id)}
            onMouseLeave={() => setProductHovered(null)}
            className="relative bg-[#F2F2F2] pb-[40px] flex flex-col justify-center cursor-pointer"
          >
            <div className="px-[35px] mt-[-50px] mb-[33px]">
              <div className="w-full flex justify-center">
                <img
                  className={`mb-[42px] transition-transform duration-300 ${
                    productHovered === item.id ? "scale-110" : "scale-90"
                  }`}
                  src={item.img}
                  alt={item.title}
                />
              </div>

              <div className="mb-[21.58px] flex justify-center text-center w-full">
                <h1 className="text-[20px] uppercase w-[145px] leading-[21px] text-[#222222] font-normal">
                  {item.title}
                </h1>
              </div>
              <div className="">
                {item.info.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between gap-[5.52px] pb-[9.36px] border-b-[#CDCDCD] border-b "
                  >
                    <p>{item.label}</p>
                    <p>
                      {item.value} {i === 2 && "Р."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full text-center">
              <button className="bg-[#68B738] hover:opacity-90 md:py-[9px] lg:py-[10px] md:px-[93px] lg:px-[53px] uppercase text-base leading-[20px] text-white">
                заказать
              </button>
            </div>
          </li>
        ))}
        <div className="float-right border-2 flex flex-col justify-center items-center border-[#F2F2F2]">
          <PlusIcon showAll={showAll} />
          <h1 className="text-center text-[20px] mt-[49px] mb-[23px] text-[#111111] leading-[22px] w-[134px] uppercase">
            {showAll
              ? `Показать только ${isAll.length - productsExeptAll}`
              : `Показать еще ${productsExeptAll} товаров`}
          </h1>
          <p className="text-[#444444] text-base leading-[18px] text-center w-[167px]">
            На самом деле вкусов гораздо больше!
          </p>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-[#F2F2F2] hover:opacity-90 py-[20px] uppercase text-[16px] mt-[87px] leading-[20px] text-[#444444] w-[169px]"
          >
            {showAll ? "Показать меньше" : "Показать все"}
          </button>
        </div>
      </ul>
    </section>
  );
}
