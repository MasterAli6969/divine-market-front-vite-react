import FilterIcon from "../../../../assets/icons/FilterIcon.svg";
import CustomDropdownList from "../../../common/custom-dropdown-list/CustomDropdownList";
import styles from "./sidebar.module.scss";

function Sidebar({ dropdawnData }) {
  return (
    <>
      <div className="col-md-2 p-0 ">
        <div className={styles.div}>
          <div className={styles.subdiv_title}>
            <img src={FilterIcon} />
            <h4>Фильтр</h4>
          </div>
          <div className={styles.subdiv_dropdown}>
            <CustomDropdownList dropdawnData={dropdawnData} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
