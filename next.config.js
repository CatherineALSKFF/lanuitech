/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: 
              "default-src 'self'; " +
              "connect-src 'self' wss://*.tawk.to https://*.tawk.to https://*.google-analytics.com; " + // Allow connections to Google Analytics
              "font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://embed.tawk.to; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net https://embed.tawk.to; " +
              "style-src 'self' 'unsafe-inline' https://embed.tawk.to; " +
              "frame-src 'self' https://player.vimeo.com https://mozbar.moz.com; " +
              "img-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://embed.tawk.to;"

              },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  