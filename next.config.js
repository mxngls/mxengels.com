/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=Gmail-Cleaner",
      "https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=kled-server",
      "https://github-readme-stats.vercel.app/api/pin/?username=mxngls&repo=kled-scraper",
    ],
  },
};

module.exports = nextConfig;
