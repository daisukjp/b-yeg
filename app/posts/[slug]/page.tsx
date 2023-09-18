import Header from "@/app/header";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/components/getPostMetaData";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => {
    slug: post.slug;
  });
};

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <Header />
      <main className="">
        <div>
          <h1 style={{ fontSize: "32px" }}>{post.data.title}</h1>
          <p>{post.data.date}</p>
          <Markdown>{post.content}</Markdown>
        </div>
      </main>
    </>
  );
}
