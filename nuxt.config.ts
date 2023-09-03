// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/css/main.css", "~/assets/fonts/stylesheet.css"],
  build: {
    transpile: ['gsap']
  },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/robots",
    'nuxt-simple-sitemap',
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
  image: {
    provider: "ipx"
  },

  devtools: true,
});
