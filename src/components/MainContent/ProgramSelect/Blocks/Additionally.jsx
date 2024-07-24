import CaptionInLine from "../../../ui/icons/CaptioninLine/CaptioninLine";
import { checks } from "../../../../dataes";


export default function Additionally() {
  return (
    <div className="pb-[61px]">
        <CaptionInLine caption='Дополнительно'/>
        <ul className="px-[110px] flex justify-between gap-[20px]">
            {checks.map((item) => (
                <li className="flex gap-[19px] items-center" key={item.id}>
                    <input type="checkbox" name="" id={item.title} className="custom-checkbox"/>
                    <label htmlFor={item.title} className="text-[20px] whitespace-nowrap uppercase font-normal leading-[30px] text-[#000000]">
                        {item.title}
                    </label>
                </li>
            ))}
        </ul>
    </div>
  )
}
