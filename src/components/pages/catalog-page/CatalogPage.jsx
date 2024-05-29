import Sidebar from "./sidebar/Sidebar";
import CatalogHeader from "./catalog-header/CatalogHeader";
import Catalog from "./catalog/Catalog";
import { headerDropdawnData, dropdawnData } from "./data";
function CatalogPage() {
  return (
    <div className="row p-0">
      <Sidebar dropdawnData={dropdawnData} />
      <div className="col-md-10 p-0">
        <CatalogHeader headerDropdawnData={headerDropdawnData} />
        <Catalog />
      </div>
    </div>
  );
}

export default CatalogPage;
