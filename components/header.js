import { useState, useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import styles from "./header.module.css";

const navigations = {
  Home: "/",
  Articles: "/articles",
  Intro: "/intro",
  Playground: "/playground",
};
const title = "";

export default function Header({ activeIndex }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    console.log(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.headerWrap}>
        <header className={classNames(styles.navHeader)}>
          
          <div className={classNames(styles.navContainer)}>
          <div className={styles.headerNotificationWrap}>
            <div className={styles.headerNotification}>
              <p>This website is under CONSTRUCTING</p>
            </div>
          </div>
            <nav className={styles.navbar}>
              <h1 className={styles.navTitle}>{title}</h1>
              <ul className={styles.navList}>
                {Object.entries(navigations).map(([k, v], i) => (
                  <li className={styles.navItem} key={i}>
                    <Link href={v}>
                      <a
                        className={classNames(
                          styles.navLink,
                          i == activeIndex ? styles.navActived : ""
                        )}
                        active="true"
                      >
                        {k}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </div>
      <Script src="/scripts/inject.js"></Script>
    </>
  );
}
