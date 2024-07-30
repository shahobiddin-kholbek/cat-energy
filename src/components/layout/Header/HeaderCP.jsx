import { Link, useLocation } from "react-router-dom";
import { navs } from "../../../utils";
import LogoDesctop from "../../ui/icons/logos/LogoDesctop";
import { PAGES_URLS } from "../../../config/urls.config";

export default function HeaderCP() {
  const pathname = useLocation().pathname;
  const isMain = pathname === PAGES_URLS.MAIN;
  return (
    <header className="relative  md:mx-[30px]">
      <div className="absolute z-10 top-0 pt-[53px] mx-[110px] md:mx-auto md:pt-[24px] pb-[29px] w-full grid grid-cols-2 md:flex md:justify-between md:items-end items-center">
        <LogoDesctop />
        <nav>
          <ul className="flex gap-[35.5px] md:gap-[34px] ">
            {navs.map((nav) => (
              <li
                key={nav.id}
                className={`pb-2 uppercase ${
                  nav.path === pathname
                    ? `border-b-2  ${
                        isMain
                          ? "border-b-[#FFFFFF] md:border-b-[#68B738]"
                          : "border-b-[#68B738]"
                      }`
                    : ""
                }`}
              >
                <Link
                  className={`${
                    isMain
                      ? "text-[#FFFFFF] md:text-[#111111]"
                      : "text-[#111111]"
                  } whitespace-nowrap text-[20px]    font-normal leading-[29.64px] md:text-[18px] md:leading-[24px]`}
                  to={nav.path}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
