import Link from "next/link";
import Header from "./header";
import getPostMetaData from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";

export default function Home() {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main className="">
      <Header />
      <div>{postPreviews}</div>
    </main>
  );
}
