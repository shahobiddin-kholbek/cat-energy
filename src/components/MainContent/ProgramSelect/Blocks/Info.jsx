import PropTypes from "prop-types";

export default function Info({ petInfo, setPetInfo }) {
  const { name, weight, age, selectedOption } = petInfo;

  const handleOptionChange = (event) => {
    const { id, value, type } = event.target;
    if (type === "radio") {
      setPetInfo({
        ...petInfo,
        selectedOption: id,
      });
    } else {
      setPetInfo({
        ...petInfo,
        [id]: value,
      });
    }
  };

  return (
    <div className="pb-[69px] xs:pb-[18px] px-[110px] xs:px-0 md:px-[71px] grid grid-cols-2 md:grid-cols-1 xs:grid-cols-1 gap-[80px] xs:gap-0">
      <div className="flex flex-col gap-[20px] xs:pb-[24px] xs:border-b border-[#D9D9D9]">
        <label className="xs:px-[20px] flex items-center gap-[13px]" htmlFor="name">
          <p className="uppercase whitespace-nowrap text-[20px] leading-[30px] font-normal text-black">
            Имя:* 
          </p>
          <input
            className="w-full h-[52px] border border-[#E7E7E7] pl-[13px] outline-none"
            type="text"
            value={name}
            onChange={handleOptionChange}
            required
            name="name"
            id="name"
            placeholder="Имя"
          />
        </label>
        <label className="xs:px-[20px] flex items-center gap-[13px]" htmlFor="weight">
          <p className="uppercase whitespace-nowrap text-[20px] leading-[30px] font-normal text-black">
            Вес (кг):*
          </p>
          <input
            className="w-full h-[52px] border border-[#E7E7E7] pl-[13px] outline-none"
            type="number"
            name="weight"
            value={weight}
            onChange={handleOptionChange}
            required
            id="weight"
            placeholder="Вес"
          />
        </label>
        <label className="xs:px-[20px] flex items-center gap-[13px]" htmlFor="age">
          <p className="uppercase whitespace-nowrap text-[20px] leading-[30px] font-normal text-black">
            Возраст (лет):
          </p>
          <input
            className="w-full h-[52px] border border-[#E7E7E7] pl-[13px] outline-none"
            type="number"
            name="age"
            value={age}
            onChange={handleOptionChange}
            id="age"
            placeholder="Возраст"
          />
        </label>
      </div>
      <div className="border flex flex-col gap-[13px] pt-[22px] pl-[28px] xs:pl-[20px] border-[#E7E7E7] ">
        <label className="flex items-center gap-[13px]" htmlFor="Похудение">
          <input
            checked={selectedOption === "Похудение"}
            onChange={handleOptionChange}
            type="radio"
            name="goal"
            id="Похудение"
          />
          <p className="uppercase text-[20px] leading-[30px] font-normal text-[#222222]">
            похудение
          </p>
        </label>
        <label className="flex items-center gap-[13px]" htmlFor="Набор массы">
          <input
            type="radio"
            checked={selectedOption === "Набор массы"}
            onChange={handleOptionChange}
            name="goal"
            id="Набор массы"
          />
          <p className="uppercase text-[20px] leading-[30px] font-normal text-[#222222]">
            Набор массы
          </p>
        </label>
        <label className="flex items-center gap-[13px]" htmlFor="Не знаю">
          <input
            type="radio"
            checked={selectedOption === "Не знаю"}
            onChange={handleOptionChange}
            name="goal"
            id="Не знаю"
          />
          <p className="uppercase text-[20px] leading-[30px] font-normal text-[#222222]">
            Не знаю (Нужен ваш совет)
          </p>
        </label>
      </div>
    </div>
  );
}
Info.propTypes = {
  petInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    age: PropTypes.string,
    selectedOption: PropTypes.string.isRequired,
  }).isRequired,
  setPetInfo: PropTypes.func.isRequired,
};