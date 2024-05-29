import styles from "./footer.module.scss";
import { footerLinksData, socialData } from "../data";
function Footer() {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_logo}>
        <h1>Divine Market </h1>
      </div>
      <ul className={styles.subdiv_links}>
        {!footerLinksData || footerLinksData.length === 0 ? (
          <h1>Ooops, server error, please wait...</h1>
        ) : (
          footerLinksData.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.text}</a>
              </li>
            );
          })
        )}
      </ul>
      <div className={styles.subdiv_social}>
        <p>Подписывайтесь</p>
        <ul>
          {!socialData || socialData.length === 0 ? (
            <h1>Ooops, server error, please wait...</h1>
          ) : (
            socialData.map((item) => {
              return (
                <li key={item.id}>
                  <div>{<item.icon />}</div>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div className={styles.subdiv_info}>
        <div>
          <p>INFO@DIVINE.COM</p>
          <i className="bi bi-arrow-up-right" />
        </div>
        <p>2024 Divine market</p>
      </div>
    </div>
  );
}

export default Footer;
