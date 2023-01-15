import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import SectionMain from "../components/sectionMain";
import styles from "../styles/playground.module.css";
export default function Playground({}) {
  return (
    <>
      <Layout navActiveIndex={3}>
        <Head>
          <title>Playground</title>
        </Head>
        <SectionMain>
          <div className={styles.playgroundWrap}>
            <div className={styles.playgroundList}>
              <div className={styles.playgroundItem}>
                <div className={styles.playgroundBgPadding}></div>
                <Link href={"/"}>
                  <div className={styles.playgroundContent}>
                    <span className={styles.playgroundLink}>
                      Example Project
                    </span>
                    <span className={styles.playgroundDesc}>Description</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SectionMain>
      </Layout>
    </>
  );
}
