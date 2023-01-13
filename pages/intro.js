import Layout from "../components/layout";
import SectionMain from "../components/sectionMain";

import styles from "../styles/intro.module.css";

export default function Intro({}) {
  return (
    <>
      <Layout navActiveIndex={2}>
        <SectionMain>
          <div className={styles.introWrap}>
            <div className={styles.introHeader}>
              <h1 className={styles.introName}>Introduction</h1>
              <div className={styles.introAvatarWrap}>
              <img
                className={styles.introAvatar}
                src="/images/avatar.jpg"
              ></img>
            </div>
            </div>
            
            <div className={styles.introContainer}>
              <div className={styles.introContent}>Hello</div>
            </div>
          </div>
        </SectionMain>
      </Layout>
    </>
  );
}
