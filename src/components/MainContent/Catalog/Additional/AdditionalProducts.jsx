import { additioalProds } from "../../../../dataes";

export default function AdditionalProducts() {
  return (
    <section className="pt-[100px] mb-[86px]">
      <div className="relative pb-[92px]">
        <hr className="border-[2px] border-[#68B738] w-full" />
        <h1 className="text-[36px] absolute top-[-40px] px-[40px] left-[110px] bg-white leading-[36px] font-400 text-black mt-[20px]">
          Дополнительные товары
        </h1>
      </div>
      <ul className="px-[110px]  flex flex-col">

        {additioalProds.map((item) => (
          <li className={`grid grid-cols-4 items-center h-[72px] border-t-2 ${item.id === 4 ? "border-b-2" : ""}  `} key={item.id}>
            <h1 className="min-w-[161px] text-[#222222] text-[20px] uppercase leading-5 font-normal">{item.label}</h1>
            <p className="font-sans">{item.type}</p>
            <p className="font-sans">{item.price} Р.</p>
            <button className="bg-[#68B738] hover:opacity-90 h-[40px] w-[244px] py-[8px] px-[26px] text-[16px] leading-[20px] text-white uppercase">заказать</button>
          </li>
        ))}
      </ul>

    </section>
  );
}
