module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mello-yello',
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'site_name', content: 'メロウイエロー' },
      { hid: 'description', name: 'description', content: 'Website of メロウイエロー clans in "princess connect re:dive".' },
      { hid: 'image', content: 'https://pbs.twimg.com/media/DebJ9t5W4Aoka9o.jpg' },
      { hid: 'google-site-verification', content: 'iGhRc61DwuR7ZSRhxXiZe9PT10azGlsZ51_OtyVzXbE' },
      { hid: 'og:type', content: 'website' },
      { hid: 'og:site_name', content: 'メロウイエロー' },
      { hid: 'og:title', content: 'メロウイエロー' },
      { hid: 'og:description', content: 'Website of メロウイエロー clans in "princess connect re:dive".' },
      { hid: 'og:url', content: 'https://mello-yello.co' },
      { hid: 'og:image', content: 'https://pbs.twimg.com/media/DebJ9t5W4Aoka9o.jpg' }
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
    { src: '~plugins/uikit.bundle', ssr: false },
    { src: '~plugins/vuetify', ssr: false }
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
