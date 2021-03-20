export default {
  site: {
    address: process.env.BASE_URL
  },
  sentry: {
    dns: process.env.SENTRY_DNS
  },
  seo: {
    site: process.env.SEO_URL,
    twitter: {
      image: process.env.SEO_TWITTER_IMAGE,
      account: process.env.SEO_TWITTER_ACCOUNT
    }
  }
};
