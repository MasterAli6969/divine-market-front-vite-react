import CustomDropdownList from "../../../common/custom-dropdown-list/CustomDropdownList";
import styles from "./catalog_header.module.scss";

function CatalogHeader({ headerDropdawnData }) {
  return (
    <>
      <div className=" p-0">
        <div className={styles.div}>
          <CustomDropdownList
            dropdawnData={headerDropdawnData}
            view="horizont"
          />
        </div>
      </div>
    </>
  );
}
export default CatalogHeader;
