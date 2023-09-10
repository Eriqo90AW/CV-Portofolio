/** @type {import('next').NextConfig} */
const nextConfig = {
    remotePatterns: [
        {
            protocol: 'https',
            host: 'iamges.unsplash.com',
        },
    ],
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
