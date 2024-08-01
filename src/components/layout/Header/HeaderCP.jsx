import { Link, useLocation } from "react-router-dom";
import { navs } from "../../../utils";
import LogoDesctop from "../../ui/icons/logos/LogoDesctop";
import LogoMobile from "../../ui/icons/logos/LogoMobile";
import NameLogoMobile from "../../ui/icons/logos/NameLogoMobile";
import { PAGES_URLS } from "../../../config/urls.config";
import { useEffect, useState } from "react";
import styles from './header.module.scss'
import MobileDrawer from "./MobileDrawer";


export default function HeaderCP() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false)
  const pathname = useLocation().pathname;
  const isMain = pathname === PAGES_URLS.MAIN;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 431);
    };
    if (!isMobile) {
      setOpenMenu(false);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <header className="relative md:mx-[30px]">
      <div className="absolute xs:relative z-30 top-0 pt-[53px] mx-[110px] md:mx-auto xs:mx-[20px] md:pt-[24px] xs:pt-[10px] pb-[29px] xs:pb-[17px] w-full xs:w-auto flex justify-between md:items-end items-center lg:grid lg:grid-cols-2 ">
        <Link to={PAGES_URLS.MAIN}>{isMobile ? <LogoMobile /> : <LogoDesctop />} </Link>
        {isMobile && <NameLogoMobile />}
        <nav className="relative">
          {isMobile && (
            <>
              <div
                onClick={() => setOpenMenu(!isOpenMenu)}
                className={`${styles.hamburger} ${
                  isOpenMenu ? styles.active : ""
                } `}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </>
          )}
          <ul
            className={`${
              isMobile && "hidden"
            } flex gap-[35.5px] md:gap-[34px] `}
          >
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
        {isOpenMenu && 
          <MobileDrawer setOpenMenu={setOpenMenu}/>
        }
      </div>
    </header>
  );
}
