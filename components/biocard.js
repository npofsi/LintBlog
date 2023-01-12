import Link from "next/link";
import styles from "./biocard.module.css";


const name = "NPofSi | NaP硅"
const desc="欢迎来到铃奈庵，这是一个魔法的世界"

export default function Biocard({}) {
  return (
    <>
      <div className={styles.biocardWrap}>
        <div className={styles.biocardContainer}>
          <div className={styles.biocardContent}>
            <div className={styles.biocardAvatarWrap}>
              <img className={styles.biocardAvatar} src="./images/avatar.jpg" />
            </div>
            <div className={styles.biocardContext}>
              <div className={styles.biocardName}>{name}</div>
              <div className={styles.biocardDesc}>{desc}</div>
              <div className={styles.biocardList}>
                <Link href={"https://github.com/npofsi"} passHref>
                  <a><img className={styles.biocardItem} src="./icons/github-mark.svg"></img></a>
                </Link>
                <Link href={"mailto:npofsi@outlook.com"} passHref>
                  <a><img className={styles.biocardItem} src="./icons/email-mark.svg"></img></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
