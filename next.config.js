/** @type {import('next').NextConfig} */
// next.config.js
nextConfig = {}
module.exports = {nextConfig};

module.exports = {
    experimental: {
        serverComponentsExternalPackages: ['mongoose']
    }
}
