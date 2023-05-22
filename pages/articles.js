import Layout from "../components/layout";
import SectionMain from "../components/sectionMain";
export default function ({ }) {
  return (
    <>
      <Layout navActiveIndex={1}>
        <SectionMain/>

      </Layout>
      <link rel="stylesheet" type="text/css" href="https://sfc-arch.github.io/remark-theme/blue_standard/remark_theme_blue_standard.css"/>
    </>
  )
}