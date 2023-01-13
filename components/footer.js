import styles from "./footer.module.css"
export default function Footer({ }) {
  return (
    <>
      <div className={styles.footerWrap}>
        <div className={styles.footerContainer}>
          <div>
            <p>©2023 npofsi · powered by Next.js</p>
          </div>
        </div>
      </div>
    </>
  )
}