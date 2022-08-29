import Layout from "../components/Layout";
import Image from "next/image";

export default function Projects() {
  return (
    <Layout>
      <section
        id="projects"
        className="mx-7 mt-7 mb-14 flex h-screen flex-col gap-7 font-light leading-6 sm:mx-20 md:mx-48 md:mt-14 lg:mx-64 xl:mx-72"
      >
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p>
          These are a couple of my selected projects that I think might be
          valuable to others as well. You might find other projects{" "}
          <a href="https://github.com/mxngls">here</a>.
        </p>
        <ul className="mt-4 flex flex-col items-center justify-center">
          <li id="project">
            <div className="relative h-32 w-80 md:h-[12rem] md:w-[27rem]">
              <a
                href="https://github.com/mxngls/Gmail-Cleaner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  layout="fill"
                  alt="ex "
                  src="https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=Gmail-Cleaner"
                ></Image>
              </a>
            </div>
          </li>
          <li id="project">
            <div className="relative h-32 w-80 md:h-[12rem] md:w-[27rem]">
              {" "}
              <a
                href="https://github.com/mxngls/kled-scraper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  layout="fill"
                  alt="ex "
                  src="https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=kled-scraper"
                ></Image>
              </a>
            </div>
          </li>
          <li id="project">
            <div className="relative h-32 w-80 md:h-[12rem] md:w-[27rem]">
              <a
                href="https://github.com/mxngls/kled-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  layout="fill"
                  alt="ex "
                  src="https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=kled-server"
                ></Image>
              </a>
            </div>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
