import fs from "fs";
import path from "path";
import matter from "gray-matter";

// import { remark } from "remark";
// import html from "remark-html";
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import rehypeSanitize from 'rehype-sanitize'
// import rehypeStringify from 'rehype-stringify'

import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
const postsDirectory = path.join(process.cwd(), "posts");

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // console.log(matterResult);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      date: matterResult.data.date.toISOString(),
      content: matterResult.content
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}



export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);


  const md=new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,

    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }
  
      return ''; // use external default escaping
    }
  })

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .use(remarkParse)
  //   .use(remarkRehype)
  //   .use(rehypeSanitize)
  //   .use(rehypeStringify)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  const contentHtml = md.render(matterResult.content);
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
    date: matterResult.data.date.toISOString(),
  };
}
