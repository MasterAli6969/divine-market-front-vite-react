import styles from "./acc_progress_bar.module.scss";

function AccProgressBar() {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_caption_amount}>
        <p>3,500$</p>
        <p>10,000$</p>
        <p style={{ fontWeight: "700" }}>15,000$</p>
        <p>30,000$</p>
      </div>
      <div
        style={{
          overflow: "visible",
        }}
        className="progress mb-2"
        role="progressbar"
        aria-valuenow="10"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div style={{ width: "100%" }}>
          <div className={styles.progress_boll}>
            <div className={styles.step_one} />
            <div className={styles.step_two} />
            <div className={styles.step_three} />
            <div className={styles.step_four} />
            <div
              className={styles.progress_div}
              style={{
                backgroundColor: "red",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.subdiv_caption_procent}>
        <p>0,5%</p>
        <p>1%</p>
        <p>1,5%</p>
        <p>2%</p>
      </div>
    </div>
  );
}

export default AccProgressBar;
