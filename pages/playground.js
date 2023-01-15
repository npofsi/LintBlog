import Link from "next/link";
import Layout from "../components/layout";
import SectionMain from "../components/sectionMain";
import styles from "../styles/playground.module.css";
export default function Playground({}) {
  return (
    <>
      <Layout navActiveIndex={3}>
        <SectionMain>
          <div className={styles.playgroundWrap}>
            <div className={styles.playgroundList}>
              <div className={styles.playgroundItem}>
                <div className={styles.playgroundBgPadding}></div>
                <div className={styles.playgroundContent}>
                  <Link href={""}>
                    <a className={styles.playgroundLink}>Example Project</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionMain>
      </Layout>
    </>
  );
}
