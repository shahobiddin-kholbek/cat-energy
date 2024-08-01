import { Link, useLocation } from "react-router-dom";
import { navs } from "../../../utils";
import PropTypes from "prop-types";

export default function MobileDrawer({ setOpenMenu }) {
  const pathname = useLocation().pathname;
  return (
    <ul className="w-full shadow-lg h-[200px] absolute top-[64px] z-50 ">
      {navs.map((item) => (
        <li
          key={item.id}
          className={`${pathname === item.path ? "bg-[#F2F2F2]" : "bg-white"}  border-t-2 h-[66px] flex flex-col justify-center items-center `}
        >
          <Link
            onClick={() => setOpenMenu(false)}
            to={item.path}
            className={`whitespace-nowrap ${pathname === item.path ? "pb-1 border-b-2 border-b-[#68B738]" : "text-black"} text-black text-20px leading-5 font-medium`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MobileDrawer.propTypes = {
  setOpenMenu: PropTypes.func,
};
