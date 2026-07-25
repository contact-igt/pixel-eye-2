/**
 * Debug endpoint to check environment configuration
 * Visit: http://localhost:3000/api/debug-config
 */

export default function handler(req, res) {
  const config = {
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
      NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    },
    urls: {
      NEXT_PUBLIC_LOCAL_API_URL: process.env.NEXT_PUBLIC_LOCAL_API_URL,
      NEXT_PUBLIC_DEV_API_URL: process.env.NEXT_PUBLIC_DEV_API_URL,
      NEXT_PUBLIC_PROD_API_URL: process.env.NEXT_PUBLIC_PROD_API_URL,
    },
    selected: {
      env: process.env.NEXT_PUBLIC_ENV || 'local',
      apiUrl: (() => {
        const env = process.env.NEXT_PUBLIC_ENV || 'local';
        const urls = {
          local: process.env.NEXT_PUBLIC_LOCAL_API_URL,
          dev: process.env.NEXT_PUBLIC_DEV_API_URL,
          production: process.env.NEXT_PUBLIC_PROD_API_URL,
        };
        return urls[env] || 'NOT SET';
      })(),
    },
    timestamp: new Date().toISOString(),
  };

  res.status(200).json(config);
}
