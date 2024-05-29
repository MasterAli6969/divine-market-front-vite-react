import classNames from "classnames";
import CustomCatalogItems from "../../../common/custom-catalog-items/CustomCatalogItems";
import { popularDropDataLinks } from "../data";
import { catalogData } from "../../home-page/data";
import styles from "./catalog.module.scss";

function Catalog() {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_header}>
        <h3>Dota 2</h3>
        <h4>108k предметов</h4>
        <div className="dropdown">
          <button
            className={classNames("btn dropdown-toggle", styles.bropbutton)}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <h4>Самые популярные</h4>
          </button>
          <ul className="dropdown-menu">
            {!popularDropDataLinks || popularDropDataLinks.length === 0 ? (
              <h1>Ooops, server error, please wait...</h1>
            ) : (
              popularDropDataLinks.map((subitem) => {
                return (
                  <li key={subitem.id}>
                    <a className="dropdown-item" href={subitem.url}>
                      {subitem.title}
                    </a>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
      <CustomCatalogItems catalogData={catalogData} />
    </div>
  );
}
export default Catalog;
