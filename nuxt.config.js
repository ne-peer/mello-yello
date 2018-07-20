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
    { src: "~plugins/uikit.bundle", ssr: false },
    { src: "~plugins/chartjs", ssr: false },
    { src: "~plugins/vue-lazyload", ssr: false }
    // { src: '~plugins/vuetify', ssr: false }
  ],
  modules: [
    "nuxt-material-design-icons",
    ["@nuxtjs/google-analytics", { id: "UA-80675437-4" }],
    "@nuxtjs/pwa"
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
    icons: [
      {
        src: "/static/images/2fe3e8e3-d342-5f8d-a99d-78ddd140a425.webPlatform.png",
        sizes: "44x44",
        type: "image/png"
      },
      {
        src: "/static/images/7627e0ef-8062-5561-a79c-e8efb1764b86.webPlatform.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "/static/images/windows10/SplashScreen.scale-200.png.png",
        sizes: "1240x600",
        type: "image/png"
      },
      {
        src: "/static/images/3754a2af-a4bd-2ff3-4738-9e4b3b33596c.webPlatform.png",
        sizes: "300x300",
        type: "image/png"
      },
      {
        src: "/static/images/807a9168-ce16-d4f7-1825-92f2ac805c70.webPlatform.png",
        sizes: "150x150",
        type: "image/png"
      },
      {
        src: "/static/images/1e3817b4-dc49-5aa7-e5a6-c4b9f11c9e51.webPlatform.png",
        sizes: "88x88",
        type: "image/png"
      },
      {
        src: "/static/images/c1a14b21-def5-18d2-9ce0-37748f1fe2b3.webPlatform.png",
        sizes: "24x24",
        type: "image/png"
      },
      {
        src: "/static/images/581e6474-478a-92d3-de1c-5b281e812121.webPlatform.png",
        sizes: "50x50",
        type: "image/png"
      },
      {
        src: "/static/images/windows10/Wide310x150Logo.scale-200.png.png",
        sizes: "620x300",
        type: "image/png"
      },
      {
        src: "/static/images/f43d068e-3f42-38cf-61d6-16be28409cca.webPlatform.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/static/images/b07bf578-94e0-2471-1097-f7f38ed8f8a4.webPlatform.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/static/images/3ed66322-44b5-ef9a-4281-ee49443cc0df.webPlatform.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/static/images/8cfa3190-3efb-30e4-9b40-fc8512ef8565.webPlatform.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        src: "/static/images/6791a8b3-f015-c056-bc1f-c168259ee271.webPlatform.png",
        sizes: "36x36",
        type: "image/png"
      },
      {
        src: "/static/images/ios/ios-appicon-1024-1024.png",
        sizes: "1024x1024",
        type: "image/png"
      },
      {
        src: "/static/images/93b2f5aa-f1ef-1f0c-3cb6-40500d0479e4.webPlatform.png",
        sizes: "180x180",
        type: "image/png"
      },
      {
        src: "/static/images/e6b5ca26-2745-73fc-0c8e-857846d2507a.webPlatform.png",
        sizes: "152x152",
        type: "image/png"
      },
      {
        src: "/static/images/6616ab5a-2c30-b0e6-d357-e3c46a2a59e5.webPlatform.png",
        sizes: "120x120",
        type: "image/png"
      },
      {
        src: "/static/images/e11cbc8e-5816-182e-de34-14eb8bbd207f.webPlatform.png",
        sizes: "76x76",
        type: "image/png"
      }
    ],
    start_url: "/?utm_source=homescreen",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FFF59D",
    lang: "ja",
    title: "メロウイエロー",
    "og:title": "メロウイエロー",
    "og:description":
      'Website of メロウイエロー clans in "princess connect re:dive".'
  }
};
