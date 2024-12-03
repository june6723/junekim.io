/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer2');

module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  env: { URL: process.env.URL },
});
