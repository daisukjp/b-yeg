"use client";

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
      <div>
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={300}
          duration={600}
          triggerOnce
        >
          <Link href={`/posts/${props.slug}`}>
            <h2>{props.title}</h2>
          </Link>
          {props.imageURL && (
            <Image
              src={props.imageURL}
              alt={props.title}
              width={500}
              height={300}
            />
          )}
          <p>{props.subtitle}</p>
          <p>{props.date}</p>
        </Reveal>
      </div>
    </>
  );
};

export default PostPreview;
