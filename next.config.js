/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // https://drive.google.com/file/d/1SQ7ttMeU76uCBGJCOHS9VKOkhg5A5sxw/view?usp=drive_link
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
    domains: ["drive.google.com"]
  },
}

module.exports = nextConfig
