import React, { useContext } from "react";
import Layout from "../components/Layout";

import { LanguageContext } from "../components/LanguageContext";

export default function Home() {
  const { content } = useContext(LanguageContext);
  return (
    <>
      <Layout>
        <div id="main">
          <section
            id="overview"
            className="mx-5 mt-7 mb-14 flex h-screen flex-col gap-7 font-light leading-6 sm:mx-20 md:mx-48 md:mt-14 lg:mx-64 xl:mx-72"
          >
            <h1 className="text-3xl font-semibold">
              {content.index.overview.title}
              <span
                className="animate-wave ml-3 inline-block animate-shake"
                role="img"
                aria-label="hand"
              >
                👋🏼
              </span>
            </h1>
            {content.index.overview.text.map((p, i) => {
              return (
                <p
                  key={`overview-${i}`}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              );
            })}
            <a className="mx-auto" href="#about">
              About
            </a>
          </section>
          <section
            id="about"
            className="mx-7 flex h-screen flex-col justify-center gap-7 font-light leading-6 sm:mx-20 md:mx-48 lg:mx-64 xl:mx-72"
          >
            <h2 className="text-3xl font-semibold">
              {content.index.about.title}
            </h2>
            {content.index.about.text.map((p, i) => {
              return (
                <p key={`about-${i}`} dangerouslySetInnerHTML={{ __html: p }} />
              );
            })}
          </section>
        </div>
      </Layout>
    </>
  );
}
