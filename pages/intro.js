import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import SectionMain from "../components/sectionMain";

import styles from "../styles/intro.module.css";

import classnames from "classnames";

const friends = [
  {
    name: "Canary pwn",
    link: "https://aaaab3n.moe/",
    avatar:
      "https://who.aaaab3n.moe/assets/canarypwn@1x.00a95518.webp",
  },
  {
    name: "Jimmy Tian",
    link: "http://www.twznow.com/",
    avatar: "https://2f07.misaka.pet/assets/images/jimmytian@1x.png",
  },
  {
    name: "Hiiragi",
    link: "http://blog.hiirachan.moe/",
    avatar: "https://avatars.githubusercontent.com/u/42064430?v=4",
  },
  {
    name: "Lakphy",
    link: "http://lakphy.github.io/",
    avatar: "https://avatars.githubusercontent.com/u/34190570?v=4",
  },
  {
    name: "WGQCreeper",
    link: "https://wgqcreeper.xyz/",
    avatar: "https://raw.gitmirror.com/wgqcreeper/blogPics/main/202402271026809.png",
  }
];

export default function Intro({}) {
  return (
    <>
      <Head>
        <title>Introduction</title>
      </Head>

      <Layout navActiveIndex={2}>
        <SectionMain>
          <div className={styles.introWrap}>
            <div className={styles.introHeader}>
              <h1 className={styles.introName}>Introduction</h1>
            </div>

            <div className={styles.introContainer}>
              <div className={styles.introContent}>
                <article>
                  <h1 dir="auto" className={styles.introHeading}>
                    <img
                      className={styles.introAvatar}
                      src="/images/avatar.jpg"
                    ></img>
                    {/* <a
                      id="user-content-hello"
                      class="anchor"
                      aria-hidden="true"
                      href="#hello"
                    >
                      <svg
                        class="octicon octicon-link"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                        ></path>
                      </svg>
                    </a> */}
                    <br/>
                    
                    YaHello
                  </h1>
                  <p dir="auto">I'm npofsi /bo:sI/.</p>
                  <p dir="auto">Love CoCo!</p>
                  <p dir="auto">Trying to be an electronics engineer.</p>
                  <p></p>
                </article>
              </div>
            </div>
            <h3 className={styles.friendsHeader}>Friends</h3>
            <div className={styles.friendsContainer}>
              {friends.map((friend) => (
                <div
                  className={classnames(styles.friendsWrap, "floatcard")}
                  key={friend.name}
                >
                  <img
                    className={styles.friendsAvatar}
                    src={friend.avatar ? friend.avatar : "/images/avatar.jpg"}
                  ></img>
                  <div>
                    <Link href={friend.link}>
                      <a className={styles.friendsLink}>{friend.name}</a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionMain>
      </Layout>
    </>
  );
}
