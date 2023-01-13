import Layout from "../components/layout";
import SectionMain from "../components/sectionMain";

import styles from "../styles/intro.module.css"

export default function Intro({}) {
  return (
    <>
      <Layout navActiveIndex={2}>
        <SectionMain />
      </Layout>
    </>
  );
}
