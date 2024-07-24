// eslint-disable-next-line react/prop-types
export default function Info({ selectedOption, setSelectedOption }) {
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className="pb-[69px] px-[110px] grid grid-cols-2 gap-[80px]">
      <div className="flex flex-col gap-[20px]">
        <label className="flex items-center gap-[13px]" htmlFor="name">
          <p className="uppercase whitespace-nowrap text-[20px] leading-[30px] font-normal text-black">
            Имя:*
          </p>
          <input
            className="w-full h-[52px] border border-[#E7E7E7] pl-[13px] outline-none"
            type="text"
            required
            id="name"
            placeholder="Имя"
          />
        </label>
        <label className="flex items-center gap-[13px]" htmlFor="weight">
          <p className="uppercase whitespace-nowrap text-[20px] leading-[30px] font-normal text-black">
            Вес (кг):*
          </p>
          <input
            className="w-full h-[52px] border border-[#E7E7E7] pl-[13px] outline-none"
            type="number"
            required
            id="weight"
            placeholder="Вес"
          />
        </label>
        <label className="flex items-center gap-[13px]" htmlFor="age">
          <p className="uppercase whitespace-nowrap text-[20px] leading-[30px] font-normal text-black">
            Возраст (лет):
          </p>
          <input
            className="w-full h-[52px] border border-[#E7E7E7] pl-[13px] outline-none"
            type="text"
            id="age"
            placeholder="Возраст"
          />
        </label>
      </div>
      <div className="border flex flex-col gap-[13px] pt-[25px] pl-[28px] border-[#E7E7E7] ">
        <label className="flex items-center gap-[13px]" htmlFor="weight_loss">
          <input
            checked={selectedOption === "weight_loss"}
            onChange={handleOptionChange}
            type="radio"
            name="goal"
            id="weight_loss"
          />
          <p className="uppercase text-[20px] leading-[30px] font-normal text-[#222222]">
            похудение
          </p>
        </label>
        <label className="flex items-center gap-[13px]" htmlFor="weight_gain">
          <input
            type="radio"
            checked={selectedOption === "weight_gain"}
            onChange={handleOptionChange}
            name="goal"
            id="weight_gain"
          />
          <p className="uppercase text-[20px] leading-[30px] font-normal text-[#222222]">
            Набор массы
          </p>
        </label>
        <label className="flex items-center gap-[13px]" htmlFor="need_advice">
          <input
            type="radio"
            checked={selectedOption === "need_advice"}
            onChange={handleOptionChange}
            name="goal"
            id="need_advice"
          />
          <p className="uppercase text-[20px] leading-[30px] font-normal text-[#222222]">
            Не знаю (Нужен ваш совет)
          </p>
        </label>
      </div>
    </div>
  );
}
