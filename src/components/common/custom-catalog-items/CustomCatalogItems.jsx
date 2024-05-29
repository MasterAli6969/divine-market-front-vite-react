import CustomCartButton from "../custom-cart-button/CustomCartButton";
import classNames from "classnames";
import styles from "./custom_catalog_items.module.scss";

function CustomCatalogItems({ catalogData, justifyContent }) {
  return (
    <>
      <div
        className={classNames(styles.div, {
          [styles.div_center]: justifyContent === "center",
        })}
      >
        {!catalogData || catalogData.length === 0 ? (
          <h1>Ooops error 404</h1>
        ) : (
          catalogData.map((item) => {
            return (
              <div key={item.id} className={styles.subdiv}>
                <div className={styles.subdiv_head}>
                  <img src={item.lockIcon} />
                  <p>{item.lockTitle}</p>
                </div>
                <div className={styles.subdiv_content}>
                  <img src={item.image} />
                </div>
                <div className={styles.subdiv_foot}>
                  <div>
                    <span>Faceless Void</span>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <CustomCartButton propsBackground={"gradient"} />
                  </div>
                </div>
                <div className={styles.subdiv_sale}>
                  <div>
                    <div>
                      <p>
                        <s>{item.oldPrice} ₽</s>
                      </p>
                      <div>{item.discountProcent}%</div>
                    </div>
                    <h4>{item.newPrice} ₽</h4>
                  </div>
                  <div>
                    <CustomCartButton />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default CustomCatalogItems;
