module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mello-yello',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website of mello-yello in priconne.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'assets/main.css',
    { src: '~assets/uikit.scss', lang: 'scss' }
  ],
  plugins: [
    { src: '~plugins/uikit.bundle', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#FFD600' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
