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
                <div
                  className={styles.playgroundBgPadding}
                  style={{
                    background: "center url('/canvas-painter/preview.png')",
                  }}
                ></div>
                <Link href={"/canvas-painter/index.html"}>
                  <div className={styles.playgroundContent}>
                    <span className={styles.playgroundLink}>
                      chenyulian / canvas-painter
                    </span>
                    <span className={styles.playgroundDesc}>
                      一个支持 Stylus Web API 的画板
                    </span>
                  </div>
                </Link>
              </div>

              <div className={styles.playgroundItem}>
                <div
                  className={styles.playgroundBgPadding}
                  style={{ background: "center url('/sqooosh/preview.png')" }}
                ></div>
                <Link href={"/sqooosh/index.html"}>
                  <div className={styles.playgroundContent}>
                    <span className={styles.playgroundLink}>
                      GoogleChromeLab / sqooosh
                    </span>
                    <span className={styles.playgroundDesc}>
                      一个简单好用的图片压缩工具
                    </span>
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
