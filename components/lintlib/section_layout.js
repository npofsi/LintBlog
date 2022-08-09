import Image from "next/image";

import styles from "./section_layout.module.scss";
import cn from "classnames";
export default function Section_Layout({ children, corner }) {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>{children}</div>

          <div
            className={cn({
              [styles.bgholder_left]: corner === "left",
              [styles.bgholder_right]: corner === "right",
            })}
          >
            <div
              className={cn({
                [styles.mask_left]: corner === "left",
                [styles.mask_right]: corner === "right",
              })}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
