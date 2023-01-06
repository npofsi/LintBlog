import Image from "next/image";

import styles from "./section_layout.module.scss";
import cn from "classnames";
export default function Section_Layout({ children, corner }) {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>{children}</div>
        </div>
      </section>
    </>
  );
}
