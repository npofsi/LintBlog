import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import SectionMain from "../components/sectionMain";
import utilStyles from "../styles/utils.module.scss";
import Biocard from "../components/biocard";
import Abstracts from "../components/abstracts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <>
      <Layout navActiveIndex="0">
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <SectionMain>
          <Biocard></Biocard>
          <br />
          <Abstracts sortedPostsData={allPostsData}/>
        </SectionMain>
      </Layout>
    </>
  );
}
