import CopyIcon from "../../../../assets/icons/CopyIcon.svg";
import styles from "./acc_refaral.module.scss";

function AccRefaral() {
  return (
    <div className={styles.div}>
      <h2>Ваша реферальная ссылка</h2>
      <p>
        Пригласите друзей и получите от<span> 0,5% до 2%</span> от суммы
        транзакции. Когда вы перейдете по своей реферальной ссылке, будет
        записано количество приглашенных пользователей и доля пользователей,
        которые связались с нами.
      </p>
      <div className={styles.subdiv_ref}>
        <div>
          <p>https://divine.market/VmXNTee2p56</p>
        </div>
        <button>
          <img src={CopyIcon} />
          <p>Скопировать</p>
        </button>
      </div>
    </div>
  );
}

export default AccRefaral;
