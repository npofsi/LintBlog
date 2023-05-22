import Head from "next/head";

import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Layout from "../../components/layout";
import SectionMain from "../../components/sectionMain";
import utilStyles from "../../styles/utils.module.scss";

import Article from "../../components/article";
import classNames from "classnames";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Layout navActiveIndex={1}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <SectionMain>
          <Article imgSrc={postData.img}>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </Article>
        </SectionMain>
      </Layout>
      <style jsx>{`
        a {
          color:#5bbee5;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
