importScripts('/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "mello-yello",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2ea4c0d2a9b3aabc8712.js",
    "revision": "3c0173d17aedd1380b92663dd3b33e0d"
  },
  {
    "url": "/_nuxt/layouts/default.a0133f0c9939d0f72be4.js",
    "revision": "ed49f0c37bf97c117626f639b43cdf81"
  },
  {
    "url": "/_nuxt/manifest.903cf793349fd4d4c4b3.js",
    "revision": "ed81e839e0a2b0828d7cf520cef1e929"
  },
  {
    "url": "/_nuxt/pages/index.4f1f627cc542ed9979fc.js",
    "revision": "0298aa5b75745c08bf6c71ad574560d5"
  },
  {
    "url": "/_nuxt/vendor.85af8e5ac14b8d85ae59.js",
    "revision": "99634678434dbb8c5b7cc3a54df3df36"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

