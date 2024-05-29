import classNames from "classnames";
import styles from "./custom_dropdown_list.module.scss";

function CustomDropdownList({ dropdawnData, view }) {
  return (
    <>
      <div>
        <div className={styles.div}>
          <div
            className={classNames(styles.subdiv_filters, {
              [styles._view]: view === "horizont",
            })}
          >
            {!dropdawnData || dropdawnData.length === 0 ? (
              <h1>Ooops, server error, please wait...</h1>
            ) : (
              dropdawnData.map((item) => {
                return (
                  <div key={item.id} className="dropdown">
                    <button
                      className={classNames(
                        "btn dropdown-toggle",
                        styles.bropbutton
                      )}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <h4>{item.title}</h4>
                    </button>
                    <ul className="dropdown-menu">
                      {!item.dropdawnItems ||
                      item.dropdawnItems.length === 0 ? (
                        <h1>Ooops, server error, please wait...</h1>
                      ) : (
                        item.dropdawnItems.map((subitem) => {
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
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default CustomDropdownList;
