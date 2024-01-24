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
                "connect-src 'self' wss://*.tawk.to https://*.tawk.to;" + // Allows any subdomain of tawk.to
                "font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://embed.tawk.to; " + // Include Tawk.to font URLs
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://embed.tawk.to https://cdn.jsdelivr.net; " +
                "style-src 'self' 'unsafe-inline' https://embed.tawk.to; " +
                "frame-src 'self' https://player.vimeo.com https://mozbar.moz.com; "+ // Allow framing from Vimeo and Mozbar
                "img-src 'self' https://embed.tawk.to;"
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  