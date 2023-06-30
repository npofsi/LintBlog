import { parseISO, format } from "date-fns";
import Link from "next/link";
import styles from "./abstracts.module.css";

export default function Abstracts({ sortedPostsData }) {
  return (
    <>
      <div className={styles.abstractsListWrap}>
        <div className={styles.abstractsList}>
          <div className={styles.abstractsTitleWrap}>
            <span className={styles.abstractsTitle}>Recent Articles</span>
          </div>
          {sortedPostsData.map((v, i, arr) => (
            <div className={styles.abstractsCardWrap} key={i}>
              <Link href={"/posts/"+v.id}>
                <a className={styles.abstractsCardLink}>
                  <div className={styles.abstractsCard}>
                    <div className={styles.abstractsCardContent}>
                      <div className={styles.abstractsCardTitle}>{v.title}</div>
                      <div className={styles.abstractsCardMeta}>
                        <span>
                          <time dateTime={v.date}>{format(parseISO(v.date),"LLLL d, yyyy")}</time>
                        </span>
                        <span></span>
                      </div>
                      <div className={styles.abstractsCardAbs}>{v.content}</div>
                    </div>
                    <div className={styles.abstractsCardImgWrap}>
                      {/* <img
                        className={styles.abstractsCardImg}
                        src={v.img ? v.img : "/images/bg-test.jpg"}
                      ></img> */}
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
