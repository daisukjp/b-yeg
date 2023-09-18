import Header from "./header";
import fs from "fs";

const getPostMetaData = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
};

export default function Home() {
  return (
    <main className="">
      <Header />
    </main>
  );
}
