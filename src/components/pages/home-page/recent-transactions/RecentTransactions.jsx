import classNames from "classnames";
import CustomCatalogItems from "../../../common/custom-catalog-items/CustomCatalogItems";
import styles from "./recent_transactions.module.scss";

function RecentTransactions({ recentTransactionsData }) {
  return (
    <div className="col-md-12">
      <div className={styles.div}>
        <div className={styles.subdiv_title}>
          <h1>недавние сделки</h1>
          <div>
            <h4>Последнее обновление</h4>
            <p>20:00</p>
          </div>
        </div>
        <div className={styles.subdiv_content}>
          <div id="carouselExample" className="carousel slide">
            <div className={classNames("carousel-inner", styles.carousel_div)}>
              {!recentTransactionsData ||
              recentTransactionsData.length === 0 ? (
                <h1>Ooops errors server: please white...</h1>
              ) : (
                recentTransactionsData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={classNames("carousel-item", {
                        active: item.id === "1",
                      })}
                    >
                      <CustomCatalogItems
                        catalogData={item.data}
                        justifyContent={"center"}
                      />
                    </div>
                  );
                })
              )}
            </div>
            <button
              className={classNames(
                "carousel-control-prev",
                styles.prev_button
              )}
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className={classNames(
                "carousel-control-next",
                styles.next_button
              )}
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
