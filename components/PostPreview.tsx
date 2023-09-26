"use client";

import "./postPreview.css";
import Image from "next/image";
import Link from "next/link";
import { PostMetaData } from "./PostMetaData";
import { Reveal } from "react-awesome-reveal";
import { keyframes, Keyframes } from "@emotion/react";

const fadeInUp: Keyframes = keyframes`
0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
}
100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
}`;

const PostPreview = (props: PostMetaData) => {
  // console.log(props.slug);
  return (
    <>
      <div className="flex flex-col gap-12 md:gap-24">
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={300}
          duration={600}
          triggerOnce
        >
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="animate-in text-3xl font-bold tracking-tight">
                Blogs
              </h1>
              <p
                className="text-secondary animate-in"
                style={{ color: "#6f6f6f" }}
              >
                More blogs coming soon....
              </p>
            </div>
          </div>
          <ul className="animate-in flex flex-col animated-list">
            <li className="py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 ">
              <Link
                href={`/posts/${props.slug}`}
                className="w-full md:w-2/5 aspect-video bg-secondary rounded-lg border border-primary overflow-clip select-none"
              >
                {props.imageURL && (
                  <Image
                    src={props.imageURL}
                    alt={props.title}
                    width={500}
                    height={300}
                    style={{
                      // position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      objectFit: "cover",
                      color: "transparent",
                    }}
                    className=" w-full h-full "
                  />
                )}
              </Link>
              <div>
                <p style={{ color: "#6f6f6f" }}>{props.date}</p>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
              </div>
            </li>
          </ul>
        </Reveal>
      </div>
    </>
  );
};

export default PostPreview;
