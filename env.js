export default {
  site: {
    address: process.env.NUXT_ENV_BASE_URL
  },
  sentry: {
    dns: process.env.NUXT_ENV_SENTRY_DNS
  },
  seo: {
    site: process.env.NUXT_ENV_SEO_URL,
    twitter: {
      image: process.env.NUXT_ENV_SEO_TWITTER_IMAGE,
      account: process.env.NUXT_ENV_SEO_TWITTER_ACCOUNT
    }
  }
};
