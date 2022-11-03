import Layout from "../components/Layout";
import { LanguageContext } from "../components/LanguageContext";

import { useContext } from "react";

export default function Projects() {
  const language = useContext(LanguageContext).content;
  return (
    <Layout>
      <section
        id="projects"
        className="mx-5 mt-7 mb-14 flex h-screen flex-col gap-7 font-light leading-6 sm:mx-20 md:mx-48 md:mt-14 lg:mx-64 xl:mx-72"
      >
        <h1 className="text-3xl font-semibold">Projects</h1>
        {language.projects.projects.text.map((p, i) => {
          return (
            <p key={`overview-${i}`} dangerouslySetInnerHTML={{ __html: p }} />
          );
        })}
        <ul className="mt-4 flex flex-col items-center justify-center gap-6">
          <li id="project">
            <a
              className="relative h-44 w-96 md:h-[12rem] md:w-[27rem]"
              href="https://github.com/mxngls/Gmail-Cleaner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source
                  srcSet="https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=Gmail-Cleaner"
                  type="image/webp"
                />
                <img
                  className="object-fill"
                  alt="Gmail-Cleaner"
                  src="https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=Gmail-Cleaner"
                />
              </picture>
            </a>
          </li>
          <li id="project">
            <a
              className="relative h-44 w-96 md:h-[12rem] md:w-[27rem]"
              href="https://github.com/mxngls/kled-scraper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source
                  srcSet="https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=kled-scraper"
                  type="image/webp"
                />
                <img
                  className="object-cover"
                  alt="kled-scraper"
                  src="https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=kled-scraper"
                />
              </picture>
            </a>
          </li>
          <li id="project">
            <a
              className="relative h-44 w-96 md:h-[12rem] md:w-[27rem]"
              href="https://github.com/mxngls/kled-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source
                  srcSet="https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=kled-web"
                  type="image/webp"
                />
                <img
                  className="object-cover"
                  alt="kled-server"
                  src="https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=kled-web"
                />
              </picture>
            </a>
          </li>
          <li id="project">
            <a
              className="relative h-44 w-96 md:h-[12rem] md:w-[27rem]"
              href="https://github.com/mxngls/admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source
                  srcSet="https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=admin"
                  type="image/webp"
                />
                <img
                  className="object-cover"
                  alt="kled-server"
                  src="https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=admin"
                />
              </picture>
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
