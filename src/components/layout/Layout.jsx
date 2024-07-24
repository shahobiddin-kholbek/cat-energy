import FooterCP from "./Footer/FooterCP";
import HeaderCP from "./Header/HeaderCP";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="relative  flex flex-col min-h-screen">
      <HeaderCP />
      <main className="flex-1">{children}</main>
      <FooterCP />
    </div>
  );
}
