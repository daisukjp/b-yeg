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

const StyledImage: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => (
  <div style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}>
    <figure
      style={{
        gap: "0.5rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          borderRadius: "10px",
          border: "0.1px solid #e5e7eb",
          backgroundColor: "#f3f3f3",
          color: "transparent",
          maxWidth: "none",
        }}
        width="1000"
        height="800"
      />
    </figure>
  </div>
);

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <Header />
      <main
        className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto ring-offset-primary"
        style={{
          fontFamily:
            "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        }}
      >
        <div>
          <p style={{ color: "#6f6f6f" }}>{post.data.date}</p>
          <h1 className="text-primary text-3xl font-bold tracking-tight leading-tight">
            {post.data.title}
          </h1>
          <Markdown
            options={{
              overrides: {
                img: {
                  component: StyledImage,
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
