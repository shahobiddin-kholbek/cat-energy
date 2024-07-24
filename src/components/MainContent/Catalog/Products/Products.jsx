import { useState } from "react";
import { dataes } from "../../../../dataes";
export default function Products() {
  const [productHovered, setProductHovered] = useState(null);

  return (
    <section>
      <ul className="grid grid-cols-4 gap-[80px] w-full">
        {dataes.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => setProductHovered(item.id)}
            onMouseLeave={() => setProductHovered(null)}
            className="relative bg-[#F2F2F2] pb-[40px] flex flex-col justify-center cursor-pointer"
          >
            <div className="px-[35px] mt-[-50px] mb-[33px]">
              <img
                className={`mb-[42px] ${
                  productHovered === item.id ? "scale-110" : "scale-90"
                }`}
                src={item.img}
                alt={item.title}
              />

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
                    <p>{item.value} {i === 2 && 'Р.'}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full text-center">
              <button className="bg-[#68B738] hover:opacity-90 py-[10px] px-[53px] uppercase text-base leading-[20px] text-white">
                заказать
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
