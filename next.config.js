/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features
const withTM = require('next-transpile-modules')(['react-ts-tradingview-widgets'])

module.exports = withTM({
  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias
    }

    return config
  }
})
