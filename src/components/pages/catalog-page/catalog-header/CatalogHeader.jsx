import CustomDropdownList from "../../../common/custom-dropdown-list/CustomDropdownList";
import styles from "./catalog_header.module.scss";

function CatalogHeader({ headerDropdawnData }) {
  return (
    <>
      <div className={styles.div}>
        <CustomDropdownList dropdawnData={headerDropdawnData} view="horizont" />
      </div>
    </>
  );
}
export default CatalogHeader;
