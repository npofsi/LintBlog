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
            <img
              className={styles.psectionMainBgImg}
              src="/images/bg_triangle_top_right.png"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          a {
            color: #5bbee5;
            text-decoration: underline;
          }

          h2 {
            font-size: 1.5rem;
          }
        `}
      </style>
    </>
  );
}
