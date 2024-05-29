import { advantagesRight } from "../data";
import styles from "./advantages_right.module.scss";

function AdvantagesRight() {
  return (
    <div className={styles.div}>
      <ul>
        {!advantagesRight || advantagesRight.length === 0 ? (
          <h1>Ooops, server error, please wait...</h1>
        ) : (
          advantagesRight.map((item) => {
            return (
              <li key={item.id}>
                <h2>{item.title}</h2>
                <h4>{item.descriptiont}</h4>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default AdvantagesRight;
