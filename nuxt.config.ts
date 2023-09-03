// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  css: ["~/assets/css/main.css", "~/assets/fonts/stylesheet.css"],
  modules: [
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/robots",
    "@vite-pwa/nuxt",
    'nuxt-simple-sitemap'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: 'https://invac.in',
  },

  devtools: true,
});
