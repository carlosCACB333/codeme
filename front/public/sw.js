if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),f={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8d7ece7478934b1edebded0bedd76c35"},{url:"/_next/static/chunks/281-f1bbc7ebb19e839e.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/320-1f667fd4451eefe0.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/331-f92bfaaf1b0381b3.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/4ae7487b-4ec2243fd076215e.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/757-38788afcf464a40c.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/889-d3ca0eb7a24a7f49.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/app/%5Blocale%5D/blog/page-450892ee1f437e40.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-ad021b480e45f78f.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/app/%5Blocale%5D/not-found-50164a69f76db636.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-38afcec87043e38d.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/app/%5Blocale%5D/pricing/page-d91c917f5a418096.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/app/_not-found-0cdb684d825db9f1.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/framework-f780fd9bae3b8c58.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/main-163c6af08a62082d.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/main-app-fbb55017ade3cbca.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/pages/_app-9234a27f28a5d205.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/pages/_error-4b1dc82f93ee50b1.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0a37ca3ae5b60734.js",revision:"s9foGe6r31GyaXFcrVxMw"},{url:"/_next/static/css/d2124583c1e11e8f.css",revision:"d2124583c1e11e8f"},{url:"/_next/static/media/0e4fe491bf84089c-s.p.woff2",revision:"5e22a46c04d947a36ea0cad07afcc9e1"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/8fb72f69fba4e3d2-s.woff2",revision:"7a2e2eae214e49b4333030f789100720"},{url:"/_next/static/media/912a9cfe43c928d9-s.woff2",revision:"376ffe2ca0b038d08d5e582ec13a310f"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/baf12dd90520ae41-s.woff2",revision:"8096f9b1a15c26638179b6c9499ff260"},{url:"/_next/static/media/bbdb6f0234009aba-s.woff2",revision:"5756151c819325914806c6be65088b13"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/e25729ca87cc7df9-s.woff2",revision:"9a74bbc5f0d651f8f5b6df4fb3c5c755"},{url:"/_next/static/media/f06116e890b3dadb-s.woff2",revision:"2855f7c90916c37fe4e6bd36205a26a8"},{url:"/_next/static/s9foGe6r31GyaXFcrVxMw/_buildManifest.js",revision:"da94826b5335bfba1ca7c3e7e38f4032"},{url:"/_next/static/s9foGe6r31GyaXFcrVxMw/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/manifest.json",revision:"79b2f8fcb1e6752302b1c83a820fe366"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/search-meta.json",revision:"8199c5a13882e99ebb846d1f41977feb"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));