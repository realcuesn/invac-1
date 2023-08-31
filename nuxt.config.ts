// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      title: `World's Leading Wet and Dry Auto flush Central Vacuum Cleaner | INVAC - Your Cleaning Partner`,
      meta: [
        { name: 'description', content: 'Upgrade to a reliable home central vacuum system from INVAC. Discover our selection of affordable vacuum cleaners and experience the convenience of an automatic central vacuum system.' }
      ],
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
