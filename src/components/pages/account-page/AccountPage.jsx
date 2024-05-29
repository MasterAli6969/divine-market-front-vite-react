import { useState } from "react";
import AccHistory from "./acc-history/AccHistory";
import AccRefaral from "./acc-refaral/AccRefaral";
import AccUserInfo from "./acc-user-info/AccUserInfo";
import AccProgressBar from "./acc-progress-bar/AccProgressBar";
import styles from "./account_page.module.scss";

function AccountPage() {
  const [activeButton, setActiveButton] = useState("history");

  const handleButtonClick = (buttonName) => {
    switch (buttonName) {
      case "history":
        setActiveButton("history");
        break;
      case "referrals":
        setActiveButton("referrals");
        break;
      case "security":
        setActiveButton("security");
        break;
      default:
        setActiveButton("history");
    }
  };

  return (
    <div className="row mx-0 mt-5 py-3 px-5">
      <div className="col-md-12 p-0">
        <div className={styles.div}>
          <h1>Аккаунт</h1>
          <div>
            <div>
              <button
                className={activeButton === "history" ? styles.active : ""}
                onClick={() => handleButtonClick("history")}
              >
                История
              </button>
              <button
                className={activeButton === "referrals" ? styles.active : ""}
                onClick={() => handleButtonClick("referrals")}
              >
                Рефералы
              </button>
              <button
                className={activeButton === "security" ? styles.active : ""}
                onClick={() => handleButtonClick("security")}
              >
                Безопасность
              </button>
            </div>
            <button>Выйти</button>
          </div>
        </div>
      </div>
      <div className="col-md-3 p-0">
        <AccUserInfo />
      </div>
      <div className="col-md-9">
        {activeButton === "history" && <AccHistory />}
        {activeButton === "referrals" && <AccRefaral />}
        {activeButton === "security" && <div>Security Content</div>}
      </div>
      <div className="col-md-12 p-0">
        {activeButton === "referrals" && <AccProgressBar />}
      </div>
    </div>
  );
}

export default AccountPage;
