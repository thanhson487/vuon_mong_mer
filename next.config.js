module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.telegram.org/:path*", // Chuyển hướng request
      },
    ];
  },
};
