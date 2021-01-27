import projects from './contents/projects';
import posts from './contents/posts';
import snippets from './contents/snippets';

const IMAGE =
  'https://res.cloudinary.com/nogsantos/image/upload/v1590550842/avatar/avatar-professional.png';

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
        content: IMAGE
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://fabricionogueira.me/'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: IMAGE
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
        content: '@nogsantos'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@nogsantos'
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
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://fabricionogueira.me',
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
  }
};
