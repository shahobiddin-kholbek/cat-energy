import CaptionInLine from "../../../ui/icons/CaptioninLine/CaptioninLine";
import { checks } from "../../../../dataes";
import PropTypes from 'prop-types';

export default function Additionally({ additional, setAdditional }) {

  const onChangeAdditional = (e) => {
    const { id, checked, name } = e.target;
    if (checked) {
      setAdditional((prev) => [
        ...prev,
        { id: parseInt(id, 10), title: name }, 
      ]);
    } else {
      setAdditional((prev) =>
        prev.filter((item) => item.id !== parseInt(id, 10))
      );
    }
  };

  return (
    <div className="pb-[61px] xs:pb-[32px]">
      <CaptionInLine caption="Дополнительно" />
      <ul className="px-[110px] md:px-[70px] xs:px-[20px] pt-[57px] xs:pt-[34px] grid grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-[20px] xs:gap-[13px]">
        {checks.map((item) => (
          <li className="flex gap-[19px] items-center" key={item.id}>
            <input
              onChange={onChangeAdditional}
              checked={additional.some((add) => add.id === item.id)}
              type="checkbox"
              id={item.id}
              name={item.title}
              className="custom-checkbox"
            />
            <label
              htmlFor={item.id}
              className="text-[20px] whitespace-nowrap uppercase font-normal leading-[30px] text-[#000000]"
            >
              {item.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

Additionally.propTypes = {
  additional: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired,
  })).isRequired,
  setAdditional: PropTypes.func.isRequired,
};
