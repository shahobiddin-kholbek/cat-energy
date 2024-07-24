// import FivesBlock from "../Home/FivesBlock/FivesBlock";
import AdditionalProducts from "./Additional/AdditionalProducts";
import Products from "./Products/Products";

export default function Catalogs() {
  return (
    <div className="pt-[188px]">
      <div className="px-[110px]">
        <h1 className="text-[60px] leading-[60px] font-normal mb-[84px]">
          Каталог продукции
        </h1>
        <Products />
      </div>
      <AdditionalProducts />
      {/* <FivesBlock/> */}
    </div>
  );
}
