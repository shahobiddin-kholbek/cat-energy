// import FivesBlock from "../Home/FivesBlock/FivesBlock";
import AdditionalProducts from "./Additional/AdditionalProducts";
import Products from "./Products/Products";

export default function Catalogs() {
  return (
    <div className="md:pt-[141px] lg:pt-[188px]  ">
      <div className="md:md:px-[30px]  lg:px-[110px] ">
        <h1 className="xs:border-y xs:px-[20px] xs:pt-[27px] xs:pb-[41px] text-[60px] xs:text-[36px] leading-[60px] xs:leading-[36px] font-normal md:mb-[82px] lg:mb-[84px]">
          Каталог продукции
        </h1>
        <Products />
      </div>
      <AdditionalProducts />
    </div>
  );
}
