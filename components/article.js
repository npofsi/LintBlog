import classNames from "classnames";
import Head from "next/head";
import styles from "./article.module.css";

import hljs from 'highlight.js';
import 'highlight.js/styles/base16/github.css';

import { useEffect } from "react";

export default function Article({ children, imgSrc }) {

  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <Head>
      </Head>

      <div className={classNames("blur4", styles.articleWrap)}>
        <div className={styles.articleInfo}>
          {/* <img src={imgSrc ? imgSrc : "/images/avatar.jpg"}></img> */}
        </div>
        <div className={styles.articleContainer}>
          <div className={styles.article}>{children}</div>
        </div>
      </div>
    </>
  );
}
