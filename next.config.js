/** @type {import('next').NextConfig} */
const nextConfig = {
  //allow image to be fetched from a url
  images: {
    domains: ["cdn.imagin.studio"],
  },
};

module.exports = nextConfig;
