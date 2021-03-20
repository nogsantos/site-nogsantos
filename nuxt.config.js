import { Integrations } from '@sentry/tracing';
import projects from './contents/projects';
import posts from './contents/posts';
import snippets from './contents/snippets';
import ENV from './env';

export default {
  mode: 'universal',
  generate: {
    routes: [
      ...projects.map((slug) => `/projects/${slug}/`),
      ...posts.map((slug) => `/posts/${slug}/`),
      ...snippets.map((slug) => `/snippets/${slug}/`)
    ],
    fallback: true
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'pt-br',
      amp: true
    },
    metaInfo: {
      noscript: [{ innerHTML: 'This website requires JavaScript.' }]
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: ENV.seo.twitter.image
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: ENV.seo.site
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: ENV.seo.twitter.image
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: process.env.npm_package_name || ''
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: ENV.seo.twitter.account
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: ENV.seo.twitter.account
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#212121' },
  /*
   ** Global CSS
   */
  css: [
    '@primer/css/support/index.scss',
    '@primer/css/header/index.scss',
    '@primer/css/layout/index.scss',
    '@primer/css/subhead/index.scss',
    '@primer/css/markdown/index.scss',
    '@primer/css/utilities/index.scss',
    '@primer/css/base/index.scss',
    '@/assets/scss/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@plugins/analytics.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-sass-resources-loader',
    '@nuxtjs/sitemap',
    'nuxt-helmet',
    '@nuxtjs/sentry'
  ],

  sentry: {
    dsn: ENV.sentry.dns || process.env.SENTRY_DNS,
    tracing: true,
    tracesSampleRate: 1.0,
    vueOptions: {
      tracing: true,
      tracingOptions: {
        hooks: ['mount', 'update'],
        timeout: 2000,
        trackComponents: true
      }
    },
    config: {
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 1.0
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: ENV.seo.site,
    gzip: true,
    routes: projects.map((slug) => `/projects/${slug}/`)
  },

  markdownit: {
    injected: true
  },

  /*
   ** Security with HTTP headers
   ** See https://helmetjs.github.io/
   */
  helmet: {
    dnsPrefetchControl: true,
    frameguard: true,
    hidePoweredBy: true,
    hsts: true,
    ieNoOpen: true,
    noSniff: true,
    permittedCrossDomainPolicies: true,
    referrerPolicy: true,
    xssFilter: true
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader'
      });
    }
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nuxtjs.org'
  }
};
