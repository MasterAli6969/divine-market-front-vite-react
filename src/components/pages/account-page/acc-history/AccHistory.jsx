import { accHistoryDataTitle } from "../data";
import styles from "./acc_history.module.scss";

function AccHistory() {
  return (
    <div className={styles.div}>
      <h2>История сделок</h2>
      <ul>
        {!accHistoryDataTitle || accHistoryDataTitle.length === 0 ? (
          <h1>Ooops, server error, please wait...</h1>
        ) : (
          accHistoryDataTitle.map((item, index) => {
            return <li key={index}>{item}</li>;
          })
        )}
      </ul>
    </div>
  );
}

export default AccHistory;
