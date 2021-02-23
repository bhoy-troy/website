const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/navigation-drawer/'
  }
} : {}

export default {

  ...routerBase,
  // Disable Server Side rendering
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'James Troy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
  ** Nuxt.js server
  */
  server: {
    port: process.env.YOUR_PORT || process.env.PORT || 3000, // default: 3000
    host: process.env.YOUR_HOST || '0.0.0.0' // default: localhost
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    },

    babel: {
      presets({isServer}) {
        const targets = isServer ? {node: 'current'} : {ie: 11}
        return [
          [require.resolve("@babel/preset-env"), {targets}]
        ]
      },
      plugins: [
        "@babel/syntax-dynamic-import",
        "@babel/transform-runtime",
        "@babel/transform-async-to-generator"
      ]
    }
  }
};
