"use client";

import Image from "next/image";
import "./about.css";
import Header from "../header";
import { Reveal } from "react-awesome-reveal";
import { keyframes, Keyframes } from "@emotion/react";
import XLOGO from "../images/xLogo.png";

export default function About() {
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

  return (
    <>
      <Header />
      <main className="px-6 md:px-6 pt-4 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto ring-offset-primary">
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={300}
            duration={600}
            triggerOnce
          >
            <div style={{ gap: "2rem" }}>
              <h1 className="animate-in text-3xl font-medium tracking-tight">
                About
              </h1>
            </div>
          </Reveal>

          <div className="aboutBody-top">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={300}
              duration={600}
              triggerOnce
            >
              <section className="profile-container"></section>
              <section className="aboutBody-section">
                <h2 className="aboutBody-h2">About</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    color: "#171717",
                  }}
                >
                  <p>Hello world, Daisukeです!</p>
                  <p>
                    アルバータ州 エドモントン在住、カナダの某建設会社でFull
                    Stack Developerとして働いています!
                  </p>
                  <p>
                    2021年8月にカナダへ渡航、2023年4月にNAITを卒業、PGWPを取得して現在は働いています。
                    2024~2025でPRの申請予定です!
                  </p>
                  <p>
                    自分が書きたいことやリクエストがあったことをブログにしていく予定です:)
                    リクエストは{" "}
                    <a href="https://twitter.com/daisukjp" target="_blank">
                      @daisukjp まで!
                    </a>
                  </p>
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
