module.exports = {
  output: 'standalone',
  trailingSlash: true,
  experimental: {
    scrollRestoration: true,
  },
  async headers() {
    return [
      {
        // Matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://api.climbbond.com' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,PUT,POST,DELETE,PATCH' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
};
