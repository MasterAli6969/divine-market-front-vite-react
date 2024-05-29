import AccHistory from "./acc-history/AccHistory";
import AccRefaral from "./acc-refaral/AccRefaral";
import AccUserInfo from "./acc-user-info/AccUserInfo";
import AccProgressBar from "./acc-progress-bar/AccProgressBar";
import styles from "./account_page.module.scss";

function AccountPage() {
  return (
    <div className="row px-3 pt-5">
      <div className="col-md-12 p-0">
        <div className={styles.div}>
          <h1>Аккаунт</h1>
          <div>
            <div>
              <button>История</button>
              <button>Рефералы</button>
              <button>Безопасность</button>
            </div>
            <button>Выйти</button>
          </div>
        </div>
      </div>
      <div className="col-md-3 p-0">
        <AccUserInfo />
      </div>
      <div className="col-md-9">
        <AccHistory />
        <AccRefaral />
      </div>
      <div className="col-md-12 p-0">
        <AccProgressBar />
      </div>
    </div>
  );
}

export default AccountPage;
