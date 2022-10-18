/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  env: {
    TMDB_KEY: process.env.TMDB_KEY,
    IMAGE_URL: process.env.IMAGE_URL
  }
}