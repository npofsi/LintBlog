import styles from "./sectionMain.module.css";

export default function SectionMain({ children }) {
  return (
    <>
      <div className={styles.psectionMainWrap}>
        <section className={styles.psectionMain}>
          <div className={styles.psectionContainer}>{children}</div>
        </section>
        <div className={styles.psectionMainBgWrap}>
          <div className={styles.psectionMainBg}>
            <img className={styles.psectionMainBgImg}
              src="/images/bg_triangle_top_right.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
