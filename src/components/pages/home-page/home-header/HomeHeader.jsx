import IconSerch from "../../../../assets/icons/IconSerch.svg";

import styles from "./home_header.module.scss";

function HomeHeader({ recommendedSelect, filterSelect }) {
  return (
    <>
      <div className="col-md-8 px-4">
        <div className={styles.div}>
          <div className={styles.subdiv_search}>
            <input placeholder="Поиск по Dota 2" type="text" />
            <div>
              <img src={IconSerch} />
            </div>
          </div>
          <div className={styles.subdiv_filters}>
            <div className="form-floating">
              <select
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>{recommendedSelect.selectDefault}</option>
                {recommendedSelect.selectItem &&
                recommendedSelect.selectItem.length ? (
                  recommendedSelect.selectItem.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.text}
                      </option>
                    );
                  })
                ) : (
                  <option>Ошибка</option>
                )}
              </select>
            </div>
            <div className="form-floating">
              <select
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>{filterSelect.selectDefault}</option>
                {filterSelect.selectItem && filterSelect.selectItem.length ? (
                  filterSelect.selectItem.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.text}
                      </option>
                    );
                  })
                ) : (
                  <option>Ошибка</option>
                )}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
