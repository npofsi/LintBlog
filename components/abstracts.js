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
              <div className={styles.abstractsCard}>
                <div className={styles.abstractsCardContent}>
                  <div className={styles.abstractsCardTitle}>{v.title}</div>
                  <div className={styles.abstractsCardMeta}>
                    <span>
                      {(() => {
                        v.date.replace(/(T|Z)/, " ");
                        return v.date;
                      })()}
                    </span>
                    <span></span>
                  </div>
                  <div className={styles.abstractsCardAbs}>{v.content}</div>
                </div>
                <div className={styles.abstractsCardImgWrap}>
                  <img
                    className={styles.abstractsCardImg}
                    src={v.img ? v.img : "./images/avatar2.jpg"}
                  ></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}