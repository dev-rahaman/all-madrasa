/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "upload.wikimedia.org" }],
    remotePatterns: [{ protocol: "https", hostname: "seeklogo.com" }],
  },
};

module.exports = nextConfig;
