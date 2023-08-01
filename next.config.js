/** @type {import("next").NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};
