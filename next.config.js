/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./sanity/image-loader.ts",
  },
};

module.exports = nextConfig;
