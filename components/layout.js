import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Section_Layout from "./lintlib/section";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.scss";
import Header from "./header";
import Footer from "./footer";

const name = "npofsi";
export const siteTitle = "NPofSi's Blog";

export default function Layout({ children, navActiveIndex }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/avatar.jpg" />
        <meta
          name="description"
          content="NPofSi's blog, check out what is useful."
        />
        <meta
          property="og:image"
          content="/images/avatar.jpg"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.contentWrap}>
          <Header activeIndex={navActiveIndex} />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
