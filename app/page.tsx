import "./globals.css";
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
      <div>
        <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto ring-offset-primary ">
          {postPreviews}
        </main>
      </div>
    </main>
  );
}
