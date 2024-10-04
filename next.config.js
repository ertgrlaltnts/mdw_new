/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      preferRelative: true,
    };

    config.optimization.splitChunks = {
      chunks: "all",
    };
    return config;
  },
};
