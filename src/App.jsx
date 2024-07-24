import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/MainContent/Home/Home";
import { PAGES_URLS } from "./config/urls.config";
import Catalogs from "./components/MainContent/Catalog/Catalog";
import ProgramSelect from "./components/MainContent/ProgramSelect/ProgramSelect";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white overflow-hidden">
      <Layout>
        <Routes>
          <Route path={PAGES_URLS.MAIN} element={<Home />} />
          <Route path={PAGES_URLS.PRODUCTS} element={<Catalogs />} />
          <Route path={PAGES_URLS.PROGRAM_SELECTION} element={<ProgramSelect />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
