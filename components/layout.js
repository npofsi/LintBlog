import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Section_Layout from "./lintlib/section";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.scss";
import Header from "./header";
import Footer from "./footer";

const name = "npofsi";
export const siteTitle = "npofsi's blog";

export default function Layout({ children, navActiveIndex }) {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.contentWrap}>
        <Header activeIndex={navActiveIndex} />
        <main>{children}</main></div>
        <Footer />
      </div>
      {/* 
      <Section_Layout corner="right">
        <div className={styles.container}>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="Learn how to build a personal website using Next.js"
            />
            <meta
              property="og:image"
              content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
              )}.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>

          <header className={styles.header}>
            {home ? (
              <>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={145}
                  width={145}
                  alt={name}
                />
                <h2 className={utilStyles.heading2Xl}>{name}</h2>
              </>
            ) : (
              <>
                <Link href="/">
                  <a>
                    <Image
                      priority
                      src="/images/profile.jpg"
                      className={utilStyles.borderCircle}
                      height={109}
                      width={109}
                      alt={name}
                    />
                  </a>
                </Link>
                <h3 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h3>
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </div>
      </Section_Layout> */}
    </>
  );
}
