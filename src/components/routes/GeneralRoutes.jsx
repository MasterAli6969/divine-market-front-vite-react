import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import CatalogPage from "../pages/catalog-page/CatalogPage";
import AdvantagesPage from "../pages/advantages-page/AdvantagesPage";
import FaqPage from "../pages/faq-page copy/FaqPage";
import AccountPage from "../pages/account-page/AccountPage";

function GeneralRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/advantages" element={<AdvantagesPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/faq" element={<FaqPage />} />
    </Routes>
  );
}
export default GeneralRoutes;
