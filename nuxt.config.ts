// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      title: "High-Quality Automatic Central Vacuum Cleaners System | INVAC - Your Cleaning Partner",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Upgrade to a reliable home central vacuum system from INVAC. Discover our selection of affordable vacuum cleaners and experience the convenience of an automatic central vacuum system.",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css", "~/assets/fonts/stylesheet.css"],
  modules: [
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/robots",
    "@vite-pwa/nuxt",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: true,
});
