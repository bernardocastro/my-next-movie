/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_TMDB_KEY: process.env.NEXT_PUBLIC_TMDB_KEY,
    NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL
  }
}