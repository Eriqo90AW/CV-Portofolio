/** @type {import('next').NextConfig} */
const nextConfig = {
    remotePatterns: [
        {
            protocol: 'https',
            host: 'iamges.unsplash.com',
        },
    ],
}

module.exports = nextConfig
