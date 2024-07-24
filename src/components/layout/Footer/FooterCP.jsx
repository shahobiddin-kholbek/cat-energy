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
      <div className="bg-[#F2F2F2] w-full border h-[149px] px-[110px] flex justify-center items-center">
        <div className="flex w-full h-[34px] justify-between items-center">
          <FootLogoDesk />
          <div className="flex gap-[27px] items-center">
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
          <p className="text-[#666666] font-normal leading-[18.2px]">
            © 2024 Cat Energy. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
