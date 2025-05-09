import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <div box-="square">
        <div className={styles.secondBoxHeader}>
          <span is-="badge" variant-="background0">top-left</span>
          <span is-="badge" variant-="background0">top-right</span>
        </div>
        <div className={styles.secondBoxContent}>
          <p>Hi! I'm a developer passionate about creating beautiful and functional web applications.
          This portfolio is built using WebTUI, a framework that makes web applications look like
          terminal user interfaces.  </p>
        </div>
      </div>
      <div box-="square contain:none">
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
      </div>
    </div>
  );
} 