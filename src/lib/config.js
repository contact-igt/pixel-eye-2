/**
 * config.js
 * ─────────
 * Environment-aware configuration module
 * Dynamically loads API endpoints based on environment using ENV-specific variables
 */

const ENV = process.env.NEXT_PUBLIC_ENV || 'local';

const getApiUrl = () => {
  const urls = {
    local: process.env.NEXT_PUBLIC_LOCAL_API_URL,
    dev: process.env.NEXT_PUBLIC_DEV_API_URL,
    production: process.env.NEXT_PUBLIC_PROD_API_URL,
  };

  const selectedUrl = urls[ENV] || urls.local;

  if (!selectedUrl) {
    console.error(`[config] ⚠️ No API URL found for environment "${ENV}"`);
    console.error(`[config] Available URLs:`, urls);
    console.error(`[config] All ENV vars:`, process.env);
  }

  return selectedUrl;
};

const API_URL = getApiUrl();
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Pixel Eye Blog';

const config = {
  env: ENV,
  isDev: ENV === 'dev',
  isLocal: ENV === 'local',
  isProd: ENV === 'production',
  apiUrl: API_URL,
  appName: APP_NAME,

  api: {
    base: API_URL,
    endpoints: {
      getBlogs: `${API_URL}/public/blogs`,
      getBlogBySlug: (slug) => `${API_URL}/public/blogs/${slug}`,
    },
  },

  features: {
    debug: ENV !== 'production',
    analytics: ENV === 'production',
  },
};

export default config;
