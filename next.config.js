/** @type {import('next').NextConfig} */

const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
    reactStrictMode: true
    // trailingSlash: true
}

module.exports = withPlugins([
    [nextConfig],
    [
        withImages,
        {
            esModule: true,
            images: { disableStaticImages: true }
        }
    ]
])
