module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "メロウイエロー",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "tVP1-RlCcz-LfeMza6YkpVyRdM_Vvi0rdMSsAyx4hJk"
      },
      { hid: "site_name", name: "site_name", content: "メロウイエロー" },
      {
        hid: "description",
        name: "description",
        content:
          'Website of メロウイエロー clans in "princess connect re:dive".'
      },
      {
        hid: "image",
        name: "image",
        content: "https://pbs.twimg.com/media/DebJ9t5W4Aoka9o.jpg"
      },
      { hid: "og:type", name: "og:type", content: "website" },
      { hid: "og:site_name", name: "og:site_name", content: "メロウイエロー" },
      { hid: "og:title", name: "og:title", content: "メロウイエロー" },
      {
        hid: "og:description",
        name: "og:description",
        content:
          'Website of メロウイエロー clans in "princess connect re:dive".'
      },
      { hid: "og:url", name: "og:url", content: "https://mello-yello.co" },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://pbs.twimg.com/media/DebJ9t5W4Aoka9o.jpg"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico?v3" }]
  },
  css: ["assets/main.css", { src: "~assets/uikit.scss", lang: "scss" }],
  plugins: [
    { src: "~plugins/uikit.bundle.js", ssr: false },
    { src: "~plugins/chartjs.js", ssr: false },
    { src: "~plugins/vue-lazyload.js", ssr: false }
  ],
  modules: [
    "nuxt-material-design-icons",
    ["@nuxtjs/google-analytics", { id: "UA-80675437-4" }],
    "@nuxtjs/pwa",
    '@nuxtjs/axios'
  ],
  workbox: {
    dev: true
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#FFD600" },
  /*
  ** Build configuration
  */
  build: {
    vendor: ["chart.js"],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  manifest: {
    name: "メロウイエロー",
    short_name: "メロウイエロー",
    description: "Website of メロウイエロー clans in princess connect re:dive.",
    publicPath: "//_nuxt/",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDE7",
    theme_color: "#FFF59D",
    lang: "ja",
    title: "メロウイエロー",
    "og:title": "メロウイエロー",
    "og:description":
      'Website of メロウイエロー clans in "princess connect re:dive".'
  }
};
