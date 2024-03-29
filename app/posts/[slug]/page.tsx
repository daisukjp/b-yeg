import "./post.css";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Header from "@/app/header";
import getPostMetadata from "@/components/getPostMetaData";
import Head from "next/head";
import StyledH2 from "@/app/StyledH2";
import StyledP from "@/app/StyledP";
import StyledImage from "@/app/StyledImage";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const metaData = post.data;

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.subtitle} />
        <meta
          property="og:image"
          content={`https://www.yourdomain.com${metaData.imageURL}`}
        />
        <meta
          property="og:url"
          content={`https://www.yourdomain.com/posts/${slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main
        className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto ring-offset-primary"
        style={{
          fontFamily:
            "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        }}
      >
        <div>
          <Markdown
            options={{
              overrides: {
                img: {
                  component: StyledImage,
                },
                h2: {
                  component: StyledH2,
                },
                p: {
                  component: StyledP,
                },
              },
            }}
          >
            {post.content}
          </Markdown>
        </div>
      </main>
    </>
  );
}
