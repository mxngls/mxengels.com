import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div id="main">
          <section
            id="overview"
            className="mx-7 mt-7 mb-14 flex h-screen flex-col gap-7 font-light leading-6 sm:mx-20 md:mx-48 md:mt-14 lg:mx-64 xl:mx-72"
          >
            <h1 className="text-3xl font-semibold">
              Hi There!
              <span
                className="animate-wave ml-3 inline-block animate-shake"
                role="img"
                aria-label="hand"
              >
                👋🏼
              </span>
            </h1>
            <p>
              I&apos;m <b>Max</b> an independent developer focused on
              technologies involving the web. If you take a look at my projects
              you&apos;ll see that I have a keen interest in learning languages
              and Korean in particular.
            </p>
            <p>
              I&apos;m currently based in Seoul, South Korea. If by any chance
              you are in Korea I&apos;d love to meet you. I already made some
              friends here who before meeting them here only knew online.
            </p>
            <p>
              If for any reason you&apos;d like to contact me the easiest way to
              reach me is either via{" "}
              <a href="mailto:maximilian.e.heonig@mgail.com">email</a> or{" "}
              <a href="https://twitter.com/Mxngls">Twitter</a>
            </p>
            <a className="mx-auto" href="#about">
              About
            </a>
          </section>
          <section
            id="about"
            className="mx-7 flex h-screen flex-col justify-center gap-7 font-light leading-6 sm:mx-20 md:mx-48 lg:mx-64 xl:mx-72"
          >
            {" "}
            <Link href="/">
              <a className="mx-auto">Top</a>
            </Link>
            <h2 className="text-3xl font-semibold">About</h2>
            <p>
              Before coming to Korea I worked for roughly one and a half years
              in Germany in Finance at a big consulting company as an audit and
              finance professional. Before that I majored in Economics and
              Politics with a special focus on the region of East Asia.{" "}
            </p>
            <p>
              Besides programming I am especially interested in studying (Asian)
              languages. In addition to German and English I am fluent in
              Japanse. Since coming to Korea in the end of February in this year
              I intensified my Korean studies as well and am still taking
              language Course at Sogang University in Seoul.
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
}
