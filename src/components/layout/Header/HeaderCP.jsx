import { Link, useLocation } from "react-router-dom";
import { navs } from "../../../utils";
import LogoDesctop from "../../ui/icons/logos/LogoDesctop";
import { PAGES_URLS } from "../../../config/urls.config";

export default function HeaderCP() {
  const pathname = useLocation().pathname;
  const isMain = pathname === PAGES_URLS.MAIN
  return (
    <header className="absolute z-10 top-0 mx-[110px] pt-[53px] pb-[29px] w-full grid grid-cols-2 items-center">
      <LogoDesctop />
      <nav>
        <ul className="flex gap-[35.5px]">
          {navs.map((nav) => (
            <li
              key={nav.id}
              className={`pb-2 uppercase ${
                nav.path === pathname ? `border-b-2  ${isMain ? "border-b-[#FFFFFF]" : "border-b-[#68B738]"}` : ""
              }`}
            >
              <Link
                className={`${isMain ? "text-[#FFFFFF]" : "text-[#111111]"} whitespace-nowrap text-[20px] font-normal leading-[29.64px]`}
                to={nav.path}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
