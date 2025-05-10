import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.pageHeading}>hi, my name is josh</h1>
      <div box-="round" className={styles.readmeBox}>
        <div className={styles.readmeBoxHeader}>
          <span is-="badge" variant-="background0" style={{ color: "var(--yellow)" }}>README.md</span>
          {/* <span is-="badge" variant-="background0">top-right</span> */}
        </div>
        <div className={styles.readmeBoxContent}>
          <p style={{ color: "var(--text)" }}>compeng undergrad interested in swe, embedded systems, ml, devops, hacking and computers in general</p>
        </div>
      </div>
      {/* <div box-="round contain:none">
        <div className={styles.firstBoxHeader}>
          <span is-="badge" variant-="background0">top-left</span>
          <span is-="badge" variant-="background0">top-right</span>
        </div>
        <div className={styles.firstBoxContent}>
          <p>Lorem ipsum dolor sit amet sit dolor ipsum lorem idk i dont speak french</p>
          <div className={styles.firstBoxButtonDiv}>
            <button box-="round" className={styles.firstBoxButtons}>Cancel</button>
            <button box-="round" className={styles.firstBoxButtons}>Ok</button>
          </div>
        </div>
        <div className={styles.firstBoxHeader}>
          <span is-="badge" variant-="background0">bottom-left</span>
          <span is-="badge" variant-="background0">bottom-right</span>
        </div>
      </div> */}
    </div>
  );
} 