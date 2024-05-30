import CustomCatalogItems from "../../../common/custom-catalog-items/CustomCatalogItems";
import { catalogData } from "../data";
import styles from "./home_catalog.module.scss";
function HomeCatalog() {
  return (
    <>
      <div className="col-md-9">
        <div className={styles.div}>
          <div>
            <CustomCatalogItems catalogData={catalogData} />
          </div>
          <a href="/catalog">
            <button>Посмотреть все</button>
          </a>
        </div>
      </div>
    </>
  );
}
export default HomeCatalog;
