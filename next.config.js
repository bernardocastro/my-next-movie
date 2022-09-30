/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  env: {
    TMDB_KEY: process.env.NEXT_PUBLIC_TMDB_KEY,
    IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL
  }
}