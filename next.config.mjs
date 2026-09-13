/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "www.csocs.com.au" },
      { protocol: "https", hostname: "csocs.com.au" }
    ]
  }
};

export default nextConfig;
