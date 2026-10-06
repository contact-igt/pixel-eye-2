

import config from "@/lib/config";

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
      env: config.env,
      apiUrl: config.api.base,
    },
    timestamp: new Date().toISOString(),
  };

  res.status(200).json(config);
}
