importScripts('/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "mello-yello",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.76f0ebbe550822e1f58b.js",
    "revision": "43389b7d13c0bb75058eeb6fa3a23373"
  },
  {
    "url": "/_nuxt/layouts/default.a0133f0c9939d0f72be4.js",
    "revision": "ed49f0c37bf97c117626f639b43cdf81"
  },
  {
    "url": "/_nuxt/manifest.ba9a8fc794b6ca9ef3fb.js",
    "revision": "d45cd10ab0a7a171440413f81f6a6231"
  },
  {
    "url": "/_nuxt/pages/index.3be18862fb4c90d53a3d.js",
    "revision": "38bdc84721d105b5df837be64309ddb8"
  },
  {
    "url": "/_nuxt/vendor.21daccad32fc4deb4c89.js",
    "revision": "af561ec56a9a929ec4d430a547827113"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

