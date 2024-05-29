import styles from "./acc_user_info.module.scss";

function AccUserInfo() {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_avatar}>
        <div />
      </div>
      <div className={styles.subdiv_info}>
        <div className={styles.subdiv_info_user_acc_data}>
          <p>Вы вошли как: divinemarket</p>
          <p>Стим ID: 76859463745871236</p>
          <p>Дата регистрации: 24.03.2024 </p>
        </div>
        <div className={styles.subdiv_info_user_ballance_data}>
          <div>
            <h2>Баланс</h2>
            <h2>158.29$</h2>
          </div>
          <div className={styles.subdiv_info_user_ballance_data_subdiv2}>
            <h4>Сделки: 15</h4>
            <h4>Заработано: 250.34$</h4>
          </div>
          <button>
            <h4>Вывести</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccUserInfo;
