import FootLogoDesk from "../../ui/icons/logos/FootLogoDesk";
import VK_icon from "../../ui/icons/social-medias/VK";
import InstaIcon from "../../ui/icons/social-medias/Insta";
import FB_icon from "../../ui/icons/social-medias/FB";
import { Link } from "react-router-dom";
import MapBlock from "../../ui/MapBlock/MapBlock";
export default function FooterCP() {
  return (
    <footer className="flex flex-col">
      <MapBlock />
      <div className="xs:pt-[39px] xs:px-[20px] xs:pb-[22px] bg-[#F2F2F2] w-full border h-[149px] xs:h-auto lg:px-[110px] md:px-[30px] flex justify-center items-center">
        <div className="flex xs:flex-col w-full h-[34px] xs:h-auto justify-between xs:justify-start items-center">
          <div className="">
            <FootLogoDesk />
          </div>
          <div className="flex xs:py-[20px] xs:justify-center xs:w-full xs:mt-[32px] mb-[22px] xs:border-y xs:border-[#D9D9D9] gap-[27px] xs:gap-[34px] items-center">
            <Link to="/#" target="_blank" className="hover:opacity-80">
              <VK_icon />
            </Link>
            <Link to="/#" target="_blank" className="hover:opacity-80">
              <InstaIcon />
            </Link>
            <Link to="/#" target="_blank" className="hover:opacity-80">
              <FB_icon />
            </Link>
          </div>
          <p className="text-[#666666] font-normal ">
            © 2024 Cat Energy. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
